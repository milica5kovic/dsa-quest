// src/hooks/useProgress.js
import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const USER_ID = "mia"; // single-user app — change if you add auth

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

  return { progress, loading, toggleProblem, toggleTask, toggleWorksheet };
}

function computeXP(completed) {
  return Object.values(completed || {}).filter(Boolean).length * 15;
}

function computeLevel(xp) {
  if (xp >= 600) return 5;
  if (xp >= 400) return 4;
  if (xp >= 250) return 3;
  if (xp >= 100) return 2;
  return 1;
}

function buildInitialProgress() {
  return {
    completedProblems: {},
    completedTasks: {},
    completedWorksheet: {},
    xp: 0,
    level: 1,
    streak: 0,
    lastActive: null,
    createdAt: new Date().toISOString(),
  };
}
