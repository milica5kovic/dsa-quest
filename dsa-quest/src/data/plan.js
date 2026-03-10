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