// src/data/plan.js

export const WEEKS = [
  // ─── MONTH 1: Foundation ───────────────────────────────────────────────────
  {
    id: 1, month: 1,
    title: "Arrays & Strings",
    emoji: "🧱",
    color: "#FFD6C2", colorDark: "#E8A882",
    theme: "Brute force thinking, basic traversal, string manipulation",
    portfolioTask: "Polish wildlife README",
    targetProblems: "6–8 problems",
    keyPatterns: ["Brute → Optimize", "Kadane's Algorithm", "In-place manipulation"],
    bigOFocus: "Understand why HashMap turns O(n²) into O(n)",
    problems: [
      { id: "two-sum", lc: 1, name: "Two Sum", diff: "Easy", time: "O(n)", space: "O(n)", hint: "HashMap for complement lookup" },
      { id: "stock", lc: 121, name: "Best Time to Buy & Sell Stock", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Track min so far" },
      { id: "max-subarray", lc: 53, name: "Maximum Subarray", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Kadane's: reset when negative" },
      { id: "contains-dup", lc: 217, name: "Contains Duplicate", diff: "Easy", time: "O(n)", space: "O(n)", hint: "HashSet" },
      { id: "valid-anagram", lc: 242, name: "Valid Anagram", diff: "Easy", time: "O(n)", space: "O(1)", hint: "26-char frequency array" },
      { id: "reverse-string", lc: 344, name: "Reverse String", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Two pointers, swap in-place" },
      { id: "merge-sorted", lc: 88, name: "Merge Sorted Array", diff: "Easy", time: "O(m+n)", space: "O(1)", hint: "Fill from the back" },
    ],
  },
  {
    id: 2, month: 1,
    title: "HashMaps & Sets",
    emoji: "🗺️",
    color: "#D4C5F9", colorDark: "#A08FD6",
    theme: "Frequency counting, complement lookup, grouping",
    portfolioTask: "Green School README + 3 other READMEs",
    targetProblems: "6–8 problems",
    keyPatterns: ["Frequency Count", "Complement Lookup", "Grouping by key"],
    bigOFocus: "Master frequency HashMap — core of 40% of Easy/Med problems",
    problems: [
      { id: "group-anagrams", lc: 49, name: "Group Anagrams", diff: "Medium", time: "O(n·k)", space: "O(n)", hint: "Sort each word as key" },
      { id: "top-k", lc: 347, name: "Top K Frequent Elements", diff: "Medium", time: "O(n log k)", space: "O(n)", hint: "HashMap + bucket sort" },
      { id: "product-except", lc: 238, name: "Product of Array Except Self", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Prefix & suffix products" },
      { id: "encode-decode", lc: 271, name: "Encode & Decode Strings", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Length prefix encoding" },
      { id: "longest-consec", lc: 128, name: "Longest Consecutive Sequence", diff: "Medium", time: "O(n)", space: "O(n)", hint: "HashSet, only start from seq start" },
      { id: "valid-sudoku", lc: 36, name: "Valid Sudoku", diff: "Medium", time: "O(1)", space: "O(1)", hint: "3 sets: row, col, box" },
    ],
  },
  {
    id: 3, month: 1,
    title: "Two Pointers",
    emoji: "👆👆",
    color: "#C2F0DC", colorDark: "#72C9A0",
    theme: "Left/right pointer technique, sorted arrays",
    portfolioTask: "Add unit tests to wildlife (xUnit, 5 tests)",
    targetProblems: "8–10 problems",
    keyPatterns: ["Shrink/Expand from both ends", "Same direction (fast/slow)", "Sorted array conditions"],
    bigOFocus: "When you see sorted arrays — always think Two Pointers first",
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
  },
  {
    id: 4, month: 1,
    title: "Sliding Window",
    emoji: "🪟",
    color: "#C2DEFF", colorDark: "#7AB5F0",
    theme: "Variable/fixed window, contiguous subarrays/substrings",
    portfolioTask: "LinkedIn profile + GitHub profile README",
    targetProblems: "8–10 problems",
    keyPatterns: ["Fixed window", "Variable window (expand/shrink)", "Window with HashMap"],
    bigOFocus: "Sliding window is Two Pointers on steroids — same idea, continuous subarray constraint",
    problems: [
      { id: "longest-substr", lc: 3, name: "Longest Substring Without Repeating", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Shrink when char repeats" },
      { id: "longest-repeat-replace", lc: 424, name: "Longest Repeating Char Replace", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Window - maxFreq ≤ k" },
      { id: "permutation-in-string", lc: 567, name: "Permutation in String", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Fixed window, freq match" },
      { id: "min-window-substr", lc: 76, name: "Min Window Substring", diff: "Hard", time: "O(n)", space: "O(n)", hint: "Shrink when all chars covered" },
      { id: "sliding-window-max", lc: 239, name: "Sliding Window Maximum", diff: "Hard", time: "O(n)", space: "O(k)", hint: "Monotonic deque" },
      { id: "max-avg-subarray", lc: 643, name: "Max Average Subarray I", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Fixed window sum" },
      { id: "subarray-sum-k", lc: 560, name: "Subarray Sum Equals K", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Prefix sum + HashMap" },
    ],
  },

  // ─── MONTH 2: Building ─────────────────────────────────────────────────────
  {
    id: 5, month: 2,
    title: "Linked Lists",
    emoji: "🔗",
    color: "#FFD6E0", colorDark: "#F0A0B8",
    theme: "Fast/slow pointers, reversal, cycle detection",
    portfolioTask: "Start new showcase project (pick: gRPC API / SignalR chat / Docker app)",
    targetProblems: "8–10 problems",
    keyPatterns: ["Fast/Slow Pointers", "In-place Reversal", "Cycle Detection"],
    bigOFocus: "Linked list ops are O(n) — no random access like arrays",
    problems: [
      { id: "reverse-linked-list", lc: 206, name: "Reverse Linked List", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Three pointers: prev/curr/next" },
      { id: "linked-list-cycle", lc: 141, name: "Linked List Cycle", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Fast/slow — they meet if cycle" },
      { id: "merge-two-lists", lc: 21, name: "Merge Two Sorted Lists", diff: "Easy", time: "O(n+m)", space: "O(1)", hint: "Dummy head, compare and link" },
      { id: "reorder-list", lc: 143, name: "Reorder List", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Find mid, reverse second half, merge" },
      { id: "remove-nth", lc: 19, name: "Remove Nth From End", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Two pointers, n gap between them" },
      { id: "copy-random", lc: 138, name: "Copy List with Random Pointer", diff: "Medium", time: "O(n)", space: "O(n)", hint: "HashMap old→new nodes" },
      { id: "add-two-numbers", lc: 2, name: "Add Two Numbers", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Carry digit through iteration" },
      { id: "find-duplicate", lc: 287, name: "Find the Duplicate Number", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Floyd's cycle detection" },
    ],
  },
  {
    id: 6, month: 2,
    title: "Stacks & Queues",
    emoji: "📚",
    color: "#FFF3C2", colorDark: "#D4A020",
    theme: "LIFO/FIFO patterns, monotonic stack, bracket matching",
    portfolioTask: "Add Docker to one of your existing projects",
    targetProblems: "8–10 problems",
    keyPatterns: ["Monotonic Stack", "Bracket Matching", "BFS with Queue"],
    bigOFocus: "Stack gives O(1) push/pop — use when you need to 'undo' or track history",
    problems: [
      { id: "valid-parens", lc: 20, name: "Valid Parentheses", diff: "Easy", time: "O(n)", space: "O(n)", hint: "Push open, pop and match close" },
      { id: "min-stack", lc: 155, name: "Min Stack", diff: "Medium", time: "O(1)", space: "O(n)", hint: "Second stack tracking minimums" },
      { id: "eval-rpn", lc: 150, name: "Evaluate Reverse Polish Notation", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Push nums, pop on operator" },
      { id: "generate-parens", lc: 22, name: "Generate Parentheses", diff: "Medium", time: "O(4ⁿ/√n)", space: "O(n)", hint: "Backtrack: open < n, close < open" },
      { id: "daily-temps", lc: 739, name: "Daily Temperatures", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Monotonic decreasing stack" },
      { id: "car-fleet", lc: 853, name: "Car Fleet", diff: "Medium", time: "O(n log n)", space: "O(n)", hint: "Sort by pos, stack arrival times" },
      { id: "largest-rect", lc: 84, name: "Largest Rectangle in Histogram", diff: "Hard", time: "O(n)", space: "O(n)", hint: "Monotonic increasing stack" },
    ],
  },
  {
    id: 7, month: 2,
    title: "Trees — Basics",
    emoji: "🌳",
    color: "#C2F0DC", colorDark: "#52B080",
    theme: "DFS traversals, recursion on trees, BFS level order",
    portfolioTask: "Research Microsoft New Grad / Internship openings",
    targetProblems: "10–12 problems",
    keyPatterns: ["DFS Recursive", "BFS Level Order", "Height/Depth recursion"],
    bigOFocus: "Tree recursion: T(n) = 2T(n/2) + O(1) → O(n) total",
    problems: [
      { id: "invert-tree", lc: 226, name: "Invert Binary Tree", diff: "Easy", time: "O(n)", space: "O(h)", hint: "Swap children, recurse" },
      { id: "max-depth", lc: 104, name: "Maximum Depth of Binary Tree", diff: "Easy", time: "O(n)", space: "O(h)", hint: "1 + max(left, right)" },
      { id: "diameter-tree", lc: 543, name: "Diameter of Binary Tree", diff: "Easy", time: "O(n)", space: "O(h)", hint: "Max left height + right height" },
      { id: "balanced-tree", lc: 110, name: "Balanced Binary Tree", diff: "Easy", time: "O(n)", space: "O(h)", hint: "Return -1 on unbalanced subtree" },
      { id: "same-tree", lc: 100, name: "Same Tree", diff: "Easy", time: "O(n)", space: "O(h)", hint: "Compare val + recurse both sides" },
      { id: "subtree", lc: 572, name: "Subtree of Another Tree", diff: "Easy", time: "O(n·m)", space: "O(h)", hint: "sameTree check at each node" },
      { id: "level-order", lc: 102, name: "Binary Tree Level Order Traversal", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Queue BFS, snapshot size each level" },
      { id: "right-view", lc: 199, name: "Binary Tree Right Side View", diff: "Medium", time: "O(n)", space: "O(n)", hint: "BFS, take last of each level" },
      { id: "good-nodes", lc: 1448, name: "Count Good Nodes in Tree", diff: "Medium", time: "O(n)", space: "O(h)", hint: "DFS tracking max so far" },
      { id: "path-sum", lc: 112, name: "Path Sum", diff: "Easy", time: "O(n)", space: "O(h)", hint: "Subtract val, check leaf == 0" },
    ],
  },
  {
    id: 8, month: 2,
    title: "Trees — BST",
    emoji: "🌲",
    color: "#D4C5F9", colorDark: "#8060C0",
    theme: "BST properties, search, insert, LCA",
    portfolioTask: "Learn Docker basics — containerize one project",
    targetProblems: "8–10 problems",
    keyPatterns: ["BST Search (left < root < right)", "In-order = sorted", "LCA pattern"],
    bigOFocus: "BST operations O(log n) average — but O(n) worst case (unbalanced)",
    problems: [
      { id: "validate-bst", lc: 98, name: "Validate Binary Search Tree", diff: "Medium", time: "O(n)", space: "O(h)", hint: "Pass min/max bounds through recursion" },
      { id: "kth-smallest", lc: 230, name: "Kth Smallest in BST", diff: "Medium", time: "O(n)", space: "O(h)", hint: "In-order traversal, count k" },
      { id: "lca-bst", lc: 235, name: "LCA of BST", diff: "Medium", time: "O(h)", space: "O(1)", hint: "Both < root → go left, both > → right" },
      { id: "construct-preorder", lc: 105, name: "Construct Tree from Preorder/Inorder", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Preorder[0] is root, find in inorder" },
      { id: "max-path-sum", lc: 124, name: "Binary Tree Max Path Sum", diff: "Hard", time: "O(n)", space: "O(h)", hint: "At each node: val + max(left,0) + max(right,0)" },
      { id: "serialize-tree", lc: 297, name: "Serialize and Deserialize Tree", diff: "Hard", time: "O(n)", space: "O(n)", hint: "BFS with null markers" },
      { id: "insert-bst", lc: 701, name: "Insert into BST", diff: "Medium", time: "O(h)", space: "O(h)", hint: "Recurse left or right by comparison" },
      { id: "delete-bst", lc: 450, name: "Delete Node in BST", diff: "Medium", time: "O(h)", space: "O(h)", hint: "3 cases: no child, one child, two children" },
    ],
  },

  // ─── MONTH 3: Deepening ────────────────────────────────────────────────────
  {
    id: 9, month: 3,
    title: "Heaps & Priority Queues",
    emoji: "⛰️",
    color: "#FFD6C2", colorDark: "#D07040",
    theme: "Min/max heap, top-K problems, merge K lists",
    portfolioTask: "Read System Design Interview ch. 1–3",
    targetProblems: "8–10 problems",
    keyPatterns: ["Min Heap for K largest", "Max Heap for K smallest", "Two heaps for median"],
    bigOFocus: "Heap insert/remove O(log n) — beats sorting O(n log n) for streaming data",
    problems: [
      { id: "kth-largest", lc: 215, name: "Kth Largest Element", diff: "Medium", time: "O(n log k)", space: "O(k)", hint: "Min heap of size k" },
      { id: "last-stone", lc: 1046, name: "Last Stone Weight", diff: "Easy", time: "O(n log n)", space: "O(n)", hint: "Max heap, smash top two" },
      { id: "k-closest", lc: 973, name: "K Closest Points to Origin", diff: "Medium", time: "O(n log k)", space: "O(k)", hint: "Max heap of size k on distance" },
      { id: "task-scheduler", lc: 621, name: "Task Scheduler", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Always execute most frequent remaining" },
      { id: "design-twitter", lc: 355, name: "Design Twitter", diff: "Medium", time: "O(n log n)", space: "O(n)", hint: "Min heap merge across followees" },
      { id: "median-stream", lc: 295, name: "Find Median from Data Stream", diff: "Hard", time: "O(log n)", space: "O(n)", hint: "Max heap (lower) + min heap (upper)" },
      { id: "merge-k-lists", lc: 23, name: "Merge K Sorted Lists", diff: "Hard", time: "O(n log k)", space: "O(k)", hint: "Min heap of (val, list index)" },
    ],
  },
  {
    id: 10, month: 3,
    title: "Binary Search",
    emoji: "🔍",
    color: "#C2DEFF", colorDark: "#5090D0",
    theme: "Search on sorted input, binary search on answer",
    portfolioTask: "Read System Design Interview ch. 4–6",
    targetProblems: "8–10 problems",
    keyPatterns: ["Classic binary search", "Search on rotated array", "Binary search on answer space"],
    bigOFocus: "If input is sorted and you're searching — always O(log n) is possible",
    problems: [
      { id: "binary-search", lc: 704, name: "Binary Search", diff: "Easy", time: "O(log n)", space: "O(1)", hint: "lo=0, hi=n-1, mid=(lo+hi)/2" },
      { id: "search-2d", lc: 74, name: "Search a 2D Matrix", diff: "Medium", time: "O(log mn)", space: "O(1)", hint: "Treat as flat sorted array" },
      { id: "koko-bananas", lc: 875, name: "Koko Eating Bananas", diff: "Medium", time: "O(n log m)", space: "O(1)", hint: "Binary search on speed k" },
      { id: "rotated-search", lc: 33, name: "Search in Rotated Sorted Array", diff: "Medium", time: "O(log n)", space: "O(1)", hint: "Determine which half is sorted" },
      { id: "find-min-rotated", lc: 153, name: "Find Min in Rotated Sorted Array", diff: "Medium", time: "O(log n)", space: "O(1)", hint: "Min is at rotation point" },
      { id: "time-based-store", lc: 981, name: "Time Based Key-Value Store", diff: "Medium", time: "O(log n)", space: "O(n)", hint: "Binary search on timestamps list" },
      { id: "median-two-arrays", lc: 4, name: "Median of Two Sorted Arrays", diff: "Hard", time: "O(log min(m,n))", space: "O(1)", hint: "Binary search partition on smaller array" },
    ],
  },
  {
    id: 11, month: 3,
    title: "Graphs — BFS & DFS",
    emoji: "🕸️",
    color: "#E8D5FF", colorDark: "#9060C0",
    theme: "Graph traversal, islands, connected components",
    portfolioTask: "Start applying to target companies (LinkedIn Easy Apply)",
    targetProblems: "10–12 problems",
    keyPatterns: ["BFS shortest path", "DFS connected components", "Visited set to avoid cycles"],
    bigOFocus: "Graph BFS/DFS O(V+E) — visit each node and edge once",
    problems: [
      { id: "num-islands", lc: 200, name: "Number of Islands", diff: "Medium", time: "O(m·n)", space: "O(m·n)", hint: "DFS flood fill from each '1'" },
      { id: "max-area-island", lc: 695, name: "Max Area of Island", diff: "Medium", time: "O(m·n)", space: "O(m·n)", hint: "DFS return count, track max" },
      { id: "clone-graph", lc: 133, name: "Clone Graph", diff: "Medium", time: "O(V+E)", space: "O(V)", hint: "HashMap old→new, DFS/BFS" },
      { id: "walls-gates", lc: 286, name: "Walls and Gates", diff: "Medium", time: "O(m·n)", space: "O(m·n)", hint: "Multi-source BFS from all gates" },
      { id: "rotting-oranges", lc: 994, name: "Rotting Oranges", diff: "Medium", time: "O(m·n)", space: "O(m·n)", hint: "Multi-source BFS, track fresh count" },
      { id: "pacific-atlantic", lc: 417, name: "Pacific Atlantic Water Flow", diff: "Medium", time: "O(m·n)", space: "O(m·n)", hint: "Reverse BFS from each ocean" },
      { id: "surrounded-regions", lc: 130, name: "Surrounded Regions", diff: "Medium", time: "O(m·n)", space: "O(m·n)", hint: "Mark safe O's from border, flip rest" },
      { id: "course-schedule", lc: 207, name: "Course Schedule", diff: "Medium", time: "O(V+E)", space: "O(V+E)", hint: "Cycle detection via DFS 3-color" },
      { id: "course-schedule-2", lc: 210, name: "Course Schedule II", diff: "Medium", time: "O(V+E)", space: "O(V+E)", hint: "Topological sort (Kahn's or DFS)" },
      { id: "redundant-connection", lc: 684, name: "Redundant Connection", diff: "Medium", time: "O(n·α(n))", space: "O(n)", hint: "Union-Find: edge that joins same component" },
    ],
  },
  {
    id: 12, month: 3,
    title: "Graphs — Advanced",
    emoji: "🗺️",
    color: "#C2F0DC", colorDark: "#40A070",
    theme: "Shortest path, Union-Find, topological sort",
    portfolioTask: "Mock interview #1 with a friend or Pramp",
    targetProblems: "8–10 problems",
    keyPatterns: ["Dijkstra shortest path", "Union-Find", "Topological sort"],
    bigOFocus: "Dijkstra O((V+E) log V) with priority queue",
    problems: [
      { id: "network-delay", lc: 743, name: "Network Delay Time", diff: "Medium", time: "O((V+E) log V)", space: "O(V+E)", hint: "Dijkstra from source k" },
      { id: "cheapest-k-stops", lc: 787, name: "Cheapest Flights K Stops", diff: "Medium", time: "O(E·K)", space: "O(V)", hint: "Bellman-Ford with K iterations" },
      { id: "num-connected", lc: 323, name: "Number of Connected Components", diff: "Medium", time: "O(V+E)", space: "O(V)", hint: "Union-Find or DFS count" },
      { id: "graph-valid-tree", lc: 261, name: "Graph Valid Tree", diff: "Medium", time: "O(V+E)", space: "O(V)", hint: "n-1 edges + no cycle (Union-Find)" },
      { id: "word-ladder", lc: 127, name: "Word Ladder", diff: "Hard", time: "O(n·m²)", space: "O(n·m)", hint: "BFS, try all 1-char substitutions" },
      { id: "alien-dictionary", lc: 269, name: "Alien Dictionary", diff: "Hard", time: "O(V+E)", space: "O(V+E)", hint: "Build graph from adj word pairs, topo sort" },
      { id: "swim-rising-water", lc: 778, name: "Swim in Rising Water", diff: "Hard", time: "O(n² log n)", space: "O(n²)", hint: "Dijkstra on grid, minimize max elevation" },
    ],
  },

  // ─── MONTH 4: Polish ───────────────────────────────────────────────────────
  {
    id: 13, month: 4,
    title: "Dynamic Programming — 1D",
    emoji: "⚡",
    color: "#FFD6C2", colorDark: "#C06040",
    theme: "Memoization, tabulation, classic 1D DP patterns",
    portfolioTask: "Mock interview #2 — focus on explaining your thought process",
    targetProblems: "10–12 problems",
    keyPatterns: ["Bottom-up tabulation", "Top-down memoization", "Recurrence relation"],
    bigOFocus: "DP trades space for time — O(n) space to get O(n) time instead of O(2ⁿ)",
    problems: [
      { id: "climbing-stairs", lc: 70, name: "Climbing Stairs", diff: "Easy", time: "O(n)", space: "O(1)", hint: "Fibonacci: dp[i] = dp[i-1] + dp[i-2]" },
      { id: "min-cost-stairs", lc: 746, name: "Min Cost Climbing Stairs", diff: "Easy", time: "O(n)", space: "O(1)", hint: "dp[i] = cost[i] + min(dp[i-1], dp[i-2])" },
      { id: "house-robber", lc: 198, name: "House Robber", diff: "Medium", time: "O(n)", space: "O(1)", hint: "max(rob, skip) = max(prev+curr, prev)" },
      { id: "house-robber-2", lc: 213, name: "House Robber II", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Run twice: skip first or skip last" },
      { id: "longest-palindrome-sub", lc: 5, name: "Longest Palindromic Substring", diff: "Medium", time: "O(n²)", space: "O(1)", hint: "Expand from center, track max" },
      { id: "palindrome-substrings", lc: 647, name: "Palindromic Substrings", diff: "Medium", time: "O(n²)", space: "O(1)", hint: "Count each expansion center" },
      { id: "decode-ways", lc: 91, name: "Decode Ways", diff: "Medium", time: "O(n)", space: "O(1)", hint: "dp[i] += dp[i-1] if valid 1-dig, dp[i-2] if valid 2-dig" },
      { id: "coin-change", lc: 322, name: "Coin Change", diff: "Medium", time: "O(n·m)", space: "O(n)", hint: "dp[i] = min(dp[i], dp[i-coin]+1)" },
      { id: "max-product-subarray", lc: 152, name: "Maximum Product Subarray", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Track both max and min (negatives flip)" },
      { id: "word-break", lc: 139, name: "Word Break", diff: "Medium", time: "O(n²)", space: "O(n)", hint: "dp[i] = any dp[j] where s[j:i] in dict" },
    ],
  },
  {
    id: 14, month: 4,
    title: "Dynamic Programming — 2D",
    emoji: "🧩",
    color: "#D4C5F9", colorDark: "#7050B0",
    theme: "Grid DP, sequence DP, knapsack",
    portfolioTask: "Final portfolio polish — add 2 more projects or improve existing ones",
    targetProblems: "8–10 problems",
    keyPatterns: ["Grid DP", "LCS/LIS pattern", "0/1 Knapsack"],
    bigOFocus: "2D DP: O(m·n) time and space — often reducible to O(n) space with rolling array",
    problems: [
      { id: "unique-paths", lc: 62, name: "Unique Paths", diff: "Medium", time: "O(m·n)", space: "O(m·n)", hint: "dp[i][j] = dp[i-1][j] + dp[i][j-1]" },
      { id: "longest-common-sub", lc: 1143, name: "Longest Common Subsequence", diff: "Medium", time: "O(m·n)", space: "O(m·n)", hint: "Match: 1+dp[i-1][j-1], else max of skip" },
      { id: "best-time-cooldown", lc: 309, name: "Best Time with Cooldown", diff: "Medium", time: "O(n)", space: "O(1)", hint: "3 states: hold, sold, rest" },
      { id: "coin-change-2", lc: 518, name: "Coin Change II", diff: "Medium", time: "O(n·m)", space: "O(n)", hint: "Unbounded knapsack — add ways, not min" },
      { id: "target-sum", lc: 494, name: "Target Sum", diff: "Medium", time: "O(n·sum)", space: "O(sum)", hint: "Subset sum variant with +/- choice" },
      { id: "interleaving-string", lc: 97, name: "Interleaving String", diff: "Medium", time: "O(m·n)", space: "O(m·n)", hint: "dp[i][j] = can form s3[:i+j] from s1[:i], s2[:j]" },
      { id: "edit-distance", lc: 72, name: "Edit Distance", diff: "Hard", time: "O(m·n)", space: "O(m·n)", hint: "Insert/delete/replace: min of 3 prev states" },
      { id: "distinct-subsequences", lc: 115, name: "Distinct Subsequences", diff: "Hard", time: "O(m·n)", space: "O(m·n)", hint: "Match or skip s char" },
    ],
  },
  {
    id: 15, month: 4,
    title: "Backtracking",
    emoji: "🌀",
    color: "#C2DEFF", colorDark: "#4080C0",
    theme: "Explore all possibilities, prune bad paths early",
    portfolioTask: "Write technical blog post about your DSA journey",
    targetProblems: "8–10 problems",
    keyPatterns: ["Choose/Explore/Unchoose", "Pruning", "Permutations vs Combinations"],
    bigOFocus: "Backtracking without pruning = O(n!) — pruning makes it practical",
    problems: [
      { id: "subsets", lc: 78, name: "Subsets", diff: "Medium", time: "O(2ⁿ)", space: "O(n)", hint: "At each index: include or skip" },
      { id: "combination-sum", lc: 39, name: "Combination Sum", diff: "Medium", time: "O(2^(t/m))", space: "O(t/m)", hint: "Can reuse — don't advance index" },
      { id: "combination-sum-2", lc: 40, name: "Combination Sum II", diff: "Medium", time: "O(2ⁿ)", space: "O(n)", hint: "Skip duplicate at same level" },
      { id: "permutations", lc: 46, name: "Permutations", diff: "Medium", time: "O(n!)", space: "O(n)", hint: "Swap positions, recurse, swap back" },
      { id: "subsets-2", lc: 90, name: "Subsets II", diff: "Medium", time: "O(2ⁿ)", space: "O(n)", hint: "Sort + skip dup at same recursion level" },
      { id: "word-search", lc: 79, name: "Word Search", diff: "Medium", time: "O(m·n·4^L)", space: "O(L)", hint: "DFS + mark visited, unmark on backtrack" },
      { id: "palindrome-partition", lc: 131, name: "Palindrome Partitioning", diff: "Medium", time: "O(n·2ⁿ)", space: "O(n)", hint: "Cut when prefix is palindrome" },
      { id: "letter-combinations", lc: 17, name: "Letter Combinations of Phone Number", diff: "Medium", time: "O(4ⁿ)", space: "O(n)", hint: "Map digit to chars, DFS each combo" },
    ],
  },
  {
    id: 16, month: 4,
    title: "Tries & Intervals",
    emoji: "🔤",
    color: "#C2F0DC", colorDark: "#30A060",
    theme: "Prefix trees, interval merging, sweep line",
    portfolioTask: "Mock interview #3 — full 45-min simulation with coding + system design",
    targetProblems: "8–10 problems",
    keyPatterns: ["Trie insert/search", "Sort by start, merge overlapping", "Meeting rooms greedy"],
    bigOFocus: "Trie search O(L) where L = word length — faster than HashMap for prefix queries",
    problems: [
      { id: "implement-trie", lc: 208, name: "Implement Trie", diff: "Medium", time: "O(L)", space: "O(n·L)", hint: "Array[26] children + isEnd flag at each node" },
      { id: "add-search-words", lc: 211, name: "Add and Search Words", diff: "Medium", time: "O(L)", space: "O(n·L)", hint: "Trie + DFS for '.' wildcard" },
      { id: "word-search-2", lc: 212, name: "Word Search II", diff: "Hard", time: "O(m·n·4^L)", space: "O(n·L)", hint: "Trie of words, DFS on board" },
      { id: "insert-interval", lc: 57, name: "Insert Interval", diff: "Medium", time: "O(n)", space: "O(n)", hint: "3 phases: before, overlap, after" },
      { id: "merge-intervals", lc: 56, name: "Merge Intervals", diff: "Medium", time: "O(n log n)", space: "O(n)", hint: "Sort by start, extend end if overlap" },
      { id: "non-overlapping", lc: 435, name: "Non-Overlapping Intervals", diff: "Medium", time: "O(n log n)", space: "O(1)", hint: "Greedy: keep earliest ending interval" },
      { id: "meeting-rooms", lc: 252, name: "Meeting Rooms", diff: "Easy", time: "O(n log n)", space: "O(1)", hint: "Sort, check adjacent overlap" },
      { id: "meeting-rooms-2", lc: 253, name: "Meeting Rooms II", diff: "Medium", time: "O(n log n)", space: "O(n)", hint: "Min heap of end times, size = rooms needed" },
    ],
  },

  // ─── MONTH 5: Interview Ready ──────────────────────────────────────────────
  {
    id: 17, month: 5,
    title: "Bit Manipulation",
    emoji: "⚙️",
    color: "#FFD6C2", colorDark: "#C05830",
    theme: "Bitwise operations, XOR tricks, power-of-2 checks",
    portfolioTask: "Add a competitive-programming section to your GitHub profile README",
    targetProblems: "6–8 problems",
    keyPatterns: ["XOR cancellation (a ^ a = 0)", "Isolate lowest set bit (n & -n)", "Clear lowest set bit (n & n-1)"],
    bigOFocus: "Bit ops are O(1) — 32/64 operations at once on the CPU word",
    problems: [
      { id: "single-number", lc: 136, name: "Single Number", diff: "Easy", time: "O(n)", space: "O(1)", hint: "XOR all: duplicates cancel, single remains" },
      { id: "count-bits", lc: 338, name: "Counting Bits", diff: "Easy", time: "O(n)", space: "O(n)", hint: "dp[i] = dp[i >> 1] + (i & 1)" },
      { id: "reverse-bits", lc: 190, name: "Reverse Bits", diff: "Easy", time: "O(1)", space: "O(1)", hint: "Shift res left, OR in LSB of n, shift n right" },
      { id: "missing-number", lc: 268, name: "Missing Number", diff: "Easy", time: "O(n)", space: "O(1)", hint: "XOR 0..n with all nums — missing stays" },
      { id: "sum-no-addition", lc: 371, name: "Sum of Two Integers", diff: "Medium", time: "O(1)", space: "O(1)", hint: "a ^ b = sum bits; (a & b) << 1 = carry; repeat" },
      { id: "power-of-two", lc: 231, name: "Power of Two", diff: "Easy", time: "O(1)", space: "O(1)", hint: "n > 0 && (n & n-1) == 0" },
      { id: "num-1-bits", lc: 191, name: "Number of 1 Bits", diff: "Easy", time: "O(1)", space: "O(1)", hint: "n & n-1 clears lowest set bit, count loops" },
    ],
  },
  {
    id: 18, month: 5,
    title: "Advanced DP",
    emoji: "🧬",
    color: "#D4C5F9", colorDark: "#6040B0",
    theme: "LIS, interval DP, partition DP, state machine",
    portfolioTask: "Solve 3 Codeforces Div. 2 B/C problems and push solutions to GitHub",
    targetProblems: "6–8 problems",
    keyPatterns: ["LIS with binary search O(n log n)", "Interval DP dp[i][j]", "Partition subset (boolean knapsack)"],
    bigOFocus: "LIS patience-sort trick: binary search on 'piles' → O(n log n) vs O(n²) naive",
    problems: [
      { id: "lis", lc: 300, name: "Longest Increasing Subsequence", diff: "Medium", time: "O(n log n)", space: "O(n)", hint: "Binary search on tails array (patience sort)" },
      { id: "russian-doll", lc: 354, name: "Russian Doll Envelopes", diff: "Hard", time: "O(n log n)", space: "O(n)", hint: "Sort by w asc, h desc; then LIS on heights" },
      { id: "burst-balloons", lc: 312, name: "Burst Balloons", diff: "Hard", time: "O(n³)", space: "O(n²)", hint: "Interval DP: choose last balloon to burst in range" },
      { id: "regex-match", lc: 10, name: "Regular Expression Matching", diff: "Hard", time: "O(m·n)", space: "O(m·n)", hint: "dp[i][j]: match s[:i] with p[:j]; * means 0 or more of prev" },
      { id: "jump-game-2", lc: 45, name: "Jump Game II", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Greedy BFS layers: track current reach and next reach" },
      { id: "partition-subset", lc: 416, name: "Partition Equal Subset Sum", diff: "Medium", time: "O(n·sum)", space: "O(sum)", hint: "Boolean knapsack: can we reach exactly sum/2?" },
    ],
  },
  {
    id: 19, month: 5,
    title: "Greedy Algorithms",
    emoji: "🏹",
    color: "#C2F0DC", colorDark: "#30A060",
    theme: "Locally optimal choices, interval scheduling, proof by exchange",
    portfolioTask: "Mock interview #4 — mixed greedy + DP problems under timed pressure",
    targetProblems: "6–8 problems",
    keyPatterns: ["Always pick earliest finish time (interval scheduling)", "Track open-range [min, max] instead of a stack", "Two-pass greedy (left→right then right→left)"],
    bigOFocus: "Greedy O(n log n) due to sorting — proof: no swap of any two choices can improve result",
    problems: [
      { id: "jump-game", lc: 55, name: "Jump Game", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Track max reachable index — if i > max, return false" },
      { id: "gas-station", lc: 134, name: "Gas Station", diff: "Medium", time: "O(n)", space: "O(1)", hint: "If totalGas >= totalCost a solution exists; start after any negative-tank station" },
      { id: "hand-straights", lc: 846, name: "Hand of Straights", diff: "Medium", time: "O(n log n)", space: "O(n)", hint: "Sort + SortedDict: greedily form groups from smallest card" },
      { id: "merge-triplets", lc: 1899, name: "Merge Triplets to Form Target", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Skip triplets exceeding target in any dim; OR valid ones" },
      { id: "partition-labels", lc: 763, name: "Partition Labels", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Last occurrence map; extend end as you go, cut when i == end" },
      { id: "valid-paren-star", lc: 678, name: "Valid Parenthesis String", diff: "Medium", time: "O(n)", space: "O(1)", hint: "Track [minOpen, maxOpen] range; clamp min ≥ 0" },
    ],
  },
  {
    id: 20, month: 5,
    title: "Math & Matrix",
    emoji: "🔢",
    color: "#C2DEFF", colorDark: "#3070C0",
    theme: "In-place matrix transforms, fast exponentiation, number tricks",
    portfolioTask: "Read System Design Interview ch. 7–10 and write brief notes",
    targetProblems: "6–8 problems",
    keyPatterns: ["Rotate matrix: transpose then reverse rows", "Spiral: shrink boundaries l/r/t/b", "Fast power: exponentiate by squaring"],
    bigOFocus: "Fast exponentiation O(log n) — halve the exponent each step via x^n = (x²)^(n/2)",
    problems: [
      { id: "rotate-image", lc: 48, name: "Rotate Image", diff: "Medium", time: "O(n²)", space: "O(1)", hint: "Transpose (swap across diagonal) then reverse each row" },
      { id: "spiral-matrix", lc: 54, name: "Spiral Matrix", diff: "Medium", time: "O(m·n)", space: "O(1)", hint: "Shrink 4 boundaries (top/bottom/left/right) after each direction" },
      { id: "set-matrix-zeros", lc: 73, name: "Set Matrix Zeroes", diff: "Medium", time: "O(m·n)", space: "O(1)", hint: "Use first row/col as markers; handle them last to avoid overwrite" },
      { id: "happy-number", lc: 202, name: "Happy Number", diff: "Easy", time: "O(log n)", space: "O(1)", hint: "Fast/slow pointer on digit-square-sum sequence detects cycle" },
      { id: "fast-pow", lc: 50, name: "Pow(x, n)", diff: "Medium", time: "O(log n)", space: "O(log n)", hint: "If n even: x^n = (x²)^(n/2); handle negative n via 1/x^-n" },
      { id: "multiply-strings", lc: 43, name: "Multiply Strings", diff: "Medium", time: "O(m·n)", space: "O(m+n)", hint: "Digit i * digit j contributes to positions i+j and i+j+1" },
      { id: "detect-squares", lc: 2013, name: "Detect Squares", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Fix diagonal pair; check other two corners exist in point count map" },
    ],
  },

  // ─── MONTH 6: Competition Ready ────────────────────────────────────────────
  {
    id: 21, month: 6,
    title: "Advanced Graph Algorithms",
    emoji: "🌐",
    color: "#FFD6E0", colorDark: "#D05080",
    theme: "MST, Eulerian paths, bipartite check, bridge finding",
    portfolioTask: "Solve 1 Codeforces Div. 2 D problem and add a solution write-up to GitHub",
    targetProblems: "6–8 problems",
    keyPatterns: ["Kruskal's MST: sort edges + Union-Find", "Hierholzer's Eulerian path: DFS post-order", "Bipartite: 2-color BFS/DFS"],
    bigOFocus: "Kruskal's O(E log E); Prim's with heap O((V+E) log V) — prefer Kruskal for sparse graphs",
    problems: [
      { id: "min-cost-connect", lc: 1584, name: "Min Cost to Connect All Points", diff: "Medium", time: "O(n² log n)", space: "O(n²)", hint: "Prim's or Kruskal's on implicit complete graph of Manhattan distances" },
      { id: "reconstruct-itinerary", lc: 332, name: "Reconstruct Itinerary", diff: "Hard", time: "O(E log E)", space: "O(E)", hint: "Sort adjacency lists; Hierholzer's post-order DFS gives Eulerian path" },
      { id: "bipartite", lc: 785, name: "Is Graph Bipartite?", diff: "Medium", time: "O(V+E)", space: "O(V)", hint: "BFS 2-color; if neighbor has same color → not bipartite" },
      { id: "evaluate-division", lc: 399, name: "Evaluate Division", diff: "Medium", time: "O((V+E)·Q)", space: "O(V+E)", hint: "Build weighted directed graph; BFS/DFS multiplying edge weights along path" },
      { id: "similar-string-groups", lc: 839, name: "Similar String Groups", diff: "Hard", time: "O(n²·L)", space: "O(n)", hint: "Union-Find: two words are similar if exactly 0 or 2 positions differ" },
      { id: "critical-connections", lc: 1192, name: "Critical Connections in a Network", diff: "Hard", time: "O(V+E)", space: "O(V+E)", hint: "Tarjan's bridge finding: edge (u,v) is bridge if low[v] > disc[u]" },
    ],
  },
  {
    id: 22, month: 6,
    title: "Monotonic Structures",
    emoji: "📉",
    color: "#FFF3C2", colorDark: "#B08020",
    theme: "Monotonic stack/deque patterns, amortized O(n) over all pushes/pops",
    portfolioTask: "Mock interview #5 — explain monotonic stack intuition out loud to an interviewer",
    targetProblems: "5–7 problems",
    keyPatterns: ["Monotonic decreasing stack = next greater element", "Monotonic increasing stack = previous smaller element", "Deque for O(1) sliding window extremes"],
    bigOFocus: "Each element pushed and popped at most once → O(n) amortized despite apparent nested-loop look",
    problems: [
      { id: "next-greater-2", lc: 503, name: "Next Greater Element II", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Circular array: iterate 2n indices mod n; monotonic decreasing stack" },
      { id: "stock-span", lc: 901, name: "Online Stock Span", diff: "Medium", time: "O(1) amort", space: "O(n)", hint: "Stack of (price, span); absorb smaller prices and accumulate their spans" },
      { id: "subarray-min-sum", lc: 907, name: "Sum of Subarray Minimums", diff: "Medium", time: "O(n)", space: "O(n)", hint: "For each element find left/right boundary where it's minimum; contribution = left * right" },
      { id: "max-width-ramp", lc: 962, name: "Maximum Width Ramp", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Decreasing stack for left candidates; scan right-to-left popping matches" },
      { id: "subarray-ranges", lc: 2104, name: "Sum of Subarray Ranges", diff: "Medium", time: "O(n)", space: "O(n)", hint: "Answer = sum of subarray maxes − sum of subarray mins; each via monotonic stack" },
      { id: "maximal-rectangle", lc: 85, name: "Maximal Rectangle", diff: "Hard", time: "O(m·n)", space: "O(n)", hint: "Build histogram height row by row; apply largest-rectangle-in-histogram each time" },
    ],
  },
  {
    id: 23, month: 6,
    title: "Hard Problems Sprint",
    emoji: "🔥",
    color: "#E8D5FF", colorDark: "#7040B0",
    theme: "Classic Hard problems — divide & conquer, clever reductions, encode-then-solve",
    portfolioTask: "Record a 10-min Loom video explaining your hardest solved problem end-to-end",
    targetProblems: "5–7 problems",
    keyPatterns: ["Divide & conquer on sorted halves (merge sort trick)", "Reduce Hard → sequence of Medium sub-problems", "Two-heap lazy deletion for sliding window"],
    bigOFocus: "Count Smaller After Self: merge-sort counts inversions O(n log n) — same cost as sorting itself",
    problems: [
      { id: "count-smaller", lc: 315, name: "Count of Smaller Numbers After Self", diff: "Hard", time: "O(n log n)", space: "O(n)", hint: "Merge sort: count how many right-half elements were moved past each left-half element" },
      { id: "sliding-median", lc: 480, name: "Sliding Window Median", diff: "Hard", time: "O(n log k)", space: "O(k)", hint: "Two heaps (max-lower / min-upper); rebalance + lazy-delete on slide out" },
      { id: "reverse-k-group", lc: 25, name: "Reverse Nodes in k-Group", diff: "Hard", time: "O(n)", space: "O(1)", hint: "Check k nodes exist; reverse in-place with 3 pointers; recurse on tail" },
      { id: "n-queens", lc: 51, name: "N-Queens", diff: "Hard", time: "O(n!)", space: "O(n)", hint: "Track used cols, diag (r-c), anti-diag (r+c) as sets; backtrack row by row" },
      { id: "sudoku-solver", lc: 37, name: "Sudoku Solver", diff: "Hard", time: "O(9^81)", space: "O(1)", hint: "For each empty cell try 1–9; skip if row/col/3×3-box conflict; backtrack" },
      { id: "first-missing-positive", lc: 41, name: "First Missing Positive", diff: "Hard", time: "O(n)", space: "O(1)", hint: "Cyclic sort: swap nums[i] to index nums[i]-1; then scan for first wrong index" },
    ],
  },
  {
    id: 24, month: 6,
    title: "Final Interview Gauntlet",
    emoji: "🏅",
    color: "#C2F0DC", colorDark: "#208060",
    theme: "Mixed patterns, cache design, full-loop interview simulation",
    portfolioTask: "Full mock interview with live interviewer + written feedback; finalize job applications",
    targetProblems: "5–7 problems",
    keyPatterns: ["O(1) Get/Put with doubly-linked list + HashMap (LRU/LFU)", "Trie split + palindrome check (palindrome pairs)", "Re-recognize patterns under interview pressure"],
    bigOFocus: "LRU/LFU O(1) all ops: HashMap gives O(1) lookup; doubly-linked list gives O(1) insert/remove",
    problems: [
      { id: "lru-cache", lc: 146, name: "LRU Cache", diff: "Medium", time: "O(1)", space: "O(n)", hint: "HashMap<key,node> + doubly-linked list; move accessed node to front" },
      { id: "lfu-cache", lc: 460, name: "LFU Cache", diff: "Hard", time: "O(1)", space: "O(n)", hint: "Two HashMaps (key→val+freq, freq→DLL of keys) + minFreq variable" },
      { id: "palindrome-pairs", lc: 336, name: "Palindrome Pairs", diff: "Hard", time: "O(n·k²)", space: "O(n·k)", hint: "For each word, try all splits; check if prefix/suffix is palindrome and reverse of other part exists" },
      { id: "max-points-line", lc: 149, name: "Max Points on a Line", diff: "Hard", time: "O(n²)", space: "O(n)", hint: "For each anchor, store slopes as reduced-fraction strings; track max count" },
      { id: "trapping-rain-2d", lc: 407, name: "Trapping Rain Water II", diff: "Hard", time: "O(m·n·log(m+n))", space: "O(m·n)", hint: "Min-heap BFS from border cells; water level = max(incoming level, cell height)" },
      { id: "serialize-nary", lc: 428, name: "Serialize/Deserialize N-ary Tree", diff: "Hard", time: "O(n)", space: "O(n)", hint: "BFS with child-count encoding per level; decode mirrors encode" },
    ],
  },
];

// ─── WORKSHEETS ──────────────────────────────────────────────────────────────

export const WORKSHEETS = [
  {
    id: 1, title: "Arrays & Strings", week: "Week 1", emoji: "🧱", color: "#FFD6C2",
    items: [
      { id: "theory-array", label: "Array rules: index 0 to Length-1, O(1) access, O(n) search" },
      { id: "theory-string", label: "String immutability in C# — use StringBuilder in loops" },
      { id: "brute-rule", label: "Brute-to-Optimize: nested loops → HashMap lookup" },
      { id: "two-sum-brute", label: "Wrote Two Sum brute force O(n²)" },
      { id: "two-sum-opt", label: "Optimized Two Sum to O(n) with HashMap" },
      { id: "kadane", label: "Wrote Kadane's Algorithm from memory" },
      { id: "bigO-ws1", label: "Filled Big-O table for all 7 Week 1 problems" },
    ],
    scratchCode: `// Two Sum - Brute Force O(n²)
public int[] TwoSum(int[] nums, int target) {
    for (int i = 0; i < nums.Length; i++)
        for (int j = i+1; j < nums.Length; j++)
            if (nums[i] + nums[j] == target)
                return new[] { i, j };
    return new int[0];
}

// Two Sum - Optimized O(n)
public int[] TwoSumOpt(int[] nums, int target) {
    var map = new Dictionary<int, int>();
    for (int i = 0; i < nums.Length; i++) {
        int complement = target - nums[i];
        if (map.ContainsKey(complement))
            return new[] { map[complement], i };
        map[nums[i]] = i;
    }
    return new int[0];
}

// Kadane's Algorithm - Maximum Subarray
public int MaxSubArray(int[] nums) {
    int curr = nums[0], best = nums[0];
    for (int i = 1; i < nums.Length; i++) {
        curr = Math.Max(nums[i], curr + nums[i]);
        best = Math.Max(best, curr);
    }
    return best;
}`
  },
  {
    id: 2, title: "HashMaps & Sets", week: "Week 2", emoji: "🗺️", color: "#D4C5F9",
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
    var map = new Dictionary<string, IList<string>>();
    foreach (var s in strs) {
        var key = string.Concat(s.OrderBy(c => c));
        if (!map.ContainsKey(key)) map[key] = new List<string>();
        map[key].Add(s);
    }
    return new List<IList<string>>(map.Values);
}

// Longest Consecutive Sequence
public int LongestConsecutive(int[] nums) {
    var set = new HashSet<int>(nums);
    int best = 0;
    foreach (var n in set) {
        if (!set.Contains(n - 1)) { // only start of sequence
            int curr = n, len = 1;
            while (set.Contains(curr + 1)) { curr++; len++; }
            best = Math.Max(best, len);
        }
    }
    return best;
}`
  },
  {
    id: 3, title: "Two Pointers", week: "Week 3", emoji: "👆👆", color: "#C2F0DC",
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
    var res = new List<IList<int>>();
    for (int i = 0; i < nums.Length - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        int l = i+1, r = nums.Length-1;
        while (l < r) {
            int sum = nums[i] + nums[l] + nums[r];
            if (sum == 0) {
                res.Add(new List<int>{nums[i], nums[l], nums[r]});
                while (l < r && nums[l] == nums[l+1]) l++;
                while (l < r && nums[r] == nums[r-1]) r--;
                l++; r--;
            } else if (sum < 0) l++;
            else r--;
        }
    }
    return res;
}`
  },
  {
    id: 4, title: "Sliding Window", week: "Week 4", emoji: "🪟", color: "#C2DEFF",
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
    for (int r = 0; r < s.Length; r++) {
        if (seen.ContainsKey(s[r]))
            l = Math.Max(l, seen[s[r]] + 1);
        seen[s[r]] = r;
        res = Math.Max(res, r - l + 1);
    }
    return res;
}

// Minimum Window Substring
public string MinWindow(string s, string t) {
    var need = new Dictionary<char,int>();
    foreach (var c in t) need[c] = need.GetValueOrDefault(c) + 1;
    int have = 0, required = need.Count, l = 0;
    int[] ans = {-1, 0, 0};
    var window = new Dictionary<char,int>();
    for (int r = 0; r < s.Length; r++) {
        char c = s[r];
        window[c] = window.GetValueOrDefault(c) + 1;
        if (need.ContainsKey(c) && window[c] == need[c]) have++;
        while (have == required) {
            if (ans[0] == -1 || r-l+1 < ans[0]) ans = new[]{r-l+1, l, r};
            window[s[l]]--;
            if (need.ContainsKey(s[l]) && window[s[l]] < need[s[l]]) have--;
            l++;
        }
    }
    return ans[0] == -1 ? "" : s.Substring(ans[1], ans[0]);
}`
  },
  {
    id: 5, title: "Big-O Complexity", week: "Weeks 1–4", emoji: "📊", color: "#FFD6E0",
    items: [
      { id: "o1", label: "O(1) — HashMap/Array index. Constant, no loop" },
      { id: "on", label: "O(n) — Single loop. Ideal target" },
      { id: "ologn", label: "O(log n) — Binary search. Halving each step" },
      { id: "onlogn", label: "O(n log n) — Array.Sort(). Good for sorting" },
      { id: "on2", label: "O(n²) — Nested loops. Red flag: can you HashMap?" },
      { id: "space-const", label: "Space O(1): two pointers, Kadane's — no extra array" },
      { id: "space-n", label: "Space O(n): HashMap, HashSet, auxiliary arrays" },
      { id: "explain-out-loud", label: "Can state Big-O of any Week 1–4 problem out loud" },
    ],
    scratchCode: `// Big-O Cheat Sheet

// O(1)   → return nums[0];
// O(n)   → for (int i = 0; i < n; i++) { }
// O(n²)  → for i → for j { }
// O(log n) → lo/hi binary search
// O(n log n) → Array.Sort()

// THE TRICK: O(n²) → O(n)
// Before: find pair with nested loop
for (int i = 0; i < n; i++)
    for (int j = i+1; j < n; j++)
        if (nums[j] == target - nums[i]) ...

// After: HashMap lookup O(1) per element
var map = new Dictionary<int,int>();
for (int i = 0; i < n; i++) {
    if (map.ContainsKey(target - nums[i])) ...
    map[nums[i]] = i;
}`
  },
  {
    id: 6, title: "CTCI Reading Tracker", week: "Weeks 1–4", emoji: "📖", color: "#FFF3C2",
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
    scratchCode: `// S.T.A.R. Template

// Situation: Set the scene
// Task:      What was your responsibility?
// Action:    What did YOU specifically do?
// Result:    Quantify the outcome

// Prepare these 5 answers:
// 1. A challenge you overcame
// 2. Your biggest mistake + what you learned
// 3. Why you want to work here
// 4. A time you worked in a team
// 5. Tell me about yourself (2-min pitch)`
  },
  {
    id: 7, title: "Portfolio & GitHub Tasks", week: "Weeks 1–4", emoji: "🗂️", color: "#E8D5FF",
    items: [
      { id: "wildlife-readme", label: "Week 1: Polish wildlife project README" },
      { id: "gs-readme", label: "Week 2: Green School E-Diary README written" },
      { id: "3-more-readme", label: "Week 2: 3 other repo READMEs updated" },
      { id: "unit-tests", label: "Week 3: 5 xUnit unit tests added to wildlife" },
      { id: "linkedin-setup", label: "Week 4: LinkedIn profile created/updated" },
      { id: "github-profile", label: "Week 4: GitHub profile README.md created" },
      { id: "6-pinned", label: "6 repos pinned on GitHub with descriptions" },
      { id: "photo-bio", label: "Professional photo and bio on both platforms" },
    ],
    scratchCode: `# README Template

## 🏷️ Project Name — tagline

### What is this?
One paragraph — what it does and why.

### Tech Stack
- Frontend: React / TypeScript
- Backend: .NET / C#
- Database: PostgreSQL / Supabase

### Key Features
- Feature 1
- Feature 2

### Running locally
\`\`\`bash
git clone ...
cd project && npm install && npm start
\`\`\`

### Screenshots
[Add 1-2 screenshots or a GIF demo]`
  },
  {
    id: 8, title: "Month 1 Master Tracker", week: "All 4 Weeks", emoji: "🏆", color: "#FFD6C2",
    items: [
      { id: "week1-done", label: "Week 1 completed (Arrays & Strings — 6+ problems)" },
      { id: "week2-done", label: "Week 2 completed (HashMaps & Sets — 6+ problems)" },
      { id: "week3-done", label: "Week 3 completed (Two Pointers — 8+ problems)" },
      { id: "week4-done", label: "Week 4 completed (Sliding Window — 8+ problems)" },
      { id: "review-missed", label: "Re-solved all looked-up solutions the next day" },
      { id: "bigO-all", label: "Can state Big-O for every problem without checking" },
      { id: "pattern-recog", label: "Can identify pattern in <30s on new problems" },
      { id: "month1-reflect", label: "Wrote Month 1 reflection — what was hardest, what clicked" },
    ],
    scratchCode: `// Month 1 Reflection

// Total problems solved: ___
// Hardest problem: ___
// Pattern I struggled with most: ___
// Pattern that clicked first: ___

// Portfolio:
// ✅ wildlife README
// ✅ green-school README
// ✅ unit tests added
// ✅ LinkedIn created

// Month 2 preview:
// → Linked Lists (fast/slow pointers)
// → Stacks & Queues (monotonic stack)
// → Trees (DFS/BFS recursion)`
  },

  // ─── MONTH 2: Building ─────────────────────────────────────────────────────
  {
    id: 17, title: "Linked Lists", week: "Week 5 (Month 2)", emoji: "🔗", color: "#FFD6E0",
    items: [
      { id: "ll-reverse", label: "Reverse Linked List: three pointers prev/curr/next" },
      { id: "ll-fast-slow", label: "Fast/slow pointers: detect cycle, find middle" },
      { id: "ll-dummy", label: "Dummy head trick: simplifies edge cases at head node" },
      { id: "ll-cycle-impl", label: "Implemented Linked List Cycle detection (Floyd's algorithm)" },
      { id: "ll-reorder", label: "Reorder List: find mid → reverse second half → merge" },
      { id: "ll-floyd-dup", label: "Find Duplicate Number: Floyd's cycle on index-as-pointer" },
      { id: "bigO-ws17", label: "All linked list traversals O(n) time, O(1) space — no extra array" },
    ],
    scratchCode: `// Reverse Linked List
public ListNode ReverseList(ListNode head) {
    ListNode prev = null, curr = head;
    while (curr != null) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// Linked List Cycle Detection (Floyd's)
public bool HasCycle(ListNode head) {
    var slow = head; var fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}`,
  },
  {
    id: 18, title: "Stacks & Queues", week: "Week 6 (Month 2)", emoji: "📚", color: "#FFF3C2",
    items: [
      { id: "sq-lifo-fifo", label: "Stack = LIFO (push/pop O(1)); Queue = FIFO (enqueue/dequeue O(1))" },
      { id: "sq-bracket", label: "Bracket matching: push open brackets, pop+match on close bracket" },
      { id: "sq-mono-stack", label: "Monotonic decreasing stack → next greater element in O(n)" },
      { id: "sq-min-stack", label: "Min Stack: maintain a second stack that tracks running minimums" },
      { id: "sq-daily-temps", label: "Daily Temperatures: push indices, pop when warmer temperature found" },
      { id: "sq-gen-parens", label: "Generate Parentheses: backtrack with open/close count constraints" },
      { id: "bigO-ws18", label: "Stack/Queue all O(1) push/pop; monotonic stack O(n) amortized" },
    ],
    scratchCode: `// Valid Parentheses
public bool IsValid(string s) {
    var stack = new Stack<char>();
    foreach (char c in s) {
        if (c == '(' || c == '[' || c == '{') { stack.Push(c); continue; }
        if (stack.Count == 0) return false;
        char top = stack.Pop();
        if (c == ')' && top != '(') return false;
        if (c == ']' && top != '[') return false;
        if (c == '}' && top != '{') return false;
    }
    return stack.Count == 0;
}

// Daily Temperatures — monotonic decreasing stack of indices
public int[] DailyTemperatures(int[] t) {
    var res = new int[t.Length];
    var stack = new Stack<int>(); // stores indices
    for (int i = 0; i < t.Length; i++) {
        while (stack.Count > 0 && t[stack.Peek()] < t[i]) {
            int idx = stack.Pop();
            res[idx] = i - idx;
        }
        stack.Push(i);
    }
    return res;
}`,
  },
  {
    id: 19, title: "Trees — Basics", week: "Week 7 (Month 2)", emoji: "🌳", color: "#C2F0DC",
    items: [
      { id: "tree-dfs", label: "DFS recursive template: base case (null) → process left → right" },
      { id: "tree-bfs", label: "BFS level order: queue + snapshot queue size at start of each level" },
      { id: "tree-height", label: "Height recursion: 1 + max(height(left), height(right))" },
      { id: "tree-invert", label: "Invert Binary Tree: swap left/right children at every node" },
      { id: "tree-path-sum", label: "Path Sum: subtract node val; return true at leaf when remaining == 0" },
      { id: "tree-right-view", label: "Right Side View: BFS, take the last node's val from each level" },
      { id: "bigO-ws19", label: "Tree recursion O(n) — every node visited exactly once" },
    ],
    scratchCode: `// Maximum Depth — DFS
public int MaxDepth(TreeNode root) {
    if (root == null) return 0;
    return 1 + Math.Max(MaxDepth(root.left), MaxDepth(root.right));
}

// Level Order Traversal — BFS
public IList<IList<int>> LevelOrder(TreeNode root) {
    var res = new List<IList<int>>();
    if (root == null) return res;
    var q = new Queue<TreeNode>();
    q.Enqueue(root);
    while (q.Count > 0) {
        int size = q.Count;
        var level = new List<int>();
        for (int i = 0; i < size; i++) {
            var node = q.Dequeue();
            level.Add(node.val);
            if (node.left != null) q.Enqueue(node.left);
            if (node.right != null) q.Enqueue(node.right);
        }
        res.Add(level);
    }
    return res;
}`,
  },
  {
    id: 20, title: "Trees — BST", week: "Week 8 (Month 2)", emoji: "🌲", color: "#D4C5F9",
    items: [
      { id: "bst-property", label: "BST property: ALL left subtree < root, ALL right subtree > root" },
      { id: "bst-inorder", label: "In-order traversal of BST always yields a sorted ascending sequence" },
      { id: "bst-validate", label: "Validate BST: thread (min, max) bounds down the recursion" },
      { id: "bst-lca", label: "LCA in BST: both < root → go left; both > root → go right; else root" },
      { id: "bst-kth", label: "Kth Smallest: in-order traversal, decrement k; stop when k == 0" },
      { id: "bst-construct", label: "Construct from Pre/Inorder: preorder[0] is root; locate in inorder to split" },
      { id: "bigO-ws20", label: "BST ops O(h): O(log n) balanced tree, O(n) worst-case unbalanced" },
    ],
    scratchCode: `// Validate BST
public bool IsValidBST(TreeNode root,
    long min = long.MinValue, long max = long.MaxValue) {
    if (root == null) return true;
    if (root.val <= min || root.val >= max) return false;
    return IsValidBST(root.left, min, root.val)
        && IsValidBST(root.right, root.val, max);
}

// LCA of a BST
public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (p.val < root.val && q.val < root.val)
        return LowestCommonAncestor(root.left, p, q);
    if (p.val > root.val && q.val > root.val)
        return LowestCommonAncestor(root.right, p, q);
    return root; // one on each side → current node is LCA
}`,
  },
  {
    id: 21, title: "Month 2 Master Tracker", week: "All 4 Weeks (Month 2)", emoji: "🏆", color: "#FFD6E0",
    items: [
      { id: "w5-done", label: "Week 5 completed (Linked Lists — 6+ problems)" },
      { id: "w6-done", label: "Week 6 completed (Stacks & Queues — 6+ problems)" },
      { id: "w7-done", label: "Week 7 completed (Trees Basics — 10+ problems)" },
      { id: "w8-done", label: "Week 8 completed (Trees BST — 6+ problems)" },
      { id: "docker-basic", label: "Learned Docker basics — containerized at least one project" },
      { id: "showcase-started", label: "New showcase project started (gRPC / SignalR / Docker app)" },
      { id: "ms-research", label: "Researched Microsoft / Nordeus new grad openings" },
      { id: "month2-reflect", label: "Wrote Month 2 reflection — hardest pattern, what clicked" },
    ],
    scratchCode: `// Month 2 Reflection

// Total problems solved (Month 2): ___
// Hardest problem: ___
// Tree recursion pattern that clicked: ___
// Stack trick that surprised me: ___

// Docker:
// ✅ Containerized project: ___
// ✅ docker-compose written

// Month 3 preview:
// → Heaps / Priority Queues (top-K, two heaps for median)
// → Binary Search (classic + search on answer space)
// → Graphs BFS/DFS (islands, course schedule)
// → Advanced Graphs (Dijkstra, Union-Find, topological sort)`,
  },

  // ─── MONTH 3: Deepening ─────────────────────────────────────────────────────
  {
    id: 22, title: "Heaps & Priority Queues", week: "Week 9 (Month 3)", emoji: "⛰️", color: "#FFD6C2",
    items: [
      { id: "heap-minmax", label: "Min heap: smallest at top. Max heap: largest at top. O(log n) push/pop." },
      { id: "heap-topk", label: "Top K largest → min heap of size k: if new > top, pop old & push new" },
      { id: "heap-vs-sort", label: "Heap O(n log k) vs sort O(n log n) — heap wins for streaming / large n" },
      { id: "heap-kth", label: "Kth Largest: maintain min heap of size k; answer = heap top" },
      { id: "heap-two", label: "Find Median from Stream: max-lower + min-upper heaps, size diff ≤ 1" },
      { id: "heap-merge-k", label: "Merge K Sorted Lists: min heap of (val, listIndex, nodeRef)" },
      { id: "bigO-ws22", label: "Heap insert/remove O(log n); heapify O(n) — explained each" },
    ],
    scratchCode: `// Kth Largest — min heap of size k (.NET 6+ PriorityQueue)
public int FindKthLargest(int[] nums, int k) {
    var pq = new PriorityQueue<int, int>(); // min-heap
    foreach (var n in nums) {
        pq.Enqueue(n, n);
        if (pq.Count > k) pq.Dequeue();
    }
    return pq.Peek(); // smallest of the top-k = kth largest
}

// Two Heaps for Find Median from Data Stream
public class MedianFinder {
    PriorityQueue<int,int> lo = new(); // max heap (negate priority)
    PriorityQueue<int,int> hi = new(); // min heap
    public void AddNum(int num) {
        lo.Enqueue(num, -num);
        hi.Enqueue(lo.Peek(), lo.Peek()); lo.Dequeue();
        if (lo.Count < hi.Count) {
            lo.Enqueue(hi.Peek(), -hi.Peek()); hi.Dequeue();
        }
    }
    public double FindMedian() =>
        lo.Count > hi.Count ? lo.Peek() : (lo.Peek() + hi.Peek()) / 2.0;
}`,
  },
  {
    id: 23, title: "Binary Search", week: "Week 10 (Month 3)", emoji: "🔍", color: "#C2DEFF",
    items: [
      { id: "bs-template", label: "Classic template: lo=0, hi=n-1, mid=lo+(hi-lo)/2, compare nums[mid]" },
      { id: "bs-sorted-trigger", label: "Sorted input + searching → O(log n) is always possible" },
      { id: "bs-answer-space", label: "Search on answer space: binary search the valid range of k (Koko)" },
      { id: "bs-rotated", label: "Rotated array: one half is always sorted — determine which and search it" },
      { id: "bs-2d", label: "Search 2D Matrix: treat as flat array, row = mid/n, col = mid%n" },
      { id: "bs-upper-bound", label: "Upper-bound pattern: hi = mid (not mid-1) when looking for leftmost valid" },
      { id: "bigO-ws23", label: "All binary search problems O(log n) — explained how each halves the space" },
    ],
    scratchCode: `// Binary Search Template
public int Search(int[] nums, int target) {
    int lo = 0, hi = nums.Length - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2; // avoids integer overflow
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}

// Koko Eating Bananas — binary search on answer space
public int MinEatingSpeed(int[] piles, int h) {
    int lo = 1, hi = piles.Max();
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        long hours = piles.Sum(p => ((long)p + mid - 1) / mid);
        if (hours <= h) hi = mid;   // mid might be valid, don't exclude
        else lo = mid + 1;
    }
    return lo;
}`,
  },
  {
    id: 24, title: "Graphs — BFS & DFS", week: "Week 11 (Month 3)", emoji: "🕸️", color: "#E8D5FF",
    items: [
      { id: "graph-bfs-tmpl", label: "BFS template: queue + visited set; process level by level; O(V+E)" },
      { id: "graph-dfs-tmpl", label: "DFS template: visited set + recursive explore neighbors" },
      { id: "graph-islands", label: "Number of Islands: DFS flood fill from each unvisited '1'" },
      { id: "graph-multi-bfs", label: "Multi-source BFS: enqueue all sources together (Walls+Gates, Rotting Oranges)" },
      { id: "graph-topo", label: "Topological sort: DFS 3-color (white/gray/black) or Kahn's in-degree" },
      { id: "graph-union-find", label: "Redundant Connection: Union-Find — edge joining same component is redundant" },
      { id: "bigO-ws24", label: "Graph BFS/DFS O(V+E) — visit each vertex and edge exactly once" },
    ],
    scratchCode: `// Number of Islands — DFS flood fill
public int NumIslands(char[][] grid) {
    int count = 0;
    for (int r = 0; r < grid.Length; r++)
        for (int c = 0; c < grid[0].Length; c++)
            if (grid[r][c] == '1') { Dfs(grid, r, c); count++; }
    return count;
}
void Dfs(char[][] grid, int r, int c) {
    if (r < 0 || r >= grid.Length || c < 0 || c >= grid[0].Length
        || grid[r][c] != '1') return;
    grid[r][c] = '0'; // mark visited in-place
    Dfs(grid, r+1, c); Dfs(grid, r-1, c);
    Dfs(grid, r, c+1); Dfs(grid, r, c-1);
}

// Course Schedule — cycle detection via DFS 3-color
public bool CanFinish(int n, int[][] prereqs) {
    var adj = new List<int>[n];
    for (int i = 0; i < n; i++) adj[i] = new();
    foreach (var p in prereqs) adj[p[1]].Add(p[0]);
    var state = new int[n]; // 0=unvisited 1=visiting 2=done
    bool Dfs(int v) {
        if (state[v] == 1) return false; // cycle!
        if (state[v] == 2) return true;
        state[v] = 1;
        foreach (var nb in adj[v]) if (!Dfs(nb)) return false;
        state[v] = 2; return true;
    }
    for (int i = 0; i < n; i++) if (!Dfs(i)) return false;
    return true;
}`,
  },
  {
    id: 25, title: "Graphs — Advanced", week: "Week 12 (Month 3)", emoji: "🗺️", color: "#C2F0DC",
    items: [
      { id: "dijkstra-tmpl", label: "Dijkstra: min-heap (dist, node); relax neighbors; O((V+E) log V)" },
      { id: "bellman-ford", label: "Bellman-Ford: K edge iterations for K-stop shortest path problems" },
      { id: "union-find-pc", label: "Union-Find with path compression + union by rank: near-O(1) each op" },
      { id: "kahn-topo", label: "Kahn's topological sort: in-degree array + queue of 0-in-degree nodes" },
      { id: "word-ladder-bfs", label: "Word Ladder: BFS with all 26-char substitutions tried per position" },
      { id: "dijkstra-vs-bfs", label: "BFS for unweighted shortest path; Dijkstra for weighted" },
      { id: "bigO-ws25", label: "Picked correct algorithm for 3 different shortest-path problem types" },
    ],
    scratchCode: `// Dijkstra — Network Delay Time
public int NetworkDelayTime(int[][] times, int n, int k) {
    var adj = new Dictionary<int, List<(int to, int w)>>();
    foreach (var t in times) {
        adj.TryAdd(t[0], new());
        adj[t[0]].Add((t[1], t[2]));
    }
    var dist = new int[n + 1]; Array.Fill(dist, int.MaxValue); dist[k] = 0;
    var pq = new PriorityQueue<(int d, int v), int>();
    pq.Enqueue((0, k), 0);
    while (pq.Count > 0) {
        var (d, v) = pq.Dequeue();
        if (d > dist[v] || !adj.ContainsKey(v)) continue;
        foreach (var (nb, w) in adj[v])
            if (dist[v] + w < dist[nb]) {
                dist[nb] = dist[v] + w;
                pq.Enqueue((dist[nb], nb), dist[nb]);
            }
    }
    int ans = dist.Skip(1).Max();
    return ans == int.MaxValue ? -1 : ans;
}`,
  },
  {
    id: 26, title: "Month 3 Master Tracker", week: "All 4 Weeks (Month 3)", emoji: "🏆", color: "#C2F0DC",
    items: [
      { id: "w9-done", label: "Week 9 completed (Heaps — 6+ problems)" },
      { id: "w10-done", label: "Week 10 completed (Binary Search — 6+ problems)" },
      { id: "w11-done", label: "Week 11 completed (Graphs BFS/DFS — 10+ problems)" },
      { id: "w12-done", label: "Week 12 completed (Graphs Advanced — 6+ problems)" },
      { id: "sysdesign-1-6", label: "Read System Design Interview ch. 1–6 and wrote brief notes" },
      { id: "mock1-done", label: "Mock interview #1 completed (Pramp or friend)" },
      { id: "linkedin-apply", label: "Started applying to target companies via LinkedIn Easy Apply" },
      { id: "month3-reflect", label: "Wrote Month 3 reflection — graph pattern insights, when to pick Dijkstra" },
    ],
    scratchCode: `// Month 3 Reflection

// Total problems solved (Month 3): ___
// Hardest problem: ___
// Graph pattern that finally clicked: ___
// When to use BFS vs DFS: ___
// When to use Dijkstra vs plain BFS: ___

// System Design notes (ch 1-6):
// Ch 1-3: ___
// Ch 4-6: ___

// Mock #1 score: ___/10
// Feedback: ___

// Month 4 preview:
// → DP 1D (memoization, tabulation, recurrence)
// → DP 2D (grid DP, LCS, knapsack)
// → Backtracking (subsets, permutations, pruning)
// → Tries & Intervals (prefix trees, interval merge)`,
  },

  // ─── MONTH 4: Polish ────────────────────────────────────────────────────────
  {
    id: 27, title: "Dynamic Programming — 1D", week: "Week 13 (Month 4)", emoji: "⚡", color: "#FFD6C2",
    items: [
      { id: "dp-identify", label: "DP trigger: overlapping subproblems + optimal substructure present" },
      { id: "dp-recurrence", label: "Write recurrence FIRST: dp[i] = f(dp[i-1], dp[i-2], ...)" },
      { id: "dp-bottomup", label: "Bottom-up tabulation: fill array iteratively, no recursion needed" },
      { id: "dp-topdown", label: "Top-down memoization: recursion + cache (dictionary or array)" },
      { id: "dp-house-robber", label: "House Robber: dp[i] = max(dp[i-2] + nums[i], dp[i-1])" },
      { id: "dp-coin-change", label: "Coin Change: dp[i] = min over all coins: dp[i-coin] + 1" },
      { id: "bigO-ws27", label: "DP trades O(2^n) time for O(n) space — articulated this trade-off clearly" },
    ],
    scratchCode: `// Climbing Stairs — bottom-up O(1) space
public int ClimbStairs(int n) {
    if (n <= 2) return n;
    int prev2 = 1, prev1 = 2;
    for (int i = 3; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1; prev1 = curr;
    }
    return prev1;
}

// Coin Change — DP
public int CoinChange(int[] coins, int amount) {
    var dp = new int[amount + 1];
    Array.Fill(dp, amount + 1); // use amount+1 as "infinity" sentinel
    dp[0] = 0;
    for (int i = 1; i <= amount; i++)
        foreach (var c in coins)
            if (c <= i) dp[i] = Math.Min(dp[i], dp[i - c] + 1);
    return dp[amount] > amount ? -1 : dp[amount];
}`,
  },
  {
    id: 28, title: "Dynamic Programming — 2D", week: "Week 14 (Month 4)", emoji: "🧩", color: "#D4C5F9",
    items: [
      { id: "dp2d-grid", label: "Grid DP: dp[i][j] = dp[i-1][j] + dp[i][j-1] (paths/obstacles)" },
      { id: "dp2d-lcs", label: "LCS: match → 1+dp[i-1][j-1]; else max(dp[i-1][j], dp[i][j-1])" },
      { id: "dp2d-knapsack", label: "0/1 Knapsack: outer loop = items, inner = capacity backwards" },
      { id: "dp2d-edit-dist", label: "Edit Distance: 3 ops (insert/delete/replace) map to 3 neighboring dp cells" },
      { id: "dp2d-rolling", label: "Rolling array optimization: reduce O(m·n) space → O(n) with one row" },
      { id: "dp2d-interleave", label: "Interleaving String: dp[i][j] = can form s3[:i+j] from s1[:i], s2[:j]" },
      { id: "bigO-ws28", label: "All 2D DP O(m·n) time — identified which problems allow O(n) space" },
    ],
    scratchCode: `// Longest Common Subsequence
public int LongestCommonSubsequence(string text1, string text2) {
    int m = text1.Length, n = text2.Length;
    var dp = new int[m + 1, n + 1];
    for (int i = 1; i <= m; i++)
        for (int j = 1; j <= n; j++)
            dp[i, j] = text1[i-1] == text2[j-1]
                ? 1 + dp[i-1, j-1]
                : Math.Max(dp[i-1, j], dp[i, j-1]);
    return dp[m, n];
}

// Edit Distance
public int MinDistance(string word1, string word2) {
    int m = word1.Length, n = word2.Length;
    var dp = new int[m + 1, n + 1];
    for (int i = 0; i <= m; i++) dp[i, 0] = i;
    for (int j = 0; j <= n; j++) dp[0, j] = j;
    for (int i = 1; i <= m; i++)
        for (int j = 1; j <= n; j++)
            dp[i, j] = word1[i-1] == word2[j-1]
                ? dp[i-1, j-1]
                : 1 + Math.Min(dp[i-1, j-1], Math.Min(dp[i-1, j], dp[i, j-1]));
    return dp[m, n];
}`,
  },
  {
    id: 29, title: "Backtracking", week: "Week 15 (Month 4)", emoji: "🌀", color: "#C2DEFF",
    items: [
      { id: "bt-template", label: "Template: choose → recurse → unchoose (always undo the choice)" },
      { id: "bt-prune", label: "Pruning: skip branch as soon as partial solution is already invalid" },
      { id: "bt-subsets-perms", label: "Subsets: include/skip at each index. Permutations: swap positions." },
      { id: "bt-dups", label: "Avoid duplicates: sort first, then skip same value at same recursion depth" },
      { id: "bt-word-search", label: "Word Search: mark cell visited (= '#'), DFS, restore on backtrack" },
      { id: "bt-combo-sum", label: "Combination Sum: elements reusable → don't advance start index" },
      { id: "bigO-ws29", label: "Backtracking O(2^n) or O(n!) — pruning makes it practical in practice" },
    ],
    scratchCode: `// Subsets
public IList<IList<int>> Subsets(int[] nums) {
    var res = new List<IList<int>>();
    void Bt(int start, List<int> curr) {
        res.Add(new List<int>(curr));
        for (int i = start; i < nums.Length; i++) {
            curr.Add(nums[i]);
            Bt(i + 1, curr);
            curr.RemoveAt(curr.Count - 1); // unchoose
        }
    }
    Bt(0, new List<int>());
    return res;
}

// Combination Sum (elements reusable)
public IList<IList<int>> CombinationSum(int[] candidates, int target) {
    var res = new List<IList<int>>();
    void Bt(int start, int rem, List<int> curr) {
        if (rem == 0) { res.Add(new List<int>(curr)); return; }
        if (rem < 0) return;
        for (int i = start; i < candidates.Length; i++) {
            curr.Add(candidates[i]);
            Bt(i, rem - candidates[i], curr); // i not i+1 → reuse
            curr.RemoveAt(curr.Count - 1);
        }
    }
    Bt(0, target, new List<int>());
    return res;
}`,
  },
  {
    id: 30, title: "Tries & Intervals", week: "Week 16 (Month 4)", emoji: "🔤", color: "#C2F0DC",
    items: [
      { id: "trie-node", label: "TrieNode: TrieNode[26] children array + bool isEnd flag" },
      { id: "trie-insert", label: "Insert: for each char, create node if null, advance; set isEnd at end" },
      { id: "trie-search", label: "StartsWith returns true at end of prefix; Search also checks isEnd" },
      { id: "interval-sort", label: "Interval pattern: always sort by start time first" },
      { id: "interval-merge", label: "Merge Intervals: extend prev.end if curr.start ≤ prev.end" },
      { id: "interval-rooms", label: "Meeting Rooms II: min-heap of end times; heap size = rooms needed" },
      { id: "bigO-ws30", label: "Trie O(L) search vs O(n·L) scan; interval sort O(n log n)" },
    ],
    scratchCode: `// Implement Trie
public class Trie {
    class TrieNode { public TrieNode[] c = new TrieNode[26]; public bool end; }
    TrieNode root = new();
    public void Insert(string word) {
        var node = root;
        foreach (char ch in word) {
            int i = ch - 'a';
            node.c[i] ??= new TrieNode();
            node = node.c[i];
        }
        node.end = true;
    }
    public bool Search(string word) => Traverse(word)?.end == true;
    public bool StartsWith(string prefix) => Traverse(prefix) != null;
    TrieNode Traverse(string s) {
        var node = root;
        foreach (char ch in s) { node = node.c[ch - 'a']; if (node == null) return null; }
        return node;
    }
}

// Merge Intervals
public int[][] Merge(int[][] intervals) {
    Array.Sort(intervals, (a, b) => a[0] - b[0]);
    var res = new List<int[]> { intervals[0] };
    foreach (var iv in intervals.Skip(1)) {
        if (iv[0] <= res[^1][1]) res[^1][1] = Math.Max(res[^1][1], iv[1]);
        else res.Add(iv);
    }
    return res.ToArray();
}`,
  },
  {
    id: 31, title: "Month 4 Master Tracker", week: "All 4 Weeks (Month 4)", emoji: "🏆", color: "#C2DEFF",
    items: [
      { id: "w13-done", label: "Week 13 completed (DP 1D — 10+ problems)" },
      { id: "w14-done", label: "Week 14 completed (DP 2D — 8+ problems)" },
      { id: "w15-done", label: "Week 15 completed (Backtracking — 8+ problems)" },
      { id: "w16-done", label: "Week 16 completed (Tries & Intervals — 8+ problems)" },
      { id: "mock2-done", label: "Mock interview #2 — thought process explained clearly out loud" },
      { id: "mock3-done", label: "Mock interview #3 — full 45-min simulation with system design" },
      { id: "portfolio-6", label: "Portfolio polished — 6 projects with strong READMEs" },
      { id: "month4-reflect", label: "Wrote Month 4 reflection — DP patterns mastered vs still shaky" },
    ],
    scratchCode: `// Month 4 Reflection

// Total problems solved (Month 4): ___
// Hardest DP problem: ___
// DP recurrence I'm most proud of: ___
// Backtracking problem where pruning saved me: ___

// Mock Interview Record:
// Mock #2 — ___/10, feedback: ___
// Mock #3 — ___/10, feedback: ___

// Portfolio:
// ✅ Project 1: ___
// ✅ Project 2: ___
// ✅ Project 3: ___

// Month 5 preview:
// → Bit Manipulation (XOR tricks, power of 2, bit shifting)
// → Advanced DP (LIS patience sort, interval DP, partition)
// → Greedy Algorithms (exchange argument, earliest-finish-time)
// → Math & Matrix (rotate, spiral traversal, fast power)`,
  },

  {
    id: 9, title: "Bit Manipulation", week: "Week 17 (Month 5)", emoji: "⚙️", color: "#FFD6C2",
    items: [
      { id: "xor-cancel", label: "XOR cancellation: a ^ a = 0, a ^ 0 = a — duplicates vanish" },
      { id: "clear-lsb", label: "Clear lowest set bit: n & (n-1) — also checks power of two" },
      { id: "single-num-impl", label: "Implemented Single Number with XOR in one pass" },
      { id: "count-bits-dp", label: "Counting Bits DP: dp[i] = dp[i>>1] + (i & 1)" },
      { id: "missing-xor", label: "Missing Number via XOR of 0..n with array" },
      { id: "sum-no-add", label: "Sum Without + : iterate until carry is zero" },
      { id: "bigO-ws9", label: "All 7 bit problems done; articulated why each is O(1) or O(n)" },
    ],
    scratchCode: `// Single Number — XOR all values
public int SingleNumber(int[] nums) {
    int res = 0;
    foreach (var n in nums) res ^= n;
    return res;
}

// Counting Bits — DP on right shift
public int[] CountBits(int n) {
    var dp = new int[n + 1];
    for (int i = 1; i <= n; i++)
        dp[i] = dp[i >> 1] + (i & 1);
    return dp;
}

// Power of Two
public bool IsPowerOfTwo(int n) => n > 0 && (n & (n - 1)) == 0;

// Sum of Two Integers (no + or -)
public int GetSum(int a, int b) {
    while (b != 0) {
        int carry = (a & b) << 1;
        a ^= b;
        b = carry;
    }
    return a;
}`
  },
  {
    id: 10, title: "Advanced DP", week: "Week 18 (Month 5)", emoji: "🧬", color: "#D4C5F9",
    items: [
      { id: "lis-naive", label: "LIS O(n²) DP: dp[i] = max dp[j]+1 where nums[j] < nums[i]" },
      { id: "lis-bsearch", label: "LIS O(n log n): patience sort with binary search on tails array" },
      { id: "interval-dp", label: "Interval DP pattern: dp[i][j] = best cost to handle range [i,j]" },
      { id: "burst-impl", label: "Burst Balloons: think of last balloon popped, not first" },
      { id: "partition-impl", label: "Partition Equal Subset: reduce to subset-sum boolean knapsack" },
      { id: "jump2-impl", label: "Jump Game II: greedy BFS — no DP needed, O(n)" },
      { id: "bigO-ws10", label: "Compared top-down memoization vs bottom-up for each problem" },
    ],
    scratchCode: `// LIS — O(n log n) patience sort
public int LengthOfLIS(int[] nums) {
    var tails = new List<int>();
    foreach (var n in nums) {
        int lo = 0, hi = tails.Count;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (tails[mid] < n) lo = mid + 1;
            else hi = mid;
        }
        if (lo == tails.Count) tails.Add(n);
        else tails[lo] = n;
    }
    return tails.Count;
}

// Partition Equal Subset Sum
public bool CanPartition(int[] nums) {
    int total = nums.Sum();
    if (total % 2 != 0) return false;
    int target = total / 2;
    var dp = new bool[target + 1];
    dp[0] = true;
    foreach (var n in nums)
        for (int j = target; j >= n; j--)
            dp[j] |= dp[j - n];
    return dp[target];
}`
  },
  {
    id: 11, title: "Greedy Algorithms", week: "Week 19 (Month 5)", emoji: "🏹", color: "#C2F0DC",
    items: [
      { id: "greedy-proof", label: "Exchange argument: swapping any two choices cannot improve a greedy result" },
      { id: "jump-impl", label: "Jump Game: maintain maxReach; if i > maxReach return false" },
      { id: "gas-impl", label: "Gas Station: reset start after any negative-tank point" },
      { id: "partition-labels-impl", label: "Partition Labels: last-occurrence map + extend end greedily" },
      { id: "valid-paren-star-impl", label: "Valid Paren Star: track [minOpen, maxOpen] range; * can be (, ), or empty" },
      { id: "greedy-vs-dp", label: "Identified which problems need greedy vs DP and explained why" },
      { id: "bigO-ws11", label: "All greedy problems in O(n) or O(n log n); no extra space beyond O(1)" },
    ],
    scratchCode: `// Jump Game
public bool CanJump(int[] nums) {
    int maxReach = 0;
    for (int i = 0; i < nums.Length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.Max(maxReach, i + nums[i]);
    }
    return true;
}

// Partition Labels
public IList<int> PartitionLabels(string s) {
    var last = new int[26];
    for (int i = 0; i < s.Length; i++) last[s[i] - 'a'] = i;
    var res = new List<int>();
    int start = 0, end = 0;
    for (int i = 0; i < s.Length; i++) {
        end = Math.Max(end, last[s[i] - 'a']);
        if (i == end) { res.Add(end - start + 1); start = i + 1; }
    }
    return res;
}`
  },
  {
    id: 12, title: "Math & Matrix", week: "Week 20 (Month 5)", emoji: "🔢", color: "#C2DEFF",
    items: [
      { id: "rotate-trick", label: "Rotate Image: transpose then reverse rows — no extra space" },
      { id: "spiral-bounds", label: "Spiral Matrix: 4-boundary shrink (top/bottom/left/right)" },
      { id: "matrix-zeros-markers", label: "Set Matrix Zeroes: use row 0 & col 0 as markers; process last" },
      { id: "fast-pow-impl", label: "Pow(x,n): exponentiation by squaring; handle n<0 via 1/x^-n" },
      { id: "multiply-str-impl", label: "Multiply Strings: digit[i]*digit[j] adds to pos i+j and i+j+1" },
      { id: "bigO-ws12", label: "Confirmed all matrix problems O(m·n) time, O(1) extra space" },
      { id: "month5-reflect", label: "Wrote Month 5 reflection — hardest problem, key insight gained" },
    ],
    scratchCode: `// Rotate Image in-place
public void Rotate(int[][] matrix) {
    int n = matrix.Length;
    // Transpose
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++)
            (matrix[i][j], matrix[j][i]) = (matrix[j][i], matrix[i][j]);
    // Reverse each row
    foreach (var row in matrix)
        Array.Reverse(row);
}

// Fast Power
public double MyPow(double x, int n) {
    long N = n;
    if (N < 0) { x = 1 / x; N = -N; }
    double res = 1;
    while (N > 0) {
        if ((N & 1) == 1) res *= x;
        x *= x;
        N >>= 1;
    }
    return res;
}`
  },
  {
    id: 13, title: "Month 5 Master Tracker", week: "All 4 Weeks (Month 5)", emoji: "🏆", color: "#FFD6C2",
    items: [
      { id: "w17-done", label: "Week 17 completed (Bit Manipulation — 6+ problems)" },
      { id: "w18-done", label: "Week 18 completed (Advanced DP — 6+ problems)" },
      { id: "w19-done", label: "Week 19 completed (Greedy — 6+ problems)" },
      { id: "w20-done", label: "Week 20 completed (Math & Matrix — 6+ problems)" },
      { id: "cf-problems", label: "3 Codeforces Div. 2 B/C problems solved and uploaded" },
      { id: "mock4-done", label: "Mock interview #4 completed with written feedback" },
      { id: "m5-bigO", label: "Can state Big-O for every Month 5 problem without checking" },
      { id: "m5-reflect", label: "Month 5 reflection written — strongest pattern, biggest gap" },
    ],
    scratchCode: `// Month 5 Reflection

// Total problems solved (Month 5): ___
// Hardest problem: ___
// Bit trick I'll always remember: ___
// DP pattern that finally clicked: ___

// Competitive Programming:
// ✅ Codeforces problem 1
// ✅ Codeforces problem 2
// ✅ Codeforces problem 3

// Month 6 preview:
// → Advanced Graphs (MST, Eulerian paths, Bridges)
// → Monotonic Structures (stack/deque, amortized O(n))
// → Hard Sprint (count inversions, sliding median, N-Queens)
// → Final Gauntlet (LRU/LFU, mixed patterns)`
  },
  {
    id: 14, title: "Advanced Graphs", week: "Week 21 (Month 6)", emoji: "🌐", color: "#FFD6E0",
    items: [
      { id: "kruskal-impl", label: "Kruskal's MST: sort edges by weight + Union-Find" },
      { id: "prim-impl", label: "Prim's MST: min-heap picking cheapest edge to unvisited node" },
      { id: "hierholzer", label: "Hierholzer's: DFS post-order on sorted adjacency lists → Eulerian path" },
      { id: "bipartite-impl", label: "Bipartite check: BFS 2-color; same-color neighbor = not bipartite" },
      { id: "tarjan-bridge", label: "Tarjan's bridges: low[v] > disc[u] → edge is a critical connection" },
      { id: "eval-div-impl", label: "Evaluate Division: weighted directed graph + BFS chain multiply" },
      { id: "bigO-ws14", label: "Compared Kruskal O(E log E) vs Prim O((V+E) log V) and when to pick each" },
    ],
    scratchCode: `// Kruskal's MST with Union-Find
public int MinCostConnectPoints(int[][] points) {
    int n = points.Length;
    var edges = new List<(int cost, int u, int v)>();
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++) {
            int cost = Math.Abs(points[i][0] - points[j][0])
                     + Math.Abs(points[i][1] - points[j][1]);
            edges.Add((cost, i, j));
        }
    edges.Sort((a, b) => a.cost - b.cost);
    int[] parent = Enumerable.Range(0, n).ToArray();
    int Find(int x) => parent[x] == x ? x : parent[x] = Find(parent[x]);
    int total = 0, count = 0;
    foreach (var (cost, u, v) in edges) {
        int pu = Find(u), pv = Find(v);
        if (pu == pv) continue;
        parent[pu] = pv; total += cost;
        if (++count == n - 1) break;
    }
    return total;
}`
  },
  {
    id: 15, title: "Monotonic Structures", week: "Week 22 (Month 6)", emoji: "📉", color: "#FFF3C2",
    items: [
      { id: "mono-stack-rule", label: "Monotonic decreasing stack → gives next-greater-element in O(n)" },
      { id: "mono-increase", label: "Monotonic increasing stack → gives previous-smaller-element" },
      { id: "amortized-proof", label: "Amortized O(n): each element pushed once and popped at most once" },
      { id: "stock-span-impl", label: "Online Stock Span: stack of (price, span); absorb smaller spans" },
      { id: "subarray-min-impl", label: "Sum Subarray Minimums: left-boundary × right-boundary contribution" },
      { id: "maximal-rect-impl", label: "Maximal Rectangle: run histogram algorithm on each row" },
      { id: "bigO-ws15", label: "All problems confirmed O(n) — explained amortized argument to partner" },
    ],
    scratchCode: `// Next Greater Element II (circular)
public int[] NextGreaterElements(int[] nums) {
    int n = nums.Length;
    var res = new int[n];
    Array.Fill(res, -1);
    var stack = new Stack<int>(); // indices
    for (int i = 0; i < 2 * n; i++) {
        while (stack.Count > 0 && nums[stack.Peek()] < nums[i % n])
            res[stack.Pop()] = nums[i % n];
        if (i < n) stack.Push(i);
    }
    return res;
}

// Online Stock Span
public class StockSpanner {
    Stack<(int price, int span)> stack = new();
    public int Next(int price) {
        int span = 1;
        while (stack.Count > 0 && stack.Peek().price <= price)
            span += stack.Pop().span;
        stack.Push((price, span));
        return span;
    }
}`
  },
  {
    id: 32, title: "Hard Problems Sprint", week: "Week 23 (Month 6)", emoji: "🔥", color: "#E8D5FF",
    items: [
      { id: "hard-merge-sort-inv", label: "Count Smaller After Self: merge-sort counts inversions O(n log n)" },
      { id: "hard-two-heaps-lazy", label: "Sliding Window Median: two heaps + lazy deletion on slide-out" },
      { id: "hard-reverse-k", label: "Reverse Nodes in k-Group: verify k nodes exist; reverse in-place with 3 pointers" },
      { id: "hard-n-queens", label: "N-Queens: track cols + diag (r-c) + anti-diag (r+c); backtrack row by row" },
      { id: "hard-sudoku", label: "Sudoku Solver: try 1–9 per empty cell; skip row/col/box conflicts; backtrack" },
      { id: "hard-first-missing", label: "First Missing Positive: cyclic sort — nums[i] belongs at index nums[i]-1" },
      { id: "bigO-ws32", label: "Each Hard has a 'trick' that drops complexity — identified it for all 6" },
    ],
    scratchCode: `// N-Queens — backtrack row by row
public IList<IList<string>> SolveNQueens(int n) {
    var res = new List<IList<string>>();
    var cols = new HashSet<int>();
    var diag = new HashSet<int>();  // r - c
    var anti = new HashSet<int>();  // r + c
    var board = new int[n];
    void Bt(int r) {
        if (r == n) {
            res.Add(board.Select(c => new string('.', c) + 'Q'
                + new string('.', n - c - 1)).ToList());
            return;
        }
        for (int c = 0; c < n; c++) {
            if (cols.Contains(c) || diag.Contains(r-c) || anti.Contains(r+c)) continue;
            cols.Add(c); diag.Add(r-c); anti.Add(r+c); board[r] = c;
            Bt(r + 1);
            cols.Remove(c); diag.Remove(r-c); anti.Remove(r+c);
        }
    }
    Bt(0);
    return res;
}

// First Missing Positive — cyclic sort O(n) time O(1) space
public int FirstMissingPositive(int[] nums) {
    int n = nums.Length;
    for (int i = 0; i < n; i++)
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i]-1] != nums[i])
            (nums[i], nums[nums[i]-1]) = (nums[nums[i]-1], nums[i]);
    for (int i = 0; i < n; i++) if (nums[i] != i + 1) return i + 1;
    return n + 1;
}`,
  },
  {
    id: 33, title: "Final Interview Gauntlet", week: "Week 24 (Month 6)", emoji: "🏅", color: "#C2F0DC",
    items: [
      { id: "lru-design", label: "LRU Cache: HashMap<key,node> + doubly-linked list; O(1) get/put" },
      { id: "lfu-design", label: "LFU Cache: two HashMaps (key→val+freq, freq→DLL) + minFreq variable" },
      { id: "pal-pairs-trie", label: "Palindrome Pairs: for each word, check all splits for reverse+palindrome match" },
      { id: "pressure-perf", label: "Solved 2 Hard problems end-to-end in a 45-min timed simulation" },
      { id: "pattern-recog-m6", label: "Can name the pattern of any Month 1–6 problem within 30 seconds" },
      { id: "loom-recorded", label: "Recorded 10-min Loom explanation of hardest problem end-to-end" },
      { id: "bigO-ws33", label: "LRU/LFU O(1) all ops — explained why DLL + HashMap achieves this" },
    ],
    scratchCode: `// LRU Cache — HashMap + doubly-linked list
public class LRUCache {
    class Node { public int key, val; public Node prev, next; }
    Dictionary<int, Node> map = new();
    Node head = new(), tail = new(); // dummy sentinels
    int cap;
    public LRUCache(int capacity) {
        cap = capacity;
        head.next = tail; tail.prev = head;
    }
    public int Get(int key) {
        if (!map.ContainsKey(key)) return -1;
        MoveToFront(map[key]);
        return map[key].val;
    }
    public void Put(int key, int val) {
        if (map.ContainsKey(key)) { map[key].val = val; MoveToFront(map[key]); return; }
        if (map.Count == cap) {
            map.Remove(tail.prev.key); Remove(tail.prev);
        }
        var node = new Node { key = key, val = val };
        map[key] = node; AddToFront(node);
    }
    void Remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    void AddToFront(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
    void MoveToFront(Node n) { Remove(n); AddToFront(n); }
}`,
  },
  {
    id: 16, title: "Month 6 Master Tracker", week: "All 4 Weeks (Month 6)", emoji: "🎓", color: "#C2F0DC",
    items: [
      { id: "w21-done", label: "Week 21 completed (Advanced Graphs — 6+ problems)" },
      { id: "w22-done", label: "Week 22 completed (Monotonic Structures — 5+ problems)" },
      { id: "w23-done", label: "Week 23 completed (Hard Sprint — 5+ problems)" },
      { id: "w24-done", label: "Week 24 completed (Final Gauntlet — 5+ problems)" },
      { id: "mock5-done", label: "Mock interview #5 with monotonic stack explanation" },
      { id: "mock6-done", label: "Final full-loop mock interview with written feedback" },
      { id: "loom-video", label: "Recorded 10-min Loom explanation of hardest solved problem" },
      { id: "applications-out", label: "Job applications finalized and submitted" },
      { id: "6month-reflect", label: "Full 6-month reflection written — problems solved, growth, next steps" },
    ],
    scratchCode: `// Final 6-Month Reflection

// Total LeetCode problems solved: ___
// Hardest solved: ___
// Favourite pattern: ___
// Weakest area to keep drilling: ___

// Mock Interview Record:
// Mock #1 — ___/10, feedback: ___
// Mock #2 — ___/10, feedback: ___
// Mock #3 — ___/10, feedback: ___
// Mock #4 — ___/10, feedback: ___
// Mock #5 — ___/10, feedback: ___
// Final  — ___/10, feedback: ___

// Applications submitted:
// ✅ Microsoft ___
// ✅ JetBrains ___
// ✅ Nordeus  ___

// Next steps:
// → Master's at RAF (September)
// → Continue competitive programming (Codeforces Div. 1)`
  },
];

// ─── CAREER & ROADMAP DATA ───────────────────────────────────────────────────

export const CAREER_PHASES = [
  {
    phase: "Month 1", title: "Foundation", color: "#FFD6C2", hours: "8–10 hrs/week",
    goals: ["Arrays, Strings, HashMaps, Two Pointers, Sliding Window", "Polish wildlife & green-school repos", "Proper READMEs for 6 pinned repos", "Add LinkedIn profile"],
  },
  {
    phase: "Month 2", title: "Building", color: "#D4C5F9", hours: "10 hrs/week",
    goals: ["Linked Lists, Stacks, Queues, Trees (Easy–Med)", "Start new showcase project", "Learn Docker basics", "Research Microsoft/Nordeus openings"],
  },
  {
    phase: "Month 3", title: "Deepening", color: "#C2F0DC", hours: "10–12 hrs/week",
    goals: ["Heaps, Binary Search, Graphs BFS/DFS (Medium)", "Read System Design Interview ch. 1–6", "Start applying to target companies", "Mock interview #1"],
  },
  {
    phase: "Month 4", title: "Polish", color: "#C2DEFF", hours: "12+ hrs/week",
    goals: ["Dynamic Programming 1D & 2D, Backtracking, Tries (Medium–Hard)", "Mock interviews weekly", "OOP & Design Patterns review", "Final portfolio polish"],
  },
  {
    phase: "Month 5", title: "Interview Ready", color: "#FFD6C2", hours: "12+ hrs/week",
    goals: ["Bit Manipulation, Advanced DP (LIS/Interval), Greedy, Math & Matrix", "Start Codeforces Div. 2 B/C problems", "Mock interview #4 with feedback", "Read System Design Interview ch. 7–10"],
  },
  {
    phase: "Month 6", title: "Competition Ready", color: "#C2F0DC", hours: "12+ hrs/week",
    goals: ["Advanced Graphs (MST, Eulerian, Bridges), Monotonic Structures, Hard Sprint", "Final Gauntlet (LRU/LFU, Hard mixed patterns)", "Mock interviews #5 & final full-loop simulation", "Finalize job applications; prep for RAF Master's"],
  },
];

export const TARGETS = [
  { company: "Microsoft", icon: "🪟", fit: "C# + .NET — direct match" },
  { company: "Nordeus", icon: "🎮", fit: "Game dev interest, Belgrade-based" },
  { company: "JetBrains", icon: "🛠️", fit: "IDE tooling, Kotlin/C# — applied!" },
  { company: "Google", icon: "🔍", fit: "Long-term target, master's → new grad" },
  { company: "RAF Master's", icon: "🎓", fit: "September — theoretical foundation" },
];

export const TWENTY_MIN_RULE = [
  { step: "0–5 min", action: "Read carefully", detail: "Write: Input? Output? Constraints? Do NOT code yet." },
  { step: "5–10 min", action: "Work examples by hand", detail: "Trace 2–3 small examples. Do you see a pattern?" },
  { step: "10–20 min", action: "Write code from trace", detail: "OK if wrong or incomplete. Try!" },
  { step: "At 20 min", action: "Stuck? → Look up", detail: "Type it out. Comment every line. Rewrite from memory." },
  { step: "Next day", action: "Spaced repetition", detail: "Re-solve every looked-up problem without any help." },
];

export const FOUR_QUESTIONS = [
  { q: "Pattern?", detail: "HashMap? Two Pointers? Sliding Window? Name it." },
  { q: "Time complexity?", detail: "O(n)? O(n²)? O(n log n)? Why exactly?" },
  { q: "Space complexity?", detail: "Did you use extra memory? Was it necessary?" },
  { q: "Can you optimize?", detail: "Reduce space? Do it in one pass? Even better?" },
];

export const LEVEL_TITLES = ["", "Novice Coder", "Array Apprentice", "HashMap Hero", "Pointer Pro", "DSA Master", "Algorithm Wizard", "Code Sage"];
export const XP_THRESHOLDS = [0, 100, 250, 400, 600, 900, 1200, 1600];