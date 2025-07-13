import React, { useState } from "react";

const dsaTopics = [
  {
    "topic": "Arrays",
    "subtopics": [
      { "title": "One-dimensional Arrays", "link": "https://example.com/1d-array" },
      { "title": "Two-dimensional Arrays", "link": "https://example.com/2d-array" },
      { "title": "Sliding Window", "link": "https://example.com/sliding-window" },
      { "title": "Prefix Sum", "link": "https://example.com/prefix-sum" },
      { "title": "Subarrays", "link": "https://example.com/subarrays" }
    ]
  },
    {
    "topic": "Sorting",
    "subtopics": [
      { "title": "Bubble Sort", "link": "https://example.com/bubble-sort" },
      { "title": "Selection Sort", "link": "https://example.com/selection-sort" },
      { "title": "Insertion Sort", "link": "https://example.com/insertion-sort" },
      { "title": "Merge Sort", "link": "https://example.com/merge-sort" },
      { "title": "Quick Sort", "link": "https://example.com/quick-sort" },
      { "title": "Counting Sort", "link": "https://example.com/counting-sort" },
      { "title": "Radix Sort", "link": "https://example.com/radix-sort" },
      { "title": "Bucket Sort", "link": "https://example.com/bucket-sort" },
      { "title": "Heap Sort", "link": "https://example.com/heap-sort" },
      { "title": "Shell Sort", "link": "https://example.com/shell-sort" },
      { "title": "Tim Sort", "link": "https://example.com/tim-sort" }
    ]
  },
  {
    "topic": "Searching",
    "subtopics": [
      { "title": "Linear Search", "link": "https://example.com/linear-search" },
      { "title": "Binary Search", "link": "https://example.com/binary-search" },
      { "title": "Binary Search on Answer", "link": "https://example.com/binary-search-answer" },
      { "title": "Ternary Search", "link": "https://example.com/ternary-search" },
      { "title": "Jump Search", "link": "https://example.com/jump-search" },
      { "title": "Exponential Search", "link": "https://example.com/exponential-search" },
      { "title": "Interpolation Search", "link": "https://example.com/interpolation-search" }
    ]
  },
  {
    "topic": "Strings",
    "subtopics": [
      { "title": "Pattern Matching", "link": "https://example.com/pattern-matching" },
      { "title": "Anagram", "link": "https://example.com/anagram" },
      { "title": "Palindrome", "link": "https://example.com/palindrome" },
      { "title": "Z-Algorithm", "link": "https://example.com/z-algorithm" },
      { "title": "KMP Algorithm", "link": "https://example.com/kmp" },
      { "title": "Rabin-Karp", "link": "https://example.com/rabin-karp" }
    ]
  },
  {
    "topic": "Linked Lists",
    "subtopics": [
      { "title": "Singly Linked List", "link": "https://example.com/singly" },
      { "title": "Doubly Linked List", "link": "https://example.com/doubly" },
      { "title": "Circular Linked List", "link": "https://example.com/circular" },
      { "title": "Reverse a List", "link": "https://example.com/reverse" },
      { "title": "Detect Loop", "link": "https://example.com/loop-detection" },
      { "title": "Merge Two Lists", "link": "https://example.com/merge-lists" }
    ]
  },
  {
    "topic": "Stacks",
    "subtopics": [
      { "title": "Infix to Postfix", "link": "https://example.com/infix-postfix" },
      { "title": "Next Greater Element", "link": "https://example.com/next-greater" },
      { "title": "Balanced Parentheses", "link": "https://example.com/balanced-parentheses" },
      { "title": "Monotonic Stack", "link": "https://example.com/monotonic-stack" }
    ]
  },
  {
    "topic": "Queues",
    "subtopics": [
      { "title": "Simple Queue", "link": "https://example.com/queue" },
      { "title": "Circular Queue", "link": "https://example.com/circular-queue" },
      { "title": "Deque", "link": "https://example.com/deque" },
      { "title": "Priority Queue", "link": "https://example.com/priority-queue" },
      { "title": "Sliding Window Maximum", "link": "https://example.com/sliding-window-max" }
    ]
  },
  {
    "topic": "Hashing",
    "subtopics": [
      { "title": "HashMap", "link": "https://example.com/hashmap" },
      { "title": "HashSet", "link": "https://example.com/hashset" },
      { "title": "Frequency Count", "link": "https://example.com/frequency" },
      { "title": "Collision Handling", "link": "https://example.com/collision" }
    ]
  },
  {
    "topic": "Recursion & Backtracking",
    "subtopics": [
      { "title": "Basic Recursion", "link": "https://example.com/recursion" },
      { "title": "N-Queens Problem", "link": "https://example.com/n-queens" },
      { "title": "Sudoku Solver", "link": "https://example.com/sudoku" },
      { "title": "Subsets Generation", "link": "https://example.com/subsets" },
      { "title": "Permutations", "link": "https://example.com/permutations" }
    ]
  },
  {
    "topic": "Divide and Conquer",
    "subtopics": [
      { "title": "Merge Sort", "link": "https://example.com/merge-sort" },
      { "title": "Quick Sort", "link": "https://example.com/quick-sort" },
      { "title": "Binary Search", "link": "https://example.com/binary-search" }
    ]
  },
  {
    "topic": "Sorting Algorithms",
    "subtopics": [
      { "text": "Bubble Sort", "link": "https://example.com/q41" },
      { "text": "Selection Sort", "link": "https://example.com/q42" },
      { "text": "Insertion Sort", "link": "https://example.com/q43" },
      { "text": "Merge Sort", "link": "https://example.com/q44" },
      { "text": "Quick Sort", "link": "https://example.com/q45" },
      { "text": "Counting Sort", "link": "https://example.com/q46" },
      { "text": "Radix Sort", "link": "https://example.com/q47" },
      { "text": "Bucket Sort", "link": "https://example.com/q48" },
      { "text": "Heap Sort", "link": "https://example.com/q49" },
      { "text": "Shell Sort", "link": "https://example.com/q50" },
      { "text": "Tim Sort", "link": "https://example.com/q51" }
    ]
  },
  {
    "topic": "Searching Algorithms",
    "subtopics": [
       { "text": "Linear Search", "link": "https://example.com/q52" },
      { "text": "Binary Search", "link": "https://example.com/q53" },
      { "text": "Binary Search on Answer", "link": "https://example.com/q54" },
      { "text": "Ternary Search", "link": "https://example.com/q55" },
      { "text": "Jump Search", "link": "https://example.com/q56" },
      { "text": "Exponential Search", "link": "https://example.com/q57" },
      { "text": "Interpolation Search", "link": "https://example.com/q58" }]
  },
  {
    "topic": "Graphs",
    "subtopics": [
      { "title": "Graph Representation", "link": "https://example.com/graph-rep" },
      { "title": "DFS & BFS", "link": "https://example.com/dfs-bfs" },
      { "title": "Topological Sort", "link": "https://example.com/topo-sort" },
      { "title": "Dijkstra's Algorithm", "link": "https://example.com/dijkstra" },
      { "title": "Kruskal's Algorithm", "link": "https://example.com/kruskal" }
    ]
  },
  {
    "topic": "Trees",
    "subtopics": [
      { "title": "Binary Tree", "link": "https://example.com/binary-tree" },
      { "title": "Binary Search Tree", "link": "https://example.com/bst" },
      { "title": "AVL Tree", "link": "https://example.com/avl" },
      { "title": "Segment Tree", "link": "https://example.com/segment-tree" },
      { "title": "Trie", "link": "https://example.com/trie" }
    ]
  },
  {
    "topic": "Dynamic Programming",
    "subtopics": [
      { "title": "0/1 Knapsack", "link": "https://example.com/knapsack" },
      { "title": "Longest Increasing Subsequence", "link": "https://example.com/lis" },
      { "title": "Longest Common Subsequence", "link": "https://example.com/lcs" },
      { "title": "Matrix Chain Multiplication", "link": "https://example.com/mcm" },
      { "title": "Coin Change", "link": "https://example.com/coin-change" }
    ]
  },
  {
    "topic": "Greedy Algorithms",
    "subtopics": [
      { "title": "Activity Selection", "link": "https://example.com/activity-selection" },
      { "title": "Huffman Coding", "link": "https://example.com/huffman" },
      { "title": "Fractional Knapsack", "link": "https://example.com/fractional-knapsack" },
      { "title": "Job Sequencing", "link": "https://example.com/job-sequencing" }
    ]
  },
  {
    "topic": "Bit Manipulation",
    "subtopics": [
      { "title": "XOR Basics", "link": "https://example.com/xor" },
      { "title": "Set/Clear/Toggle Bits", "link": "https://example.com/bit-ops" },
      { "title": "Power of Two", "link": "https://example.com/power-of-two" },
      { "title": "Count Set Bits", "link": "https://example.com/count-bits" }
    ]
  },
  {
    "topic": "Heaps",
    "subtopics": [
      { "title": "Min Heap", "link": "https://example.com/min-heap" },
      { "title": "Max Heap", "link": "https://example.com/max-heap" },
      { "title": "Heapify", "link": "https://example.com/heapify" },
      { "title": "Median of Stream", "link": "https://example.com/median-stream" }
    ]
  },
  {
    "topic": "Disjoint Set",
    "subtopics": [
      { "title": "Union by Rank", "link": "https://example.com/union-rank" },
      { "title": "Path Compression", "link": "https://example.com/path-compression" },
      { "title": "Cycle Detection", "link": "https://example.com/cycle-detection" }
    ]
  },
  {
    "topic": "Number Theory",
    "subtopics": [
      { "title": "GCD & LCM", "link": "https://example.com/gcd-lcm" },
      { "title": "Sieve of Eratosthenes", "link": "https://example.com/sieve" },
      { "title": "Modular Exponentiation", "link": "https://example.com/mod-exp" },
      { "title": "Fermat's Theorem", "link": "https://example.com/fermat" }
    ]
  }
]

