import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const topicsData = {
  OS: [
    {
      title: "Process Scheduling",
      subtopics: [
        { name: "Process Introduction", url: "https://example.com/os/1" },
        { name: "CPU Scheduling Algorithms", url: "https://example.com/os/2" },
        { name: "Starvation and Aging", url: "https://example.com/os/3" },
      ],
    },
    {
      title: "Process Synchronization",
      subtopics: [
        { name: "Peterson's Algorithm", url: "https://example.com/os/4" },
        { name: "Semaphores", url: "https://example.com/os/5" },
      ],
    },
  ],
  DSA:[{
  "title": "Arrays & Strings",
  "subtopics": [
    {
      "name": "Traversal in Array",
      "url": "https://www.geeksforgeeks.org/dsa/traversal-in-array/",
      "difficulty": "Basic"
    },
    {
      "name": "Insertion in Array",
      "url": "https://www.geeksforgeeks.org/insertion-in-an-array/",
      "difficulty": "Basic"
    },
    {
      "name": "Deletion from Array",
      "url": "https://www.geeksforgeeks.org/deletion-from-array/",
      "difficulty": "Basic"
    },
    {
      "name": "Prefix Sum Array",
      "url": "https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/",
      "difficulty": "Easy"
    },
    {
      "name": "Kadane's Algorithm (Max Subarray)",
      "url": "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
      "difficulty": "Easy to Medium"
    },
    {
      "name": "Two Pointer Technique",
      "url": "https://www.geeksforgeeks.org/two-pointer-technique/",
      "difficulty": "Medium"
    },
    {
      "name": "Sliding Window Technique",
      "url": "https://www.geeksforgeeks.org/window-sliding-technique/",
      "difficulty": "Medium"
    },
    {
      "name": "Spiral Matrix Traversal",
      "url": "https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/",
      "difficulty": "Medium"
    },
    {
      "name": "In-place Array Operations",
      "url": "https://www.geeksforgeeks.org/in-place-algorithms/",
      "difficulty": "Medium"
    }
  ]
},
{
  "title": "Searching Algorithms",
  "subtopics": [
    {
      "name": "Linear Search",
      "url": "https://www.geeksforgeeks.org/dsa/linear-search/",
      "difficulty": "Basic"
    },
    {
      "name": "Binary Search (Classic)",
      "url": "https://www.geeksforgeeks.org/dsa/binary-search/",
      "difficulty": "Basic"
    },
    {
      "name": "Binary Search on Answer",
      "url": "https://www.geeksforgeeks.org/binary-search-on-answer-technique/",
      "difficulty": "Medium"
    },
    {
      "name": "Ternary Search",
      "url": "https://www.geeksforgeeks.org/ternary-search/",
      "difficulty": "Medium"
    },
    {
      "name": "Exponential Search",
      "url": "https://www.geeksforgeeks.org/exponential-search/",
      "difficulty": "Medium"
    },
    {
      "name": "Jump Search",
      "url": "https://www.geeksforgeeks.org/jump-search/",
      "difficulty": "Medium"
    },
    {
      "name": "Interpolation Search",
      "url": "https://www.geeksforgeeks.org/interpolation-search/",
      "difficulty": "Medium"
    },
    {
      "name": "Fibonacci Search",
      "url": "https://www.geeksforgeeks.org/fibonacci-search/",
      "difficulty": "Medium"
    },
    {
      "name": "Search in Rotated Sorted Array",
      "url": "https://www.geeksforgeeks.org/search-in-rotated-sorted-array/",
      "difficulty": "Medium"
    },
    {
      "name": "Lower Bound / Upper Bound",
      "url": "https://www.geeksforgeeks.org/lower_bound-upper_bound-in-c-stl/",
      "difficulty": "Medium"
    }
  ]
},
{
  "title": "Sorting Algorithms",
  "subtopics": [
    {
      "name": "Bubble Sort",
      "url": "https://www.geeksforgeeks.org/bubble-sort-algorithm/",
      "difficulty": "Basic"
    },
    {
      "name": "Selection Sort",
      "url": "https://www.geeksforgeeks.org/selection-sort/",
      "difficulty": "Basic"
    },
    {
      "name": "Insertion Sort",
      "url": "https://www.geeksforgeeks.org/insertion-sort/",
      "difficulty": "Basic"
    },
    {
      "name": "Merge Sort",
      "url": "https://www.geeksforgeeks.org/dsa/merge-sort/",
      "difficulty": "Medium"
    },
    {
      "name": "Quick Sort",
      "url": "https://www.geeksforgeeks.org/quick-sort/",
      "difficulty": "Medium"
    },
    {
      "name": "Heap Sort",
      "url": "https://www.geeksforgeeks.org/heap-sort/",
      "difficulty": "Medium"
    },
    {
      "name": "Counting Sort",
      "url": "https://www.geeksforgeeks.org/counting-sort/",
      "difficulty": "Medium"
    },
    {
      "name": "Radix Sort",
      "url": "https://www.geeksforgeeks.org/radix-sort/",
      "difficulty": "Medium"
    },
    {
      "name": "Bucket Sort",
      "url": "https://www.geeksforgeeks.org/bucket-sort/",
      "difficulty": "Medium"
    },
    {
      "name": "Shell Sort",
      "url": "https://www.geeksforgeeks.org/shellsort/",
      "difficulty": "Medium"
    },
    {
      "name": "Tim Sort",
      "url": "https://www.geeksforgeeks.org/timsort/",
      "difficulty": "Medium"
    }
  ]
},
{
  "title": "Hashing & Prefix",
  "subtopics": [
    {
      "name": "HashMap / HashSet",
      "url": "https://www.geeksforgeeks.org/java-util-hashmap-in-java-with-examples/",
      "difficulty": "Basic"
    },
    {
      "name": "Frequency Counters",
      "url": "https://www.geeksforgeeks.org/frequency-counter-pattern/",
      "difficulty": "Easy"
    },
    {
      "name": "Prefix Hash",
      "url": "https://www.geeksforgeeks.org/rolling-hash-and-rabin-karp-algorithm-for-pattern-searching/",
      "difficulty": "Medium"
    },
    {
      "name": "Count Subarrays with Given Sum",
      "url": "https://www.geeksforgeeks.org/count-subarrays-with-sum-equal-to-k/",
      "difficulty": "Medium"
    },
    {
      "name": "Group Anagrams",
      "url": "https://www.geeksforgeeks.org/given-a-sequence-of-strings-print-all-anagrams-together/",
      "difficulty": "Medium"
    },
    {
      "name": "Longest Substring Without Repeating Characters",
      "url": "https://www.geeksforgeeks.org/longest-substring-without-repeating-characters/",
      "difficulty": "Medium"
    }
  ]
},
{
  "title": "Stack & Queue",
  "subtopics": [
    {
      "name": "Infix → Postfix Conversion",
      "url": "https://www.geeksforgeeks.org/dsa/convert-infix-expression-to-postfix-expression/",
      "difficulty": "Medium"
    },
    {
      "name": "Balanced Brackets",
      "url": "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/",
      "difficulty": "Easy"
    },
    {
      "name": "Circular Queue / Deque",
      "url": "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/",
      "difficulty": "Medium"
    },
    {
      "name": "Monotonic Stack",
      "url": "https://www.geeksforgeeks.org/dsa/introduction-to-monotonic-stack-2/",
      "difficulty": "Medium"
    },
    {
      "name": "Monotonic Queue",
      "url": "https://www.geeksforgeeks.org/dsa/introduction-to-monotonic-queues/",
      "difficulty": "Medium"
    },
    {
      "name": "Next Greater / Smaller Element",
      "url": "https://www.geeksforgeeks.org/next-greater-element/",
      "difficulty": "Easy to Medium"
    },
    {
      "name": "Implement Stack using Queue / Queue using Stack",
      "url": "https://www.geeksforgeeks.org/implement-stack-using-queue/",
      "difficulty": "Medium"
    },
    {
      "name": "LRU Cache (using DLL + HashMap)",
      "url": "https://www.geeksforgeeks.org/lru-cache-design/",
      "difficulty": "Hard"
    }
  ]
},
{
  "title": "urled List",
  "subtopics": [
    {
      "name": "Singly urled List",
      "url": "https://www.geeksforgeeks.org/data-structures/urled-list/#SinglyurledList",
      "difficulty": "Basic"
    },
    {
      "name": "Doubly urled List",
      "url": "https://www.geeksforgeeks.org/data-structures/urled-list/#DoublyurledList",
      "difficulty": "Basic"
    },
    {
      "name": "Detect Loop (Floyd’s Cycle)",
      "url": "https://www.geeksforgeeks.org/fast-slow-pointers-python-program/",
      "difficulty": "Medium"
    },
    {
      "name": "Reverse urled List",
      "url": "https://www.geeksforgeeks.org/reverse-a-urled-list/",
      "difficulty": "Easy to Medium"
    },
    {
      "name": "Merge Two Sorted Lists",
      "url": "https://www.geeksforgeeks.org/merge-two-sorted-urled-lists/",
      "difficulty": "Medium"
    },
    {
      "name": "Intersection Point of Two Lists",
      "url": "https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-urled-lists/",
      "difficulty": "Medium"
    },
    {
      "name": "Copy List with Random Pointers",
      "url": "https://www.geeksforgeeks.org/clone-urled-list-random-pointer/",
      "difficulty": "Hard"
    }
  ]
},
{
  "title": "Trees (Binary & N-ary)",
  "subtopics": [
    {
      "name": "Traversals (Recursive & Iterative)",
      "url": "https://www.geeksforgeeks.org/dsa/binary-tree-traversal/",
      "difficulty": "Easy–Medium"
    },
    {
      "name": "Level Order / Zigzag Level Order",
      "url": "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
      "difficulty": "Medium"
    },
    {
      "name": "Height, Diameter, Balanced",
      "url": "https://www.geeksforgeeks.org/diameter-of-a-binary-tree/",
      "difficulty": "Medium"
    },
    {
      "name": "Max Path Sum in Tree",
      "url": "https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/",
      "difficulty": "Medium–Hard"
    },
    {
      "name": "LCA (Binary Tree and BST)",
      "url": "https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-tree-set-1/",
      "difficulty": "Medium"
    },
    {
      "name": "Serialize / Deserialize Binary Tree",
      "url": "https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/",
      "difficulty": "Medium–Hard"
    }
  ]
},
{
  "title": "Binary Search Trees (BST)",
  "subtopics": [
    {
      "name": "Insertion in BST",
      "url": "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/",
      "difficulty": "Easy–Medium"
    },
    {
      "name": "Deletion in BST",
      "url": "https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/",
      "difficulty": "Medium"
    },
    {
      "name": "Search Operation in BST",
      "url": "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/",
      "difficulty": "Easy"
    },
    {
      "name": "Validate BST",
      "url": "https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/",
      "difficulty": "Medium"
    },
    {
      "name": "Kth Smallest / Largest Element",
      "url": "https://www.geeksforgeeks.org/kth-smallestlargest-element-in-bsts/",
      "difficulty": "Medium"
    },
    {
      "name": "Inorder Successor / Predecessor",
      "url": "https://www.geeksforgeeks.org/inorder-successor-in-binary-search-tree/",
      "difficulty": "Medium"
    },
    {
      "name": "Convert Sorted Array to BST",
      "url": "https://www.geeksforgeeks.org/sorted-array-to-balanced-bst/",
      "difficulty": "Medium"
    }
  ]
},
{
  "title": "Heaps / Priority Queue",
  "subtopics": [
    {
      "name": "Min-Heap / Max-Heap",
      "url": "https://www.geeksforgeeks.org/min-heap-in-java/",
      "difficulty": "Basic"
    },
    {
      "name": "Heapify, Build Heap",
      "url": "https://www.geeksforgeeks.org/build-heap-from-array/",
      "difficulty": "Medium"
    },
    {
      "name": "Kth Largest Element",
      "url": "https://www.geeksforgeeks.org/kth-largest-element-in-an-array/",
      "difficulty": "Medium"
    },
    {
      "name": "Median in a Stream",
      "url": "https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/",
      "difficulty": "Medium"
    },
    {
      "name": "Merge K Sorted Lists",
      "url": "https://www.geeksforgeeks.org/merge-k-sorted-urled-lists/",
      "difficulty": "Medium"
    },
    {
      "name": "Top K Frequent Elements",
      "url": "https://www.geeksforgeeks.org/top-k-non-repeating-numbers-in-an-array/",
      "difficulty": "Medium"
    }
  ]
},
{
  "title": "Graphs",
  "subtopics": [
    {
      "name": "Representations (Adjacency List/Matrix)",
      "url": "https://www.geeksforgeeks.org/dsa/graph-and-its-representations/",
      "difficulty": "Basic"
    },
    {
      "name": "DFS / BFS (Iterative & Recursive)",
      "url": "https://www.geeksforgeeks.org/dsa/graph-and-its-representations/#BFS-and-DFS-on-Graph",
      "difficulty": "Basic–Medium"
    },
    {
      "name": "Topological Sort",
      "url": "https://www.geeksforgeeks.org/topological-sorting/",
      "difficulty": "Medium"
    },
    {
      "name": "Cycle Detection (Directed/Undirected)",
      "url": "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",
      "difficulty": "Medium"
    },
    {
      "name": "Union-Find (Disjoint Set)",
      "url": "https://www.geeksforgeeks.org/union-find/",
      "difficulty": "Medium"
    },
    {
      "name": "Shortest Path: Dijkstra’s Algorithm",
      "url": "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
      "difficulty": "Medium–Hard"
    },
    {
      "name": "Bellman-Ford Algorithm",
      "url": "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/",
      "difficulty": "Medium–Hard"
    },
    {
      "name": "Floyd-Warshall Algorithm",
      "url": "https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/",
      "difficulty": "Hard"
    },
    {
      "name": "Minimum Spanning Tree: Kruskal",
      "url": "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
      "difficulty": "Medium"
    },
    {
      "name": "Minimum Spanning Tree: Prim",
      "url": "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
      "difficulty": "Medium"
    },
    {
      "name": "Bipartite Check",
      "url": "https://www.geeksforgeeks.org/bipartite-graph/",
      "difficulty": "Medium"
    },
    {
      "name": "Bridges / Articulation Points",
      "url": "https://www.geeksforgeeks.org/bridge-in-a-graph/",
      "difficulty": "Hard"
    }
  ]
},
{
  "title": "Recursion & Backtracking",
  "subtopics": [
    {
      "name": "Subsets / Permutations",
      "url": "https://www.geeksforgeeks.org/backtracking-algorithms-set-2-permutations/",
      "difficulty": "Easy–Medium"
    },
    {
      "name": "Combination Sum",
      "url": "https://www.geeksforgeeks.org/combination-sum/",
      "difficulty": "Medium"
    },
    {
      "name": "N‑Queens Problem",
      "url": "https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/",
      "difficulty": "Medium–Hard"
    },
    {
      "name": "Sudoku Solver",
      "url": "https://www.geeksforgeeks.org/sudoku-backtracking-7/",
      "difficulty": "Medium–Hard"
    },
    {
      "name": "Word Search",
      "url": "https://www.geeksforgeeks.org/word-search-puzzle-in-a-grid-of-characters/",
      "difficulty": "Medium"
    },
    {
      "name": "Backtrack with Pruning",
      "url": "https://www.geeksforgeeks.org/pruning-techniques-in-backtracking/",
      "difficulty": "Medium–Hard"
    },
    {
      "name": "Generate Parentheses",
      "url": "https://www.geeksforgeeks.org/print-all-combinations-of-balanced-parentheses/",
      "difficulty": "Medium"
    }
  ]
},
{
  "title": "Dynamic Programming (DP)",
  "subtopics": [
    {
      "name": "0/1 Knapsack",
      "url": "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",
      "difficulty": "Medium"
    },
    {
      "name": "Unbounded Knapsack",
      "url": "https://www.geeksforgeeks.org/unbounded-knapsack-repetition-items-allowed/",
      "difficulty": "Medium"
    },
    {
      "name": "Longest Increasing Subsequence (LIS)",
      "url": "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/",
      "difficulty": "Medium"
    },
    {
      "name": "Longest Common Subsequence (LCS)",
      "url": "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/",
      "difficulty": "Medium"
    },
    {
      "name": "Edit Distance",
      "url": "https://www.geeksforgeeks.org/edit-distance-dp-5/",
      "difficulty": "Medium–Hard"
    },
    {
      "name": "Matrix DP (Grid Travel)",
      "url": "https://www.geeksforgeeks.org/dynamic-programming-subset-2/ #NOTE",
      "difficulty": "Medium"
    },
    {
      "name": "DP on Trees, Strings, Subsets, Partitions",
      "url": "https://www.geeksforgeeks.org/tag/dynamic-programming/",
      "difficulty": "Medium–Hard"
    },
    {
      "name": "Bitmask DP",
      "url": "https://www.geeksforgeeks.org/bitmask-dynamic-programming-set-1-count-ways/ ",
      "difficulty": "Hard"
    }
  ]
},
{
  "title": "Greedy Algorithms",
  "subtopics": [
    {
      "name": "Activity Selection",
      "url": "https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/",
      "difficulty": "Easy–Medium"
    },
    {
      "name": "Job Sequencing",
      "url": "https://www.geeksforgeeks.org/job-sequencing-problem/",
      "difficulty": "Medium"
    },
    {
      "name": "Gas Station Problem",
      "url": "https://www.geeksforgeeks.org/gas-station-problem/",
      "difficulty": "Medium"
    },
    {
      "name": "Jump Game",
      "url": "https://www.geeksforgeeks.org/jump-game/",
      "difficulty": "Easy–Medium"
    },
    {
      "name": "Interval Scheduling",
      "url": "https://www.geeksforgeeks.org/interval-scheduling-in-greedy-algorithm/",
      "difficulty": "Medium"
    },
    {
      "name": "Huffman Encoding",
      "url": "https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/",
      "difficulty": "Medium–Hard"
    },
    {
      "name": "Fractional Knapsack",
      "url": "https://www.geeksforgeeks.org/fractional-knapsack-problem/",
      "difficulty": "Medium"
    }
  ]
},
{
  "title": "Tries & String Algorithms",
  "subtopics": [
    {
      "name": "Trie (Prefix Tree) Insert/Search",
      "url": "https://www.geeksforgeeks.org/trie-insert-and-search/",
      "difficulty": "Medium"
    },
    {
      "name": "Auto-complete / Word Dictionary",
      "url": "https://www.geeksforgeeks.org/auto-complete-feature-intrigrated-with-trie/",
      "difficulty": "Medium"
    },
    {
      "name": "Longest Prefix Match",
      "url": "https://www.geeksforgeeks.org/longest-prefix-matching-set-1-introduction/",
      "difficulty": "Medium"
    },
    {
      "name": "Suffix Trie / Array",
      "url": "https://www.geeksforgeeks.org/suffix-tree-introduction-implementation-application/",
      "difficulty": "Hard"
    },
    {
      "name": "Rabin-Karp Algorithm",
      "url": "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
      "difficulty": "Medium"
    },
    {
      "name": "KMP Algorithm",
      "url": "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/",
      "difficulty": "Medium"
    },
    {
      "name": "Z Algorithm",
      "url": "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/",
      "difficulty": "Medium"
    }
  ]
},
{
  "title": "Bit Manipulation",
  "subtopics": [
    {
      "name": "Bitwise Operators",
      "url": "https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/",
      "difficulty": "Basic"
    },
    {
      "name": "Set/Unset/Toggle Bits",
      "url": "https://www.geeksforgeeks.org/setting-and-resetting-bits-in-cc/",
      "difficulty": "Easy"
    },
    {
      "name": "Check Power of 2 / Odd‑Even",
      "url": "https://www.geeksforgeeks.org/check-if-given-number-is-power-of-2/",
      "difficulty": "Easy"
    },
    {
      "name": "XOR Properties",
      "url": "https://www.geeksforgeeks.org/properties-of-xor-operation/",
      "difficulty": "Easy–Medium"
    },
    {
      "name": "Count Set Bits",
      "url": "https://www.geeksforgeeks.org/count-set-bits-in-an-integer/",
      "difficulty": "Easy–Medium"
    },
    {
      "name": "Subset Generation via Bits",
      "url": "https://www.geeksforgeeks.org/subset-generation-using-bit-manipulation/",
      "difficulty": "Medium"
    },
    {
      "name": "Bitmask DP",
      "url": "https://www.geeksforgeeks.org/bitmask-dynamic-programming-set-1-count-ways/",
      "difficulty": "Hard"
    }
  ]
}
],



  DBMS: [
    {
      title: "Transactions",
      subtopics: [
        { name: "ACID", url: "https://example.com/dbms/1" },
        { name: "Concurrency Control", url: "https://example.com/dbms/2" },
      ],
    },
    {
      title: "Indexing",
      subtopics: [
        { name: "B-Trees", url: "https://example.com/dbms/3" },
        { name: "Hash Index", url: "https://example.com/dbms/4" },
      ],
    },
  ],
};

