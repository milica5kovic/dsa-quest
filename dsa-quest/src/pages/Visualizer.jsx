// src/pages/Visualizer.jsx
import { useState, useEffect, useRef, useCallback } from "react";

// ─── ALGORITHM DEFINITIONS ───────────────────────────────────────────────────

function* twoSumBrute(nums, target) {
  yield { type: "init", message: `Array: [${nums}], target: ${target}`, map: {}, i: -1, j: -1, highlight: [], found: null };
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      yield { type: "check", message: `i=${i} (${nums[i]}) + j=${j} (${nums[j]}) = ${sum}. Is ${sum} == ${target}?`, i, j, highlight: [i, j], found: null, map: {} };
      if (sum === target) {
        yield { type: "found", message: `✅ Found! ${nums[i]} + ${nums[j]} = ${target}. Return [${i}, ${j}]`, i, j, highlight: [i, j], found: [i, j], map: {} };
        return;
      }
    }
  }
  yield { type: "notfound", message: "No solution found.", i: -1, j: -1, highlight: [], found: null, map: {} };
}

function* twoSumOptimal(nums, target) {
  const map = {};
  yield { type: "init", message: `Array: [${nums}], target: ${target}. HashMap starts empty.`, map: {}, i: -1, highlight: [], found: null };
  for (let i = 0; i < nums.length; i++) {
    const compl = target - nums[i];
    yield { type: "check", message: `i=${i}, num=${nums[i]}. Need complement: ${target} - ${nums[i]} = ${compl}. Is ${compl} in map?`, map: { ...map }, i, highlight: [i], found: null, compl };
    if (map[compl] !== undefined) {
      yield { type: "found", message: `✅ Found ${compl} in map at index ${map[compl]}! Return [${map[compl]}, ${i}]`, map: { ...map }, i, highlight: [map[compl], i], found: [map[compl], i], compl };
      return;
    }
    map[nums[i]] = i;
    yield { type: "store", message: `${compl} not in map. Store nums[${i}]=${nums[i]} → index ${i} in map.`, map: { ...map }, i, highlight: [i], found: null, compl };
  }
}

function* stockBrute(prices) {
  let maxProfit = 0;
  yield { type: "init", message: `Prices: [${prices}]. Check every buy/sell pair.`, i: -1, j: -1, highlight: [], maxProfit, buyIdx: -1, sellIdx: -1 };
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      yield { type: "check", message: `Buy day ${i} ($${prices[i]}), sell day ${j} ($${prices[j]}). Profit = ${profit}. Max so far = ${maxProfit}`, i, j, highlight: [i, j], maxProfit, buyIdx: -1, sellIdx: -1 };
      if (profit > maxProfit) {
        maxProfit = profit;
        yield { type: "update", message: `🆕 New max profit: ${maxProfit} (buy day ${i}, sell day ${j})`, i, j, highlight: [i, j], maxProfit, buyIdx: i, sellIdx: j };
      }
    }
  }
  yield { type: "done", message: `✅ Max profit = ${maxProfit}`, i: -1, j: -1, highlight: [], maxProfit, buyIdx: -1, sellIdx: -1 };
}

function* stockOptimal(prices) {
  let minPrice = prices[0], maxProfit = 0, minIdx = 0, buyIdx = 0, sellIdx = -1;
  yield { type: "init", message: `Start: minPrice = ${minPrice}, maxProfit = 0`, highlight: [0], minPrice, maxProfit, minIdx, buyIdx, sellIdx: -1 };
  for (let i = 1; i < prices.length; i++) {
    yield { type: "check", message: `Day ${i}: price = ${prices[i]}. Is ${prices[i]} < minPrice (${minPrice})?`, highlight: [i], minPrice, maxProfit, minIdx, buyIdx, sellIdx };
    if (prices[i] < minPrice) {
      minPrice = prices[i]; minIdx = i; buyIdx = i;
      yield { type: "update_min", message: `📉 New min! minPrice = ${minPrice} at day ${i}`, highlight: [i], minPrice, maxProfit, minIdx, buyIdx, sellIdx };
    } else {
      const profit = prices[i] - minPrice;
      yield { type: "check_profit", message: `Profit if sell today: ${prices[i]} - ${minPrice} = ${profit}. Max so far = ${maxProfit}`, highlight: [minIdx, i], minPrice, maxProfit, minIdx, buyIdx, sellIdx };
      if (profit > maxProfit) {
        maxProfit = profit; sellIdx = i;
        yield { type: "update_profit", message: `🆕 New max profit: ${maxProfit}! Buy day ${buyIdx}, sell day ${i}`, highlight: [buyIdx, i], minPrice, maxProfit, minIdx, buyIdx, sellIdx };
      }
    }
  }
  yield { type: "done", message: `✅ Max profit = ${maxProfit}`, highlight: [], minPrice, maxProfit, minIdx, buyIdx, sellIdx };
}

