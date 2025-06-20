export const questions = [
  {
    question:
      "What is the time complexity of accessing an element in an array?",
    options: [
      { id: 1, text: "O(1)", isCorrect: true },
      { id: 2, text: "O(n)", isCorrect: false },
      { id: 3, text: "O(log n)", isCorrect: false },
      { id: 4, text: "O(n log n)", isCorrect: false },
    ],
  },
  {
    question: "What is the space complexity of an array?",
    options: [
      { id: 1, text: "O(1)", isCorrect: false },
      { id: 2, text: "O(n)", isCorrect: true },
      { id: 3, text: "O(log n)", isCorrect: false },
      { id: 4, text: "O(n log n)", isCorrect: false },
    ],
  },
  {
    question: "What is the time complexity of searching for an element in a sorted array?",
    options: [
      { id: 1, text: "O(1)", isCorrect: false },
      { id: 2, text: "O(n)", isCorrect: false },
      { id: 3, text: "O(log n)", isCorrect: true },
      { id: 4, text: "O(n log n)", isCorrect: false },
    ],
  },
  {
    question: "What is the time complexity of inserting an element at the end of an array?",
    options: [
      { id: 1, text: "O(1)", isCorrect: true },
      { id: 2, text: "O(n)", isCorrect: false },
      { id: 3, text: "O(log n)", isCorrect: false },
      { id: 4, text: "O(n log n)", isCorrect: false },
    ],
  },
  {
    question: "What is the time complexity of deleting an element from an array?",
    options: [
      { id: 1, text: "O(1)", isCorrect: false },
      { id: 2, text: "O(n)", isCorrect: true },
      { id: 3, text: "O(log n)", isCorrect: false },
      { id: 4, text: "O(n log n)", isCorrect: false },
    ],
  },
  

  {question: "What is the time complexity of merging two sorted arrays?",
    options: [    
      { id: 1, text: "O(1)", isCorrect: false },
      { id: 2, text: "O(n)", isCorrect: false },
      { id: 3, text: "O(n log n)", isCorrect: false },
      { id: 4, text: "O(n + m)", isCorrect: true }, // where n and m are the sizes of the two arrays
    ],
  },  // algorithms
  {
    question: "What is the time complexity of the binary search algorithm?",
    options: [
      { id: 1, text: "O(1)", isCorrect: false },
      { id: 2, text: "O(n)", isCorrect: false },
      { id: 3, text: "O(log n)", isCorrect: true },
      { id: 4, text: "O(n log n)", isCorrect: false },
    ],
  },
  {
    question: "What is the time complexity of the bubble sort algorithm?",
    options: [
      { id: 1, text: "O(1)", isCorrect: false },
      { id: 2, text: "O(n)", isCorrect: false },
      { id: 3, text: "O(n^2)", isCorrect: true },
      { id: 4, text: "O(n log n)", isCorrect: false },
    ],
  },
  {
    question:
      "What is the time complexity of the quicksort algorithm in the average case?",
    options: [
      { id: 1, text: "O(1)", isCorrect: false },
      { id: 2, text: "O(n)", isCorrect: false },
      { id: 3, text: "O(n^2)", isCorrect: false },
      { id: 4, text: "O(n log n)", isCorrect: true },
    ],
  },    
  {
    question: "What is the time complexity of the merge sort algorithm?",
    options: [
      { id: 1, text: "O(1)", isCorrect: false },
      { id: 2, text: "O(n)", isCorrect: false },
      { id: 3, text: "O(n^2)", isCorrect: false },
      { id: 4, text: "O(n log n)", isCorrect: true },
    ],
  },
  {
    question:
      "What is the time complexity of the depth-first search (DFS) algorithm on a graph?",
    options: [
      { id: 1, text: "O(1)", isCorrect: false },
      { id: 2, text: "O(n)", isCorrect: false },
      { id: 3, text: "O(V + E)", isCorrect: true }, // where V is the number of vertices and E is the number of edges
      { id: 4, text: "O(n log n)", isCorrect: false },
    ],
  },  
  {
    question: "What is the time complexity of the breadth-first search (BFS) algorithm on a graph?",
    options: [
      { id: 1, text: "O(1)", isCorrect: false },
      { id: 2, text: "O(n)", isCorrect: false },
      { id: 3, text: "O(V + E)", isCorrect: true }, // where V is the number of vertices and E is the number of edges
      { id: 4, text: "O(n log n)", isCorrect: false },
    ],
  },
];
