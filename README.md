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

Analyzing the runtime complexity of my iterative quicksort implementation, the worst-case scenario occurs when the pivot selection is poor. A poor pivot means that one partition contains nearly all the elements while the other is empty or contains only a few elements. This leads to an unbalanced partitioning process, requiring the algorithm to make a large number of comparisons. Using an iterative approach with a stack to manage subarray partitions, each step involves $O(n)$ comparisons to partition the array. In the worst case, where partitions are unbalanced, the algorithm performs $n$ levels of partitioning, resulting in a total complexity of $\Theta(n^2)$. This is consistent with the behavior of traditional recursive quicksort under similar conditions.In contrast, the average case—where partitions are balanced—results in a complexity of $\Theta(n \log n)$, as the array is effectively divided into two equal parts at each level.

The resources I used for this was the lecture slides. https://www.geeksforgeeks.org/iterative-quick-sort/. ChatGPT to get the idea of using a Push pop method. Then using https://www.w3schools.com/jsref/jsref_pop.asp for deeper understanding of push pop.  

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
