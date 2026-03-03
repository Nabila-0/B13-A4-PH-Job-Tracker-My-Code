### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=> getElementByID and querySelector return single element. querySelector returns the first element which are sharing the same class or having the same tag.
On the other hand, getElementsByClassName and querySelectorAll return multiple elements at a time.

getElementsByClassName returns HTML Collection which is a Live Collection and this method can dynamically update data. This method can't directly support for Each loop (required Array.from()). But querySelectorAll returns NodeList (an array like object) which is a Static list and this method can't dynamically update data. This method can support for Each loop.

getElementById finds element by ID name and  getElementsByClassName finds elements by class name.  
querySelector and querySelectorAll both method can find element by ID, class and tag name.

### 2. How do you create and insert a new element into the DOM?

=> I can create and insert a new element into the DOM by using document.createElement()
and appendChild().

Example:  
If I have a HTML document and have main tag or element in the body containing class name main_container then the js file would be look like this--

```javascript

//Creating a new element into the DOM--
const toDoList = document.createElement('section');

toDoList.innerHTML = `
<h1>Things I Need To Do</h1>
<ul>
  <li>Read a Book</li>
  <li>Attend a Meeting</li>
  <li>Check Emails</li>
</ul>
`
//Parent Node in which I want to insert a new element--
const mainContainer = document.getElementByID('main_container');

//Inserting a new element into the DOM--
mainContainer.appendChild(toDoList);

```


### 3. What is Event Bubbling? And how does it work?

=> Event Bubbling is a mechanism in DOM where if an event triggers or happens on an element then the event bubbles up through the DOM tree.

It bubbles up from the child element to the parent elements one by one. If an event triggers on a child element (like when a click happens) then the parent elements would be triggered also.  
Event Bubbling is opposite to Event Capturing. It is the event starts from the target element to the top element or root.



### 4. What is Event Delegation in JavaScript? Why is it useful?

=>  Event Delegation is a pattern in javascript where event of child elements is handled by using event handler to a parent element. It is required when there are multiple child elements and it is impractical to assign different event handler for each.  
Instead of adding multiple event listener on every single child element, one event listener is added to the parent element. Event Delegation works based on Event Bubbling.

It keeps the code clean, helps with memory optimization, provides better performance as it uses less memory, runs the code faster and easy to maintain.



### 5. What is the difference between preventDefault() and stopPropagation() methods?

=> preventDefault() method stops browser's default actions. It works on HTML elements and cancels the built-in behavior of an element.

On the other hand, stopPropagation() method stops Event Bubbling. It prevents the event from bubbling up from the child element to the parent elements of the DOM tree, while preventDefault() method has no relation with Event Bubbling.







