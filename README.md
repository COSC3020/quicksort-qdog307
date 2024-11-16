# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

When looking at the run time analysis and the worst case sceanrio, in a quicksort it means that the pivot was a bad selction and one subarray has significantly more elements than the otehr sub array. To get away from recursive I went with the idea of a push and pop method. With a quicksort it will be a O(n) comparison. Since there are two to partions each step is O(n) then it would be a time complexity of O(n^2) for the worst case. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
