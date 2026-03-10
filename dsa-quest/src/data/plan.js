// src/data/plan.js

export const WEEKS = [
  {
    id: 1,
    title: "Arrays & Strings",
    emoji: "🧱",
    color: "#FFD6C2",
    colorDark: "#E8A882",
    theme: "Brute force thinking, basic traversal, string manipulation",
    portfolioTask: "Polish wildlife README",
    targetProblems: "6–8 problems",
    keyPatterns: ["Brute → Optimize", "Kadane's Algorithm", "In-place manipulation"],
    problems: [
      { id: "two-sum", lc: 1, name: "Two Sum", diff: "Easy", time: "O(n)", space: "O(n)", hint: "HashMap for complement lookup" },
      { id: "stock", lc: 121, name: "Best Time to Buy & Sell Stock", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Track min so far" },
      { id: "max-subarray", lc: 53, name: "Maximum Subarray", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Kadane's: reset when negative" },
      { id: "contains-dup", lc: 217, name: "Contains Duplicate", diff: "Easy", time: "O(n)", space: "O(n)", hint: "HashSet" },
      { id: "valid-anagram", lc: 242, name: "Valid Anagram", diff: "Easy", time: "O(n)", space: "O(1)", hint: "26-char frequency array" },
      { id: "reverse-string", lc: 344, name: "Reverse String", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Two pointers, swap in-place" },
      { id: "merge-sorted", lc: 88, name: "Merge Sorted Array", diff: "Easy", time: "O(m+n)", space: "O(1)", hint: "Fill from the back" },
    ],
    bigOFocus: "Understand why HashMap turns O(n²) into O(n)"
  },
  {
    id: 2,
    title: "HashMaps & Sets",
    emoji: "🗺️",
    color: "#D4C5F9",
    colorDark: "#A08FD6",
    theme: "Frequency counting, complement lookup, grouping",
    portfolioTask: "green-school README + 3 other READMEs",
    targetProblems: "6–8 problems",
    keyPatterns: ["Frequency Count", "Complement Lookup", "Grouping by key"],
    problems: [
      { id: "group-anagrams", lc: 49, name: "Group Anagrams", diff: "Medium", time: "O(n·k)", space: "O(n)", hint: "Sort each word as key" },
      { id: "top-k", lc: 347, name: "Top K Frequent Elements", diff: "Medium", time: "O(n log k)", space: "O(n)", hint: "HashMap + bucket sort" },
      { id: "product-except", lc: 238, name: "Product of Array Except Self", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Prefix & suffix products" },
      { id: "encode-decode", lc: 271, name: "Encode & Decode Strings", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Length prefix encoding" },
      { id: "longest-consec", lc: 128, name: "Longest Consecutive Sequence", diff: "Medium", time: "O(n)", space: "O(n)", hint: "HashSet, only start from seq start" },
      { id: "valid-sudoku", lc: 36, name: "Valid Sudoku", diff: "Medium", time: "O(1)", space: "O(1)", hint: "3 sets: row, col, box" },
    ],
    bigOFocus: "Master frequency HashMap pattern — it's the core of 40% of Easy/Med problems"
  },
  {
    id: 3,
    title: "Two Pointers",
    emoji: "👆👆",
    color: "#C2F0DC",
    colorDark: "#72C9A0",
    theme: "Left/right pointer technique, sorted arrays",
    portfolioTask: "Add unit tests to wildlife (xUnit, 5 tests)",
    targetProblems: "8–10 problems",
    keyPatterns: ["Shrink/Expand from both ends", "Same direction (fast/slow)", "Sorted array conditions"],
    problems: [
      { id: "valid-palindrome", lc: 125, name: "Valid Palindrome", diff: "Easy", time: "O(n)", space: "O(1)", hint: "l/r pointers, skip non-alphanumeric" },
      { id: "two-sum-sorted", lc: 167, name: "Two Sum II (Sorted)", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Shrink window based on sum" },
      { id: "three-sum", lc: 15, name: "3Sum", diff: "Medium", time: "O(n²)", space: "O(1)", hint: "Sort + fix one, two-pointer inner" },
      { id: "container-water", lc: 11, name: "Container With Most Water", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Move shorter side inward" },
      { id: "trapping-rain", lc: 42, name: "Trapping Rain Water", diff: "Hard", time: "O(n)", space: "O(1)", hint: "Track maxL & maxR, take min" },
      { id: "move-zeroes", lc: 283, name: "Move Zeroes", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Write pointer technique" },
      { id: "remove-dups", lc: 26, name: "Remove Duplicates (Sorted)", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Slow/fast write pointer" },
      { id: "sort-colors", lc: 75, name: "Sort Colors (Dutch Flag)", diff: "Medium", time: "O(n)", space: "O(1)", hint: "3 pointers: low/mid/high" },
    ],
    bigOFocus: "When you see sorted arrays — always think Two Pointers first"
  },
  {
    id: 4,
    title: "Sliding Window",
    emoji: "🪟",
    color: "#C2DEFF",
    colorDark: "#7AB5F0",
    theme: "Variable/fixed window, contiguous subarrays/substrings",
    portfolioTask: "LinkedIn profile + GitHub profile README",
    targetProblems: "8–10 problems",
    keyPatterns: ["Fixed window", "Variable window (expand/shrink)", "Window with HashMap"],
    problems: [
      { id: "max-profit-window", lc: 121, name: "Best Time to Buy (review)", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Sliding window framing" },
      { id: "longest-substr", lc: 3, name: "Longest Substring Without Repeating", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Shrink when char repeats" },
      { id: "longest-repeat-replace", lc: 424, name: "Longest Repeating Char Replace", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Window - maxFreq ≤ k" },
      { id: "permutation-in-string", lc: 567, name: "Permutation in String", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Fixed window, freq match" },
      { id: "min-window-substr", lc: 76, name: "Min Window Substring", diff: "Hard", time: "O(n)", space: "O(n)", hint: "Shrink when all chars covered" },
      { id: "sliding-window-max", lc: 239, name: "Sliding Window Maximum", diff: "Hard", time: "O(n)", space: "O(k)", hint: "Monotonic deque" },
      { id: "max-subarray-sum-k", lc: 643, name: "Max Avg Subarray I", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Fixed window sum" },
      { id: "subarray-sum-k", lc: 560, name: "Subarray Sum Equals K", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Prefix sum + HashMap" },
    ],
    bigOFocus: "Sliding window is Two Pointers on steroids — same idea, continuous subarray constraint"
  }
];

export const WORKSHEETS = [
  {
    id: 1,
    title: "Arrays & Strings",
    week: "Week 1",
    emoji: "🧱",
    color: "#FFD6C2",
    items: [
      { id: "theory-array", label: "Array index rules memorized (0 to Length-1, O(1) access)" },
      { id: "theory-string", label: "String immutability in C# — use StringBuilder in loops" },
      { id: "brute-rule", label: "Brute-to-Optimize Rule: nested loops → HashMap lookup" },
      { id: "two-sum-brute", label: "Wrote Two Sum brute force O(n²)" },
      { id: "two-sum-opt", label: "Optimized Two Sum to O(n) with HashMap" },
      { id: "kadane", label: "Wrote Kadane's Algorithm from memory" },
      { id: "bigO-ws1", label: "Filled Big-O table for all 7 Week 1 problems" },
    ],
    scratchCode: `// Two Sum - Brute Force
public int[] TwoSum(int[] nums, int target) {
    // TODO: O(n²) nested loop approach
}

// Two Sum - Optimized
public int[] TwoSumOpt(int[] nums, int target) {
    // TODO: HashMap complement lookup
}

// Kadane's Algorithm
public int MaxSubArray(int[] nums) {
    // TODO: track current and global max
}`
  },
  {
    id: 2,
    title: "HashMaps & Sets",
    week: "Week 2",
    emoji: "🗺️",
    color: "#D4C5F9",
    items: [
      { id: "freq-count", label: "Frequency count pattern: Dictionary<char, int>" },
      { id: "complement", label: "Complement lookup: dict.ContainsKey(target - num)" },
      { id: "grouping", label: "Grouping by key: sort word → use as dict key" },
      { id: "group-anagram-impl", label: "Implemented Group Anagrams" },
      { id: "top-k-impl", label: "Implemented Top K Frequent (bucket sort bonus)" },
      { id: "consec-seq", label: "Longest Consecutive — only start from seq beginning" },
      { id: "bigO-ws2", label: "Explained why HashSet gives O(1) lookup" },
    ],
    scratchCode: `// Group Anagrams
public IList<IList<string>> GroupAnagrams(string[] strs) {
    // TODO: sort each word as dictionary key
}

// Longest Consecutive Sequence
public int LongestConsecutive(int[] nums) {
    // TODO: HashSet, only start counting when num-1 not in set
}`
  },
  {
    id: 3,
    title: "Two Pointers",
    week: "Week 3",
    emoji: "👆👆",
    color: "#C2F0DC",
    items: [
      { id: "tp-pattern", label: "Two Pointers trigger: sorted array or palindrome check" },
      { id: "shrink-expand", label: "Shrink/expand logic: move based on comparison result" },
      { id: "three-sum-impl", label: "3Sum: sort + fix i, two-pointer j/k inner loop" },
      { id: "water-impl", label: "Container With Most Water: always move shorter side" },
      { id: "palindrome-impl", label: "Valid Palindrome: skip non-alphanumeric chars" },
      { id: "dutch-flag", label: "Dutch Flag (Sort Colors): 3 pointers low/mid/high" },
      { id: "bigO-ws3", label: "All Two Pointer problems solved without extra space" },
    ],
    scratchCode: `// 3Sum
public IList<IList<int>> ThreeSum(int[] nums) {
    Array.Sort(nums);
    // TODO: fix i, two-pointer for remaining
}

// Container With Most Water
public int MaxArea(int[] height) {
    int l = 0, r = height.Length - 1;
    // TODO: move shorter pointer inward
}`
  },
  {
    id: 4,
    title: "Sliding Window",
    week: "Week 4",
    emoji: "🪟",
    color: "#C2DEFF",
    items: [
      { id: "sw-fixed", label: "Fixed window: maintain sum, subtract left, add right" },
      { id: "sw-variable", label: "Variable window: expand right, shrink left on violation" },
      { id: "sw-hashmap", label: "Window + HashMap: track char frequencies inside window" },
      { id: "longest-no-repeat", label: "Longest Substring No Repeat — shrink when dup found" },
      { id: "min-window", label: "Minimum Window Substring — shrink when all covered" },
      { id: "permutation-impl", label: "Permutation in String — fixed window freq match" },
      { id: "bigO-ws4", label: "Compared Two Pointers vs Sliding Window — when to use each" },
    ],
    scratchCode: `// Longest Substring Without Repeating Characters
public int LengthOfLongestSubstring(string s) {
    var seen = new Dictionary<char, int>();
    int l = 0, res = 0;
    // TODO: expand r, shrink l when duplicate
}

// Minimum Window Substring
public string MinWindow(string s, string t) {
    // TODO: expand until covered, shrink to minimize
}`
  },
  {
    id: 5,
    title: "Big-O Complexity",
    week: "Weeks 1–4",
    emoji: "📊",
    color: "#FFD6E0",
    items: [
      { id: "o1", label: "O(1) — HashMap/Array index access. Constant, no loop" },
      { id: "on", label: "O(n) — Single loop through array. Ideal target" },
      { id: "ologn", label: "O(log n) — Binary search. Halving each step" },
      { id: "onlogn", label: "O(n log n) — Array.Sort(). Good for sorting" },
      { id: "on2", label: "O(n²) — Nested loops. Red flag: can you use HashMap?" },
      { id: "space-const", label: "Space O(1): two pointers, Kadane's — no extra array" },
      { id: "space-n", label: "Space O(n): HashMap, HashSet, auxiliary arrays" },
      { id: "explain-out-loud", label: "Can state Big-O of any Week 1–4 problem out loud" },
    ],
    scratchCode: `// Complexity Reference Card (fill in the blank)

// O(1) example:
// return nums[0];

// O(n) example:
// for (int i = 0; i < n; i++) { ... }

// O(n²) example:
// for each i → for each j ...

// HashMap trick: O(n²) → O(n)
// Replace: if (nums[j] == target - nums[i]) // O(n) inner
// With:    if (dict.ContainsKey(target - nums[i])) // O(1)`
  },
  {
    id: 6,
    title: "CTCI Reading Tracker",
    week: "Weeks 1–4",
    emoji: "📖",
    color: "#FFF3C2",
    items: [
      { id: "ctci-p1", label: "pp. 1–12: The Interview Process" },
      { id: "ctci-p2", label: "pp. 13–25: Behind the Scenes (FAANG process)" },
      { id: "ctci-p3", label: "pp. 26–38: Special Situations" },
      { id: "ctci-p4", label: "pp. 39–55: Before the Interview" },
      { id: "ctci-p5", label: "pp. 56–70: Behavioral Questions + S.T.A.R." },
      { id: "ctci-ch1", label: "Chapter 1: Arrays & Strings problems" },
      { id: "ctci-ch2", label: "Started Chapter 2: Linked Lists" },
      { id: "ctci-reflect", label: "Wrote 3 behavioral answers (Challenge, Mistake, Enjoy)" },
    ],
    scratchCode: `// S.T.A.R. Template — fill for each behavioral question

// Situation: Set the scene
// Task: What was your responsibility?
// Action: What did YOU specifically do?
// Result: Quantify the outcome if possible

// Example topics to prepare:
// - "Tell me about a challenge you overcame"
// - "Biggest mistake and what you learned"  
// - "Why do you want to work here?"`
  },
  {
    id: 7,
    title: "Portfolio & GitHub Tasks",
    week: "Weeks 1–4",
    emoji: "🗂️",
    color: "#E8D5FF",
    items: [
      { id: "wildlife-readme", label: "Week 1: Polish wildlife project README (what/why/how/demo)" },
      { id: "gs-readme", label: "Week 2: Green School E-Diary README written" },
      { id: "3-more-readme", label: "Week 2: 3 other repo READMEs updated" },
      { id: "unit-tests", label: "Week 3: 5 xUnit unit tests added to wildlife project" },
      { id: "linkedin-setup", label: "Week 4: LinkedIn profile created/updated" },
      { id: "github-profile", label: "Week 4: GitHub profile README.md created" },
      { id: "6-pinned", label: "6 repos pinned on GitHub with proper descriptions" },
      { id: "photo-bio", label: "Professional photo and bio on both platforms" },
    ],
    scratchCode: `# README Template

## 🏷️ Project Name — tagline

### What is this?
One paragraph explaining what it does.

### Tech Stack
- Frontend: React / TypeScript
- Backend: .NET / C#  
- Database: PostgreSQL / Firebase

### Key Features
- Feature 1
- Feature 2

### Running locally
\`\`\`bash
git clone ...
cd project
npm install && npm start
\`\`\`

### Screenshots
[Add 1-2 screenshots or GIF demo]`
  },
  {
    id: 8,
    title: "Month 1 Master Tracker",
    week: "All 4 Weeks",
    emoji: "🏆",
    color: "#FFD6C2",
    items: [
      { id: "week1-done", label: "Week 1 completed (Arrays & Strings — 6+ problems)" },
      { id: "week2-done", label: "Week 2 completed (HashMaps & Sets — 6+ problems)" },
      { id: "week3-done", label: "Week 3 completed (Two Pointers — 8+ problems)" },
      { id: "week4-done", label: "Week 4 completed (Sliding Window — 8+ problems)" },
      { id: "review-missed", label: "Re-solved all looked-up solutions the next day" },
      { id: "bigO-all", label: "Can state Big-O for every problem without checking" },
      { id: "pattern-recog", label: "Can identify pattern in <30 seconds on new problems" },
      { id: "month1-reflect", label: "Wrote Month 1 reflection — what was hardest, what clicked" },
    ],
    scratchCode: `// Month 1 Reflection Template

// Total problems solved: ___
// Hardest problem: ___
// Pattern I struggled with most: ___
// Pattern that "clicked" first: ___

// Portfolio progress:
// ✅ wildlife README
// ✅ green-school README  
// ✅ unit tests added
// ✅ LinkedIn created

// Month 2 preview: Linked Lists, Stacks, Trees`
  }
];

export const CAREER_PHASES = [
  {
    phase: "Month 1",
    title: "Foundation",
    color: "#FFD6C2",
    goals: ["LeetCode: Arrays, Strings, HashMaps (Easy)", "Polish wildlife & green-school repos", "Proper READMEs for 6 pinned repos", "Add LinkedIn profile"],
    hours: "8–10 hrs/week"
  },
  {
    phase: "Month 2",
    title: "Building",
    color: "#D4C5F9",
    goals: ["LeetCode: Linked Lists, Stacks, Queues, Trees (Easy–Med)", "Start new showcase project", "Learn Docker basics", "Research Microsoft/Nordeus openings"],
    hours: "10 hrs/week"
  },
  {
    phase: "Month 3",
    title: "Deepening",
    color: "#C2F0DC",
    goals: ["LeetCode: Binary Search, Recursion, BFS/DFS (Medium)", "Read System Design Interview ch. 1–6", "Start applying to target companies"],
    hours: "10–12 hrs/week"
  },
  {
    phase: "Month 4",
    title: "Mock Interviews",
    color: "#C2DEFF",
    goals: ["LeetCode: Dynamic Programming intro (Medium)", "Mock interviews weekly", "OOP & Design Patterns review", "Final portfolio polish"],
    hours: "12+ hrs/week"
  }
];

export const TWENTY_MIN_RULE = [
  { step: "0–5 min", action: "Read carefully", detail: "Write: Input? Output? Constraints? Do NOT code yet." },
  { step: "5–10 min", action: "Work examples by hand", detail: "Trace 2–3 small examples. Do you see a pattern?" },
  { step: "10–20 min", action: "Write code from trace", detail: "OK if wrong or incomplete. Try!" },
  { step: "At 20 min", action: "Stuck? → Look up", detail: "Type it out. Comment every line. Rewrite from memory." },
  { step: "Next day", action: "Spaced repetition", detail: "Re-solve every looked-up problem without any help." }
];

export const FOUR_QUESTIONS = [
  { q: "Pattern?", detail: "HashMap? Two Pointers? Sliding Window? Name it." },
  { q: "Time complexity?", detail: "O(n)? O(n²)? O(n log n)? Why exactly?" },
  { q: "Space complexity?", detail: "Did you use extra memory? Was it necessary?" },
  { q: "Can you optimize?", detail: "Reduce space? Do it in one pass? Even better?" }
];

export const TARGETS = [
  { company: "Microsoft", icon: "🪟", fit: "C# + .NET — direct match" },
  { company: "Nordeus", icon: "🎮", fit: "Game dev interest, Belgrade-based" },
  { company: "JetBrains", icon: "🛠️", fit: "IDE tooling, Kotlin/C# — applying now!" },
  { company: "Google", icon: "🔍", fit: "Long-term target, master's → new grad" },
  { company: "RAF Master's", icon: "🎓", fit: "September — theoretical foundation" },
];

export const LEVEL_TITLES = ["", "Novice Coder", "Array Apprentice", "HashMap Hero", "Pointer Pro", "DSA Master"];
export const XP_THRESHOLDS = [0, 100, 250, 400, 600];