function* maxSubarrayBrute(nums) {
  let maxSum = nums[0];
  yield { type: "init", message: `Try every subarray. maxSum starts at ${maxSum}`, highlight: [], maxSum, currSum: 0, start: -1, end: -1 };
  for (let i = 0; i < nums.length; i++) {
    let curr = 0;
    for (let j = i; j < nums.length; j++) {
      curr += nums[j];
      yield { type: "check", message: `Subarray [${i}..${j}] = [${nums.slice(i, j+1)}], sum = ${curr}. Max = ${maxSum}`, highlight: Array.from({length: j-i+1}, (_, k) => i+k), maxSum, currSum: curr, start: i, end: j };
      if (curr > maxSum) {
        maxSum = curr;
        yield { type: "update", message: `🆕 New max sum: ${maxSum}`, highlight: Array.from({length: j-i+1}, (_, k) => i+k), maxSum, currSum: curr, start: i, end: j };
      }
    }
  }
  yield { type: "done", message: `✅ Max subarray sum = ${maxSum}`, highlight: [], maxSum, currSum: maxSum, start: -1, end: -1 };
}

function* maxSubarrayKadane(nums) {
  let curr = nums[0], best = nums[0], bestStart = 0, bestEnd = 0, start = 0;
  yield { type: "init", message: `Kadane's: curr = ${curr}, best = ${best}`, highlight: [0], curr, best, bestStart, bestEnd };
  for (let i = 1; i < nums.length; i++) {
    yield { type: "check", message: `i=${i}, num=${nums[i]}. Start fresh (${nums[i]}) or extend (${curr} + ${nums[i]} = ${curr + nums[i]})?`, highlight: [i], curr, best, bestStart, bestEnd };
    if (nums[i] > curr + nums[i]) {
      curr = nums[i]; start = i;
      yield { type: "reset", message: `🔄 Start fresh! curr = ${curr} (extending was worse)`, highlight: [i], curr, best, bestStart, bestEnd };
    } else {
      curr = curr + nums[i];
      yield { type: "extend", message: `➕ Extend! curr = ${curr}`, highlight: [i], curr, best, bestStart, bestEnd };
    }
    if (curr > best) {
      best = curr; bestStart = start; bestEnd = i;
      yield { type: "update", message: `🆕 New best = ${best}`, highlight: Array.from({length: bestEnd-bestStart+1}, (_, k) => bestStart+k), curr, best, bestStart, bestEnd };
    }
  }
  yield { type: "done", message: `✅ Max subarray sum = ${best}`, highlight: Array.from({length: bestEnd-bestStart+1}, (_, k) => bestStart+k), curr, best, bestStart, bestEnd };
}

function* containsDupBrute(nums) {
  yield { type: "init", message: `Check every pair for duplicates.`, highlight: [], i: -1, j: -1, found: false };
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      yield { type: "check", message: `Is nums[${i}] (${nums[i]}) == nums[${j}] (${nums[j]})?`, highlight: [i, j], i, j, found: false };
      if (nums[i] === nums[j]) {
        yield { type: "found", message: `✅ Duplicate found! ${nums[i]} at index ${i} and ${j}. Return true.`, highlight: [i, j], i, j, found: true };
        return;
      }
    }
  }
  yield { type: "notfound", message: `No duplicates. Return false.`, highlight: [], i: -1, j: -1, found: false };
}

