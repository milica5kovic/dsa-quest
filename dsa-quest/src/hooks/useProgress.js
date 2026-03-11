// src/hooks/useProgress.js
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

const USER_ID = "mia";

export function useProgress() {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const docRef = doc(db, "progress", USER_ID);

  useEffect(() => {
    const load = async () => {
      try {
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setProgress(snap.data());
        } else {
          const initial = buildInitialProgress();
          await setDoc(docRef, initial);
          setProgress(initial);
        }
      } catch (e) {
        console.warn("Firebase unavailable, using localStorage fallback", e);
        const local = localStorage.getItem("dsa_progress");
        setProgress(local ? JSON.parse(local) : buildInitialProgress());
      }
      setLoading(false);
    };
    load();
  }, []);

  const save = async (updated) => {
    setProgress(updated);
    localStorage.setItem("dsa_progress", JSON.stringify(updated));
    try {
      await updateDoc(docRef, { ...updated, updatedAt: serverTimestamp() });
    } catch (e) {
      console.warn("Offline — saved to localStorage only");
    }
  };

  const toggleProblem = async (weekIdx, problemId) => {
    if (!progress) return;
    const updated = { ...progress };
    const key = `w${weekIdx}_${problemId}`;
    updated.completedProblems = {
      ...updated.completedProblems,
      [key]: !updated.completedProblems?.[key],
    };
    updated.xp = computeXP(updated.completedProblems);
    updated.level = computeLevel(updated.xp);
    await save(updated);
  };

  const toggleTask = async (taskId) => {
    if (!progress) return;
    const updated = { ...progress };
    updated.completedTasks = {
      ...updated.completedTasks,
      [taskId]: !updated.completedTasks?.[taskId],
    };
    await save(updated);
  };

  const toggleWorksheet = async (wsId, itemId) => {
    if (!progress) return;
    const updated = { ...progress };
    const key = `ws${wsId}_${itemId}`;
    updated.completedWorksheet = {
      ...updated.completedWorksheet,
      [key]: !updated.completedWorksheet?.[key],
    };
    await save(updated);
  };

  // dayKey = "2026-03-11"
  const logDay = async (dayKey, data) => {
    if (!progress) return;
    const updated = { ...progress };
    const existing = updated.dailyLog?.[dayKey] || {};
    updated.dailyLog = {
      ...updated.dailyLog,
      [dayKey]: { ...existing, ...data, updatedAt: new Date().toISOString() },
    };
    // compute streak
    updated.streak = computeStreak(updated.dailyLog);
    await save(updated);
  };

  const clearDay = async (dayKey) => {
    if (!progress) return;
    const updated = { ...progress };
    const log = { ...updated.dailyLog };
    delete log[dayKey];
    updated.dailyLog = log;
    updated.streak = computeStreak(updated.dailyLog);
    await save(updated);
  };

  return { progress, loading, toggleProblem, toggleTask, toggleWorksheet, logDay, clearDay };
}

function computeXP(completed) {
  return Object.values(completed || {}).filter(Boolean).length * 15;
}

function computeLevel(xp) {
  if (xp >= 1600) return 7;
  if (xp >= 1200) return 6;
  if (xp >= 900) return 5;
  if (xp >= 600) return 4;
  if (xp >= 400) return 3;
  if (xp >= 250) return 2;
  if (xp >= 100) return 1;
  return 1;
}

function computeStreak(dailyLog = {}) {
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    if (dailyLog[key]?.done) streak++;
    else break;
  }
  return streak;
}

function buildInitialProgress() {
  return {
    completedProblems: {},
    completedTasks: {},
    completedWorksheet: {},
    dailyLog: {},
    xp: 0,
    level: 1,
    streak: 0,
    createdAt: new Date().toISOString(),
  };
}