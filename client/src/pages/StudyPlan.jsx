import React, { useState } from 'react';

const dsaTopics = [
  {
    "topic": "Arrays",
    "subtopics": [
      { "title": "One-dimensional Arrays" },
      { "title": "Two-dimensional Arrays" },
      { "title": "Sliding Window" },
      { "title": "Prefix Sum" },
      { "title": "Subarrays" }
    ]
  },
  {
    "topic": "Strings",
    "subtopics": [
      { "title": "Pattern Matching" },
      { "title": "Anagram" },
      { "title": "Palindrome" },
      { "title": "Z-Algorithm" },
      { "title": "KMP Algorithm" },
      { "title": "Rabin-Karp" },
      { "title": "Trie" }
    ]
  },
  {
    "topic": "Linked Lists",
    "subtopics": [
      { "title": "Singly Linked List" },
      { "title": "Doubly Linked List" },
      { "title": "Circular Linked List" },
      { "title": "Reverse a List" },
      { "title": "Detect Loop" },
      { "title": "Merge Two Lists" }
    ]
  },
  {
    "topic": "Stacks",
    "subtopics": [
      { "title": "Infix to Postfix" },
      { "title": "Next Greater Element" },
      { "title": "Balanced Parentheses" },
      { "title": "Monotonic Stack" }
    ]
  },
  {
    "topic": "Queues",
    "subtopics": [
      { "title": "Simple Queue" },
      { "title": "Circular Queue" },
      { "title": "Deque" },
      { "title": "Priority Queue" },
      { "title": "Sliding Window Maximum" }
    ]
  },
  {
    "topic": "Hashing",
    "subtopics": [
      { "title": "HashMap" },
      { "title": "HashSet" },
      { "title": "Frequency Count" },
      { "title": "Collision Handling" },
      { "title": "Custom Hash Functions" }
    ]
  },
  {
    "topic": "Recursion & Backtracking",
    "subtopics": [
      { "title": "Basic Recursion" },
      { "title": "N-Queens Problem" },
      { "title": "Sudoku Solver" },
      { "title": "Subsets Generation" },
      { "title": "Permutations" }
    ]
  },
  {
    "topic": "Divide and Conquer",
    "subtopics": [
      { "title": "Merge Sort" },
      { "title": "Quick Sort" },
      { "title": "Binary Search" }
    ]
  },
  {
    "topic": "Sorting",
    "subtopics": [
      { "title": "Bubble Sort" },
      { "title": "Selection Sort" },
      { "title": "Insertion Sort" },
      { "title": "Merge Sort" },
      { "title": "Quick Sort" },
      { "title": "Counting Sort" },
      { "title": "Radix Sort" },
      { "title": "Bucket Sort" },
      { "title": "Heap Sort" },
      { "title": "Shell Sort" },
      { "title": "Tim Sort" }
    ]
  },
  {
    "topic": "Searching",
    "subtopics": [
      { "title": "Linear Search" },
      { "title": "Binary Search" },
      { "title": "Binary Search on Answer" },
      { "title": "Ternary Search" },
      { "title": "Jump Search" },
      { "title": "Exponential Search" },
      { "title": "Interpolation Search" }
    ]
  },
  {
    "topic": "Two Pointers",
    "subtopics": [
      { "title": "Pair Sum" },
      { "title": "Triplet Sum" },
      { "title": "Dutch National Flag" },
      { "title": "Partition Arrays" }
    ]
  },
  {
    "topic": "Sliding Window",
    "subtopics": [
      { "title": "Maximum Sum Subarray" },
      { "title": "Longest Substring" },
      { "title": "Minimum Size Subarray Sum" }
    ]
  },
  {
    "topic": "Bit Manipulation",
    "subtopics": [
      { "title": "XOR Basics" },
      { "title": "Set/Clear/Toggle Bits" },
      { "title": "Power of Two" },
      { "title": "Count Set Bits" },
      { "title": "Bit Masking" }
    ]
  },
  {
    "topic": "Greedy Algorithms",
    "subtopics": [
      { "title": "Activity Selection" },
      { "title": "Huffman Coding" },
      { "title": "Fractional Knapsack" },
      { "title": "Job Sequencing" }
    ]
  },
  {
    "topic": "Dynamic Programming",
    "subtopics": [
      { "title": "0/1 Knapsack" },
      { "title": "Longest Increasing Subsequence" },
      { "title": "Longest Common Subsequence" },
      { "title": "Matrix Chain Multiplication" },
      { "title": "Coin Change" },
      { "title": "DP on Trees" },
      { "title": "DP on Grid" }
    ]
  },
  {
    "topic": "Graphs",
    "subtopics": [
      { "title": "Graph Representation" },
      { "title": "DFS" },
      { "title": "BFS" },
      { "title": "Topological Sort" },
      { "title": "Dijkstra's Algorithm" },
      { "title": "Kruskal's Algorithm" },
      { "title": "Prim's Algorithm" },
      { "title": "Bellman-Ford" },
      { "title": "Floyd-Warshall" }
    ]
  },
  {
    "topic": "Trees",
    "subtopics": [
      { "title": "Binary Tree" },
      { "title": "Binary Search Tree" },
      { "title": "AVL Tree" },
      { "title": "Segment Tree" },
      { "title": "Fenwick Tree" },
      { "title": "Trie" }
    ]
  },
  {
    "topic": "Heaps",
    "subtopics": [
      { "title": "Min Heap" },
      { "title": "Max Heap" },
      { "title": "Heapify" },
      { "title": "Median of Stream" }
    ]
  },
  {
    "topic": "Disjoint Set",
    "subtopics": [
      { "title": "Union by Rank" },
      { "title": "Path Compression" },
      { "title": "Cycle Detection" }
    ]
  },
  {
    "topic": "Tries",
    "subtopics": [
      { "title": "Insert" },
      { "title": "Search" },
      { "title": "Delete" },
      { "title": "Auto-complete" }
    ]
  },
  {
    "topic": "Segment Tree",
    "subtopics": [
      { "title": "Range Queries" },
      { "title": "Lazy Propagation" }
    ]
  },
  {
    "topic": "Fenwick Tree",
    "subtopics": [
      { "title": "Point Updates" },
      { "title": "Range Sum Queries" }
    ]
  },
  {
    "topic": "Matrix",
    "subtopics": [
      { "title": "Matrix Rotation" },
      { "title": "Spiral Traversal" },
      { "title": "Search in Matrix" },
      { "title": "DP on Matrix" }
    ]
  },
  {
    "topic": "Monotonic Stack/Queue",
    "subtopics": [
      { "title": "Largest Rectangle in Histogram" },
      { "title": "Stock Span" },
      { "title": "Sliding Window Maximum" }
    ]
  },
  {
    "topic": "Topological Sorting",
    "subtopics": [
      { "title": "Kahn's Algorithm" },
      { "title": "DFS Based Topo Sort" }
    ]
  },
  {
    "topic": "Shortest Path Algorithms",
    "subtopics": [
      { "title": "Dijkstra" },
      { "title": "Bellman-Ford" },
      { "title": "Floyd-Warshall" },
      { "title": "A* Algorithm" }
    ]
  },
  {
    "topic": "Minimum Spanning Tree",
    "subtopics": [
      { "title": "Kruskal's Algorithm" },
      { "title": "Prim's Algorithm" }
    ]
  },
  {
    "topic": "Number Theory",
    "subtopics": [
      { "title": "GCD & LCM" },
      { "title": "Sieve of Eratosthenes" },
      { "title": "Modular Arithmetic" },
      { "title": "Fermat's Theorem" }
    ]
  },
  {
    "topic": "Game Theory",
    "subtopics": [
      { "title": "Minimax Algorithm" },
      { "title": "Grundy Numbers" }
    ]
  },
  {
    "topic": "Geometry",
    "subtopics": [
      { "title": "Convex Hull" },
      { "title": "Line Sweep" },
      { "title": "Closest Pair" },
      { "title": "Polygon Area" }
    ]
  },
  {
    "topic": "Advanced Data Structures",
    "subtopics": [
      { "title": "AVL Tree" },
      { "title": "Red-Black Tree" },
      { "title": "Splay Tree" },
      { "title": "Treap" }
    ]
  },
  {
    "topic": "Suffix Array / Tree",
    "subtopics": [
      { "title": "Suffix Array" },
      { "title": "Longest Repeated Substring" },
      { "title": "LCP Array" }
    ]
  },
  {
    "topic": "Bitmasking with DP",
    "subtopics": [
      { "title": "Travelling Salesman Problem (TSP)" },
      { "title": "Subset Sum with Bitmask" },
      { "title": "Counting Paths with Bitmask" }
    ]
  },
  {
    "topic": "Memoization",
    "subtopics": [
      { "title": "Top-down DP" }
    ]
  }
];

