// Task 1: Creating and Appending an Element

const div = document.createElement('div');
console.log(div);
const addText = document.createTextNode("Hello World!");
div.appendChild(addText);
document.body.appendChild(div);
div.style.fontSize ="30px";

// Task 2: Changing the Content of an Existing Element

const newtext = document.getElementById('paragraph');
newtext.textContent = "This is updated content.";
paragraph.replaceWith(newtext);

// Task 3: Creating and Appending a List of Items

const ul = document.createElement('ul');
console.log('ul');

function addItems(newItems){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItems));
    ul.appendChild(li);
    document.body.appendChild(ul);
   }
  addItems('item1')
  addItems('item2')
  addItems('item3')



// Task 4: Editing an Attribute of an Element

const newImg = document.querySelector('img');
newImg.src = 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'


// Task 5: Deleting an Element

const removed = document.querySelector("#remove");
removed.remove();

// Reflection Questions
// 1. What did you learn about DOM manipulation through this task?
     //  I have learned how to create an element , edit an element, replace the element, removing the element and display it on the document.
    // we can use DOM for creating elements dynamically.

// 2. How do you create and append elements in the DOM?
    //  To create an element we use document.createElement() method in DOM
    //  For appending elements in the HTML body we use document.body.appendChild()
     
// 3. What methods are used to change content and attributes of DOM elements?
    //    To change the content or edit them we can use replaceWith() method
     
// 4. How do you delete elements from the DOM?
    //  We use remove() method to remove the elements from the DOM

