const ImportantTopics = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [expandedTopicIndex, setExpandedTopicIndex] = useState(null);

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setExpandedTopicIndex(null);
  };

  const handleTopicClick = (index) => {
    setExpandedTopicIndex(expandedTopicIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-10 font-mono drop-shadow-glow">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 border-b border-green-500 pb-4 drop-shadow-glow"
      >
        💻 Learn Smart: Important Computer Science Topics
      </motion.h1>

      <div className="max-w-2xl mx-auto">
        <motion.select
          onChange={handleSubjectChange}
          defaultValue=""
          className="w-full bg-green-900 text-green-200 border border-green-500 p-3 rounded mb-8 shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <option value="" disabled>
            🔍 Select a Subject
          </option>
          {Object.keys(topicsData).map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </motion.select>

        <AnimatePresence>
          {selectedSubject &&
            topicsData[selectedSubject].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <div
                  onClick={() => handleTopicClick(index)}
                  className="cursor-pointer bg-green-800 hover:bg-green-700 px-4 py-3 rounded-lg text-xl font-semibold transition-all duration-200 shadow-md"
                >
                  📘 {topic.title}
                </div>

                <AnimatePresence>
                  {expandedTopicIndex === index && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="ml-6 mt-2 space-y-2 overflow-hidden"
                    >
                      {topic.subtopics.map((sub, subIdx) => (
                        <li
                          key={subIdx}
                          className="flex justify-between items-center bg-green-900 px-4 py-2 rounded text-green-300 shadow"
                        >
                          <span>🔸 {sub.name}</span>
                          <a
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-500 text-black font-semibold py-1 px-3 rounded shadow"
                          >
                            Learn
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <footer className="text-center mt-16 border-t border-green-500 pt-6">
        <p className="text-green-500">Made with 💚 for passionate learners.</p>
      </footer>
    </div>
  );
};

export default ImportantTopics;