function* containsDupOptimal(nums) {
  const set = new Set();
  yield { type: "init", message: `HashSet starts empty.`, highlight: [], set: [], i: -1, found: false };
  for (let i = 0; i < nums.length; i++) {
    yield { type: "check", message: `i=${i}, num=${nums[i]}. Is ${nums[i]} already in set?`, highlight: [i], set: [...set], i, found: false };
    if (set.has(nums[i])) {
      yield { type: "found", message: `✅ ${nums[i]} already in set! Return true.`, highlight: [i], set: [...set], i, found: true };
      return;
    }
    set.add(nums[i]);
    yield { type: "store", message: `Not in set. Add ${nums[i]} to set.`, highlight: [i], set: [...set], i, found: false };
  }
  yield { type: "notfound", message: `No duplicates found. Return false.`, highlight: [], set: [...set], i: -1, found: false };
}

// ─── PROBLEM CONFIG ───────────────────────────────────────────────────────────

const PROBLEMS = [
  {
    id: "two-sum",
    title: "Two Sum",
    lc: 1,
    emoji: "🗺️",
    color: "#D4C5F9",
    colorDark: "#A08FD6",
    defaultInput: "2,7,11,15",
    hasTarget: true,
    defaultTarget: "9",
    description: "Find two numbers that add up to target. Return their indices.",
    brute: { fn: twoSumBrute, time: "O(n²)", space: "O(1)", label: "Nested loops — check every pair" },
    optimal: { fn: twoSumOptimal, time: "O(n)", space: "O(n)", label: "HashMap — store seen numbers" },
  },
  {
    id: "stock",
    title: "Best Time to Buy & Sell Stock",
    lc: 121,
    emoji: "📈",
    color: "#C2F0DC",
    colorDark: "#52B080",
    defaultInput: "7,1,5,3,6,4",
    hasTarget: false,
    description: "Find the max profit from one buy and one sell.",
    brute: { fn: stockBrute, time: "O(n²)", space: "O(1)", label: "Every buy/sell pair" },
    optimal: { fn: stockOptimal, time: "O(n)", space: "O(1)", label: "Track min price seen so far" },
  },
  {
    id: "max-subarray",
    title: "Maximum Subarray",
    lc: 53,
    emoji: "⚡",
    color: "#FFD6C2",
    colorDark: "#E8A882",
    defaultInput: "-2,1,-3,4,-1,2,1,-5,4",
    hasTarget: false,
    description: "Find the contiguous subarray with the largest sum.",
    brute: { fn: maxSubarrayBrute, time: "O(n²)", space: "O(1)", label: "Try every subarray" },
    optimal: { fn: maxSubarrayKadane, time: "O(n)", space: "O(1)", label: "Kadane's — extend or restart" },
  },
  {
    id: "contains-dup",
    title: "Contains Duplicate",
    lc: 217,
    emoji: "🔍",
    color: "#C2DEFF",
    colorDark: "#7AB5F0",
    defaultInput: "1,2,3,1",
    hasTarget: false,
    description: "Return true if any value appears at least twice.",
    brute: { fn: containsDupBrute, time: "O(n²)", space: "O(1)", label: "Compare every pair" },
    optimal: { fn: containsDupOptimal, time: "O(n)", space: "O(n)", label: "HashSet — O(1) lookup" },
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function Visualizer() {
  const [activeProblem, setActiveProblem] = useState(PROBLEMS[0]);
  const [mode, setMode] = useState("optimal"); // "brute" | "optimal"
  const [inputVal, setInputVal] = useState(PROBLEMS[0].defaultInput);
  const [targetVal, setTargetVal] = useState(PROBLEMS[0].defaultTarget || "");
  const [steps, setSteps] = useState([]);
  const [stepIdx, setStepIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(900);
  const [started, setStarted] = useState(false);
  const intervalRef = useRef(null);

  const currentStep = steps[stepIdx] || null;

  const parseInput = () => {
    try {
      return inputVal.split(",").map(s => parseInt(s.trim())).filter(n => !isNaN(n));
    } catch { return []; }
  };

  const buildSteps = useCallback((problem, m, input, target) => {
    const gen = m === "brute"
      ? (problem.hasTarget ? problem.brute.fn(input, target) : problem.brute.fn(input))
      : (problem.hasTarget ? problem.optimal.fn(input, target) : problem.optimal.fn(input));
    const all = [];
    for (const s of gen) all.push(s);
    return all;
  }, []);

  const handleStart = () => {
    const nums = parseInput();
    if (!nums.length) return;
    const target = parseInt(targetVal);
    if (activeProblem.hasTarget && isNaN(target)) return;
    const s = buildSteps(activeProblem, mode, nums, target);
    setSteps(s);
    setStepIdx(0);
    setStarted(true);
    setPlaying(false);
  };

  const handleNext = () => {
    if (stepIdx < steps.length - 1) setStepIdx(i => i + 1);
  };

  const handlePrev = () => {
    if (stepIdx > 0) setStepIdx(i => i - 1);
  };

  const handleReset = () => {
    setPlaying(false);
    setStepIdx(0);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setStepIdx(i => {
          if (i >= steps.length - 1) { setPlaying(false); return i; }
          return i + 1;
        });
      }, speed);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [playing, speed, steps.length]);

  const nums = parseInput();
  const algo = mode === "brute" ? activeProblem.brute : activeProblem.optimal;

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <h1 style={s.title}>🎬 Algorithm Visualizer</h1>
        <p style={s.sub}>Watch each algorithm step by step. Brute force vs Optimal.</p>
      </div>

      {/* Problem selector */}
      <div style={s.problemTabs}>
        {PROBLEMS.map(p => (
          <button
            key={p.id}
            onClick={() => {
              setActiveProblem(p);
              setInputVal(p.defaultInput);
              setTargetVal(p.defaultTarget || "");
              setStarted(false);
              setSteps([]);
              setPlaying(false);
            }}
            style={{
              ...s.problemTab,
              background: activeProblem.id === p.id ? p.color : "#FFF",
              borderColor: activeProblem.id === p.id ? p.colorDark : "#EDE8FF",
              fontWeight: activeProblem.id === p.id ? 700 : 500,
            }}
          >
            <span>{p.emoji}</span>
            <span style={{ fontSize: "12px" }}>#{p.lc}</span>
            <span style={{ fontSize: "12px" }}>{p.title}</span>
          </button>
        ))}
      </div>

      {/* Mode toggle + input */}
      <div style={s.controls}>
        <div style={s.modeToggle}>
          <button
            style={{ ...s.modeBtn, background: mode === "brute" ? "#FFE0E0" : "#FFF", borderColor: mode === "brute" ? "#F09090" : "#EDE8FF", fontWeight: mode === "brute" ? 700 : 500 }}
            onClick={() => { setMode("brute"); setStarted(false); }}
          >
            🐢 Brute Force<br />
            <span style={{ fontSize: "11px", color: "#7B6F96" }}>{activeProblem.brute.time}</span>
          </button>
          <div style={s.vsLabel}>VS</div>
          <button
            style={{ ...s.modeBtn, background: mode === "optimal" ? "#C2F0DC" : "#FFF", borderColor: mode === "optimal" ? "#52B080" : "#EDE8FF", fontWeight: mode === "optimal" ? 700 : 500 }}
            onClick={() => { setMode("optimal"); setStarted(false); }}
          >
            🚀 Optimal<br />
            <span style={{ fontSize: "11px", color: "#7B6F96" }}>{activeProblem.optimal.time}</span>
          </button>
        </div>

        <div style={s.inputRow}>
          <div style={s.inputGroup}>
            <label style={s.inputLabel}>Array (comma separated)</label>
            <input
              style={s.input}
              value={inputVal}
              onChange={e => { setInputVal(e.target.value); setStarted(false); }}
              placeholder="2,7,11,15"
            />
          </div>
          {activeProblem.hasTarget && (
            <div style={s.inputGroup}>
              <label style={s.inputLabel}>Target</label>
              <input
                style={{ ...s.input, width: "80px" }}
                value={targetVal}
                onChange={e => { setTargetVal(e.target.value); setStarted(false); }}
                placeholder="9"
              />
            </div>
          )}
          <button style={s.startBtn} onClick={handleStart}>▶ Visualize</button>
        </div>
      </div>

      {/* Big-O comparison */}
      <div style={s.bigORow}>
        <div style={{ ...s.bigOCard, background: "#FFE8E8", borderColor: "#F09090" }}>
          <div style={s.bigOLabel}>🐢 Brute Force</div>
          <div style={s.bigOTime}>{activeProblem.brute.time}</div>
          <div style={s.bigOSpace}>Space: {activeProblem.brute.space}</div>
          <div style={s.bigODesc}>{activeProblem.brute.label}</div>
        </div>
        <div style={s.bigOArrow}>→</div>
        <div style={{ ...s.bigOCard, background: "#C2F0DC", borderColor: "#52B080" }}>
          <div style={s.bigOLabel}>🚀 Optimal</div>
          <div style={s.bigOTime}>{activeProblem.optimal.time}</div>
          <div style={s.bigOSpace}>Space: {activeProblem.optimal.space}</div>
          <div style={s.bigODesc}>{activeProblem.optimal.label}</div>
        </div>
      </div>

      {/* Visualization */}
      {started && currentStep && (
        <div style={s.vizCard}>
          {/* Array display */}
          <div style={s.arrayWrap}>
            {nums.map((n, idx) => {
              const isHighlight = currentStep.highlight?.includes(idx);
              const isFound = currentStep.found && currentStep.found.includes(idx);
              return (
                <div key={idx} style={{ ...s.arrayCell, background: isFound ? "#C2F0DC" : isHighlight ? activeProblem.color : "#F5F2FF", border: `2px solid ${isFound ? "#52B080" : isHighlight ? activeProblem.colorDark : "#EDE8FF"}`, transform: isHighlight ? "translateY(-4px)" : "none", transition: "all 0.3s ease" }}>
                  <div style={s.arrayCellVal}>{n}</div>
                  <div style={s.arrayCellIdx}>{idx}</div>
                </div>
              );
            })}
          </div>

          {/* Step message */}
          <div style={{ ...s.stepMsg, borderLeft: `4px solid ${activeProblem.colorDark}` }}>
            <span style={s.stepCounter}>Step {stepIdx + 1}/{steps.length}</span>
            <span style={s.stepText}>{currentStep.message}</span>
          </div>

          {/* HashMap / Set display (if applicable) */}
          {currentStep.map && Object.keys(currentStep.map).length > 0 && (
            <div style={s.mapDisplay}>
              <div style={s.mapLabel}>📦 HashMap</div>
              <div style={s.mapEntries}>
                {Object.entries(currentStep.map).map(([k, v]) => (
                  <div key={k} style={s.mapEntry}>
                    <span style={s.mapKey}>{k}</span>
                    <span style={s.mapArrow}>→</span>
                    <span style={s.mapVal}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep.set && currentStep.set.length > 0 && (
            <div style={s.mapDisplay}>
              <div style={s.mapLabel}>📦 HashSet</div>
              <div style={s.mapEntries}>
                {currentStep.set.map((v, i) => (
                  <div key={i} style={s.mapEntry}>
                    <span style={s.mapKey}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats for stock/subarray */}
          {currentStep.maxProfit !== undefined && (
            <div style={s.statsDisplay}>
              <div style={s.statChip}>💰 Max Profit: <strong>{currentStep.maxProfit}</strong></div>
              {currentStep.minPrice !== undefined && <div style={s.statChip}>📉 Min Price: <strong>{currentStep.minPrice}</strong></div>}
            </div>
          )}
          {currentStep.best !== undefined && (
            <div style={s.statsDisplay}>
              <div style={s.statChip}>⚡ Best Sum: <strong>{currentStep.best}</strong></div>
              <div style={s.statChip}>📍 Current Sum: <strong>{currentStep.curr}</strong></div>
            </div>
          )}

          {/* Controls */}
          <div style={s.playerControls}>
            <button style={s.ctrlBtn} onClick={handleReset}>⏮</button>
            <button style={{ ...s.ctrlBtn, opacity: stepIdx === 0 ? 0.4 : 1, cursor: stepIdx === 0 ? "not-allowed" : "pointer" }} onClick={handlePrev} disabled={stepIdx === 0}>◀</button>
            <button
              style={{ ...s.ctrlBtn, ...s.playBtn, background: playing ? "#FFD6C2" : "#C2F0DC" }}
              onClick={() => setPlaying(p => !p)}
            >
              {playing ? "⏸ Pause" : "▶ Play"}
            </button>
            <button style={{ ...s.ctrlBtn, opacity: stepIdx === steps.length - 1 ? 0.4 : 1, cursor: stepIdx === steps.length - 1 ? "not-allowed" : "pointer" }} onClick={handleNext} disabled={stepIdx === steps.length - 1}>▶</button>
            <button style={s.ctrlBtn} onClick={() => setStepIdx(steps.length - 1)}>⏭</button>

            <div style={s.speedControl}>
              <span style={s.speedLabel}>Speed</span>
              {[1500, 900, 400].map((sp, i) => (
                <button
                  key={sp}
                  style={{ ...s.speedBtn, background: speed === sp ? activeProblem.color : "#F5F2FF", fontWeight: speed === sp ? 700 : 400 }}
                  onClick={() => setSpeed(sp)}
                >
                  {["🐢", "🐇", "⚡"][i]}
                </button>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div style={s.progressBar}>
            <div style={{ ...s.progressFill, width: `${((stepIdx + 1) / steps.length) * 100}%`, background: activeProblem.colorDark }} />
          </div>
        </div>
      )}

      {/* Empty state */}
      {!started && (
        <div style={s.emptyState}>
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>{activeProblem.emoji}</div>
          <div style={s.emptyTitle}>{activeProblem.title}</div>
          <div style={s.emptyDesc}>{activeProblem.description}</div>
          <div style={s.emptyHint}>Select an array, click ▶ Visualize and watch each step!</div>
        </div>
      )}
    </div>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const s = {
  page: { maxWidth: "900px", margin: "0 auto", padding: "2rem 1.25rem 4rem" },
  header: { marginBottom: "1.5rem" },
  title: { fontSize: "clamp(22px, 5vw, 30px)", fontWeight: 700, color: "#2D2640" },
  sub: { fontSize: "14px", color: "#7B6F96", marginTop: "4px" },

  problemTabs: { display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1.25rem" },
  problemTab: { display: "flex", alignItems: "center", gap: "6px", padding: "8px 14px", borderRadius: "12px", border: "1.5px solid", cursor: "pointer", fontFamily: "'Sora', sans-serif", transition: "all 0.2s" },

  controls: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "16px", padding: "1.25rem", marginBottom: "1rem" },
  modeToggle: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" },
  modeBtn: { flex: 1, minWidth: "140px", padding: "10px 14px", borderRadius: "12px", border: "1.5px solid", cursor: "pointer", fontFamily: "'Sora', sans-serif", fontSize: "13px", textAlign: "center", transition: "all 0.2s", lineHeight: 1.6 },
  vsLabel: { fontWeight: 700, fontSize: "12px", color: "#A89EC0" },

  inputRow: { display: "flex", gap: "10px", alignItems: "flex-end", flexWrap: "wrap" },
  inputGroup: { display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: "160px" },
  inputLabel: { fontSize: "11px", fontWeight: 700, color: "#A89EC0", textTransform: "uppercase" },
  input: { padding: "8px 12px", borderRadius: "10px", border: "1.5px solid #EDE8FF", fontFamily: "'Sora', sans-serif", fontSize: "13px", color: "#2D2640", background: "#FAFAFF" },
  startBtn: { padding: "9px 20px", background: "linear-gradient(135deg, #D4C5F9, #A08FD6)", color: "white", border: "none", borderRadius: "10px", fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "13px", cursor: "pointer", whiteSpace: "nowrap" },

  bigORow: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem", flexWrap: "wrap" },
  bigOCard: { flex: 1, minWidth: "140px", borderRadius: "14px", padding: "1rem", border: "1.5px solid" },
  bigOLabel: { fontSize: "11px", fontWeight: 700, color: "#7B6F96", textTransform: "uppercase", marginBottom: "4px" },
  bigOTime: { fontSize: "20px", fontWeight: 700, color: "#2D2640", fontFamily: "'JetBrains Mono', monospace" },
  bigOSpace: { fontSize: "11px", color: "#7B6F96", fontFamily: "'JetBrains Mono', monospace", marginBottom: "4px" },
  bigODesc: { fontSize: "12px", color: "#4A3F60" },
  bigOArrow: { fontSize: "20px", color: "#A89EC0", fontWeight: 700 },

  vizCard: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 4px 32px rgba(120,100,200,0.08)" },

  arrayWrap: { display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1.25rem", justifyContent: "center" },
  arrayCell: { minWidth: "48px", borderRadius: "12px", padding: "8px 4px", textAlign: "center" },
  arrayCellVal: { fontWeight: 700, fontSize: "18px", color: "#2D2640", fontFamily: "'JetBrains Mono', monospace" },
  arrayCellIdx: { fontSize: "10px", color: "#A89EC0", marginTop: "2px" },

  stepMsg: { background: "#FAFAFF", borderRadius: "10px", padding: "12px 14px", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "4px" },
  stepCounter: { fontSize: "10px", fontWeight: 700, color: "#A89EC0", textTransform: "uppercase" },
  stepText: { fontSize: "13px", color: "#2D2640", lineHeight: 1.5 },

  mapDisplay: { background: "#F5F2FF", borderRadius: "12px", padding: "10px 14px", marginBottom: "10px" },
  mapLabel: { fontSize: "11px", fontWeight: 700, color: "#A08FD6", marginBottom: "8px", textTransform: "uppercase" },
  mapEntries: { display: "flex", flexWrap: "wrap", gap: "6px" },
  mapEntry: { background: "#FFF", border: "1.5px solid #D4C5F9", borderRadius: "8px", padding: "4px 10px", display: "flex", alignItems: "center", gap: "6px" },
  mapKey: { fontWeight: 700, fontSize: "13px", color: "#2D2640", fontFamily: "'JetBrains Mono', monospace" },
  mapArrow: { color: "#A08FD6", fontSize: "12px" },
  mapVal: { fontSize: "13px", color: "#A08FD6", fontFamily: "'JetBrains Mono', monospace" },

  statsDisplay: { display: "flex", gap: "8px", marginBottom: "10px", flexWrap: "wrap" },
  statChip: { background: "#EDE8FF", borderRadius: "8px", padding: "6px 12px", fontSize: "12px", color: "#2D2640" },

  playerControls: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px", flexWrap: "wrap" },
  ctrlBtn: { padding: "8px 12px", background: "#F5F2FF", border: "1.5px solid #EDE8FF", borderRadius: "8px", fontFamily: "'Sora', sans-serif", fontSize: "13px", cursor: "pointer", color: "#2D2640" },
  playBtn: { padding: "8px 20px", fontWeight: 700, border: "none" },
  speedControl: { display: "flex", alignItems: "center", gap: "5px", marginLeft: "auto" },
  speedLabel: { fontSize: "11px", color: "#A89EC0", fontWeight: 600 },
  speedBtn: { width: "28px", height: "28px", borderRadius: "7px", border: "1.5px solid #EDE8FF", cursor: "pointer", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center" },

  progressBar: { background: "#EDE8FF", borderRadius: "999px", height: "5px", overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: "999px", transition: "width 0.3s ease" },

  emptyState: { background: "#FFF", border: "1.5px solid #EDE8FF", borderRadius: "20px", padding: "3rem 2rem", textAlign: "center" },
  emptyTitle: { fontWeight: 700, fontSize: "18px", color: "#2D2640", marginBottom: "8px" },
  emptyDesc: { fontSize: "14px", color: "#7B6F96", marginBottom: "12px" },
  emptyHint: { fontSize: "12px", color: "#A89EC0", background: "#F5F2FF", borderRadius: "10px", padding: "8px 16px", display: "inline-block" },
};