const TreeNode = ({ topic, isExpanded, onToggle }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="mb-4">
      {/* Main Topic */}
      <div
        className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
          hovered ? 'bg-green-500 text-black' : 'bg-black border-2 border-green-400 text-green-400'
        }`}
        onClick={() => onToggle(topic.topic)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="font-bold text-lg">{topic.topic}</span>
        <span className="ml-auto text-xl">
          {isExpanded ? '−' : '+'}
        </span>
      </div>

      {/* Subtopics */}
      {isExpanded && (
        <div className="ml-6 mt-2 space-y-2">
          {topic.subtopics.map((subtopic, index) => (
            <div
              key={index}
              className="flex items-center p-2 rounded border border-green-400 bg-black text-green-300 hover:bg-green-400 hover:text-black transition-all duration-200"
            >
              <span className="text-sm">• {subtopic.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const StudyPlan = () => {
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (topicName) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicName]: !prev[topicName]
    }));
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-400 mb-4 drop-shadow-glow">
            🌳 DSA Study Tree
          </h1>
          <p className="text-green-300 text-lg">
            Click on any topic to expand and see subtopics
          </p>
        </div>

        <div className="space-y-4">
          {dsaTopics.map((topic) => (
            <TreeNode
              key={topic.topic}
              topic={topic}
              isExpanded={expandedTopics[topic.topic]}
              onToggle={toggleTopic}
            />
          ))}
        </div>

        <div className="text-center mt-8 text-green-300">
          <p>📚 {dsaTopics.length} Topics • 200+ Subtopics</p>
          <p className="text-sm mt-2">Follow the order for optimal learning progression</p>
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;