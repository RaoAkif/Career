## Tech Stack Interview Questions

### HTML & CSS

1.	Describe the difference between a cookie, sessionStorage and localStorage.

<details>
  <summary>See Answer</summary>
  OK, LocalStorage as it's called it's local storage for your browsers, it can save up to 10MB, SessionStorage does the same, but as it's name saying, it's session based and will be deleted after closing your browser, also can save less than LocalStorage, like up to 5MB, but Cookies are very tiny data storing in your browser, that can save up 4KB and can be accessed through server or browser both.  <br> <br>
  
  ![cI5kT](https://user-images.githubusercontent.com/61361037/194374794-d80be0ed-46d7-430c-bb61-b6f26d4423f7.jpg)
  
</details>

2.	Describe the difference between `<script>, <script async> and <script defer>`.

<details>
  <summary>See Answer</summary>
  
  [Watch Video](https://www.youtube.com/watch?v=cCrfL84DkEk) <br>
  [Now Copy & Rephrase Answer](https://thisthat.dev/script-async-vs-script-defer/#:~:text=Differences,and%20resume%20parsing%20the%20document.&text=The%20defer%20script%2C%20on%20the,parser%20has%20completed%20its%20job.)
  
</details>

3.	Why is it generally a good idea to position CSS `<link>s between <head></head> and JS <script>s just before </body>?` Do you know any exceptions?

<details>
  <summary>See Answer</summary>
  
  The css files are placed in the "head" so that they load and the page is seen as it should be.
  The Javascript files are placed before closing the "body", so that they enhance their function once the entire page is loaded.
  
</details>

4.	What is progressive rendering?

<details>
  <summary>See Answer</summary>
  
  Progressive Rendering (aka Progressive Server Side Rendering) is a technique in which once you render the critical content on the server, you start streaming it to the client without waiting for non-critical content. You then stream the non-critical content later once it's rendered on the server.
  
</details>

5.	What is CSS selector specificity and how does it work?

<details>
  <summary>See Answer</summary>
  
  Specificity is the algorithm used by browsers to determine the CSS declaration that is the most relevant to an element, which in turn, determines the property value to apply to the element. The specificity algorithm calculates the weight of a CSS selector to determine which rule from competing CSS declarations gets applied to an element.
  
</details>

6.	What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?

<details>
  <summary>See Answer</summary>
  
  CSS resets aim to remove all built-in browser styling. Standard elements like h1 - h6, p, strong, em end up looking exactly alike, having no decoration at all. You're then supposed to add all decoration yourself.
  Normalize.css aims to make built-in browser styling consistent across browsers. Elements like h1 - h6 will appear bold, larger et cetera in a consistent way across browsers. You're then supposed to add only the difference in decoration your design needs.

</details>

7.	Describe z-index and how stacking context is formed.

<details>
  <summary>See Answer</summary>
  
  A stacking context is created when an element is positioned and assigned a z-index value. z-index is a CSS property that allows you to position elements in layers on top of one another.
  The parent has a z-index of 2 and the child element also has a z-index of 2 . So both create a stacking context. The z-index of elements inside of a stacking context are always relative to the parent's current order in its own stacking context.
  
</details>

8.	What are the various clearing techniques and which is appropriate for what context?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

9.	How would you approach fixing browser-specific styling issues?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

10.	What are the different ways to visually hide content (and make it available only for screen readers)?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

11.	Have you ever used a grid system, and if so, what do you prefer?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

12.	How do you implement media queries or mobile specific layouts/CSS?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

13.	What are the advantages/disadvantages of using CSS preprocessors?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

14.	Describe pseudo-elements and discuss what they are used for.

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

15.	Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

16.	What is the CSS display property and can you give a few examples of its use?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

17.	What's the difference between a relative, fixed, absolute and statically positioned element?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

18.	Have you played around with the new CSS Flexbox or Grid specs? Could you explain them to me?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

19.	Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

20.	Have you ever worked with retina graphics? If so, when and what techniques did you use?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

21.	What is progressive enhancement?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

22.	What are the differences between vector graphics and raster (bitmap) graphics?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

23.	What is semantic HTML?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

24.	What is accessibility? How do you make your web application the most accessible?

<details>
  <summary>See Answer</summary>
  
  ..........
  
</details>

------------------

### JavaScript
1. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
2. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?
3. What is NaN? What is its type? How can you reliably test if a value is equal to NaN?
4. What is a ???closure??? in JavaScript? Provide an example.
5. How do you clone an object?
6. How do you add an element at the begining of an array? How do you add one at the end?
7. What is the difference between undefined and not defined in JavaScript?
8. How do you check if an object is an array or not?
9. What is function hoisting in JavaScript?
10. Explain how `this` works in JavaScript
11. Explain how prototypal inheritance works
12. Explain why the following doesn't work as an IIFE: "function foo(){ }();". What needs to be changed to properly make it an IIFE?
13. What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?
14. Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?
15. What's a typical use case for anonymous functions?
16. How do you organize your code? (module pattern, classical inheritance?)
17. Difference between: function Person(){}, var person = Person(), and var person = new Person()?
18. What's the difference between .call and .apply?
19. Explain Function.prototype.bind.
20. When would you use document.write()?
21. Explain Ajax in as much detail as possible.
22. What are the advantages and disadvantages of using Ajax?
23. What's the difference between an "attribute" and a "property"?
24. What is the difference between == and ===?
25. Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
26. Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
27. Explain what a single page app is and how to make one SEO-friendly.
28. What are the pros and cons of using Promises instead of callbacks?
29. What tools and techniques do you use debugging JavaScript code?
30. What language constructions do you use for iterating over object properties and array items?
31. Explain the difference between mutable and immutable objects.
32. Explain the difference between synchronous and asynchronous functions.
33. What is event loop? What is the difference between call stack and task queue?
34. What are the differences between variables created using let, var or const?
35. What are the differences between ES6 class and ES5 function constructors?
36. What is the definition of a higher-order function?
37. Can you give an example of a curry function and why this syntax offers an advantage?
38. Can you describe the Document Object Model in JavaScript?
39. What is the difference between function scope and block scope in JavaScript?
40. What will this do and why? var foo = 10 + '20';

### React
1.	Explain the Virtual DOM, and a pragmatic overview of how React renders it to the DOM.
2.	Explain the standard JavaScript toolchain, transpilation (via Babel or other compilers), JSX, and these items??? significance in recent development. What sort of tools might you use in the build steps to optimize the compiled output React code?
3.	What are pure functional Components?
4.	How might React handle or restrict Props to certain types, or require certain Props to exist?
5.	Which feature can we use to cause a component to render only when its ID changes?
6.	What is React?
7.	List some of the major advantages of React.
8.	What are the limitations of React?
9.	What is JSX?
10.	Why can???t browsers read JSX?
11.	What do you understand from ???In React, everything is a component.????
12.	Explain the purpose of render() in React.
13.	What is Props?
14.	What is a state in React and how is it used?
15.	What is an event in React?
16.	Explain Flux.
17.	What is Redux?
18.	In Redux, what do you understand by ???Single source of truth????
19.	Explain the role of Reducer.
20.	What is the significance of Store in Redux?