//  {
//    topic: "Arrays",
//    subtopics: [
//      { title: "Introduction to Arrays", link: "https://example.com/arrays-intro" },
//      { title: "Array Operations", link: "https://example.com/array-ops" },
//    ],
//  },
//  {
//    topic: "Linked Lists",
//    subtopics: [
//      { title: "Singly Linked List", link: "https://example.com/sll" },
//      { title: "Doubly Linked List", link: "https://example.com/dll" },
//    ],
//  },
//  {
//    topic: "Trees",
//    subtopics: [
//      { title: "Binary Trees", link: "https://example.com/trees-binary" },
//      { title: "Tree Traversal", link: "https://example.com/tree-traversal" },
//    ],
//  },
//  {
//    topic: "Graphs",
//    subtopics: [
//      { title: "Graph Representation", link: "https://example.com/graph-rep" },
//      { title: "DFS & BFS", link: "https://example.com/dfs-bfs" },
//    ],
//  },
//];

const DSANotes = () => {
  const [openTopic, setOpenTopic] = useState(null);

  const toggleDropdown = (topic) => {
    setOpenTopic((prev) => (prev === topic ? null : topic));
  };

  return (
    <div className="min-h-screen bg-black text-green-400 px-6 py-10 font-mono">
      <h1 className="text-4xl font-bold mb-10 text-center drop-shadow-glow ">
        📘 DSA Notes
      </h1>

      <div className="max-w-2xl mx-auto border border-green-500 rounded-xl p-6 bg-black shadow-lg hover:shadow-[0_0_20px_#00ff88] transition-all">
        {dsaTopics.map((item, idx) => (
          <div
            key={idx}
            style={{ animationDelay: `${idx * 0.2}s` }}
            className="mb-4 animate-slide-down opacity-0 animation-fill-forwards"
          >
            <button
              onClick={() => toggleDropdown(item.topic)}
              className="w-full text-left px-4 py-2 rounded bg-green-900 bg-opacity-20 hover:bg-green-800 transition duration-300 font-semibold"
            >
              {item.topic}
            </button>

            {openTopic === item.topic && (
              <ul className="pl-6 mt-2 space-y-1">
                {item.subtopics.map((sub, i) => (
                  <li key={i}>
                    <a
                      href={sub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-300 hover:underline hover:text-green-100"
                    >
                      ▸ {sub.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .neon-text {
          text-shadow:
            0 0 5px #00ff88,
            0 0 10px #00ff88,
            0 0 20px #00ff88,
            0 0 40px #00ff88;
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slideDown 0.6s ease forwards;
        }

        .animation-fill-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default DSANotes;
