# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complexity of this implementation is $O(n!), both best and worts cases have this complexity due to the nature of the algorithm, as all permutations are calculated regardless of the input list (whether or not the list is sorted or not). We know that for a list of size $n$, there are $n!$ permutations, and it takes $O(n)$ time to check these permutations to see if one of them is sorted . This leads to an $O(n! * n)$ complexity. If we were to check random permutations instead of calculating all permutations systematicaly, we would have an interesting scenario. Worst case the algorithm would still have $O(n! * n)$ complexity, however we may calculate the sorted permutation imediatley which would lead to a time complexity of $O(n)$.

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”

Help: https://stackoverflow.com/questions/3953244/example-of-on 
