## String + Arrays
- Turing 1
- Turing 2
- Valid Paranthesis
- Two Sum
- Typing Time
- Most Repeated Character in a String
- Reverse a String
- Reverse a String Array
- Reverse Only Letters
- Reverse Vowels of a String


## Linked List



## Binary Search Tree

- Binary Tree Preorder Traversal
- Binary Tree Inorder Traversal
- Binary Tree Postorder Traversal

- Maximum Depth of Binary Tree
- Minimum Depth of Binary Tree



## Turing
```
Find the sum of all leaves in a given binary tree.

Example:
    3
  /   \
9     20
      / \
    15  7


function sumOfLeaves(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return root.val;
  return sumOfLeaves(root.left) + sumOfLeaves(root.right);
}
```

```
Given a string S, return the "reversed" string, where all characters that are not alphabets stay at the same index, and all alphabets reverse their positions. Create a function, and create a variable result = '', and return the result.

Example 1:
Input: "ab-cd"
Output: "dc-ba"

Example 2:
Input: "a-bC-dEf=ghlj!!"
Output: "j-lh-gfE=dCba!!"


function reverseAlphabets(S) {
  let result = '';
  let alphabetReversed = '';

  for (let i = 0; i < S.length; i++) {
    if (S[i].match(/[a-z]/i)) {
      alphabetReversed = S[i] + alphabetReversed;
    }
  }

  for (let i = 0; i < S.length; i++) {
    if (S[i].match(/[a-z]/i)) {
      result += alphabetReversed[0];
      alphabetReversed = alphabetReversed.slice(1);
    } else {
      result += S[i];
    }
  }

  return result;
}
```




## Turing Qn2
```
const myFun = (s, t) => {
  
  let char = {}
  
 for (let i = 0; i < s.length; i++) {
   char[s[i]] = char[s[i]] + 1;
 }

  for (let i = 0; i < t.length; i++) {
    if (char[t[i]]) {
      
    } else if (char[t[i]] === 0) || (!char[]) {
      return t[i]
    }
  }
  
}


console.log(myFun("abbdd", "dabadb"))
// console.log(myFun("ae", "aee"))
```

