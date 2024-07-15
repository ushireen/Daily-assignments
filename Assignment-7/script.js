
// Task 1 Using setTimeout

    setTimeout(function()  {
      console.log("Hello, World!");
   }, 3000);

// Task 2. Using setInterval

     const myInterval = setInterval(() => {
        console.log("Tick");
     }, 2000);

// Task 3. Clear Interval

let count = 0;
const interval = setInterval(() => {
        console.log("Tick");
    if(count <= 4) {
        count++;
     }  
     else {
       clearInterval(interval);
     }
   }, 2000);
 
   
//Task  4. Simple Callback Function

     function greet (name){
        console.log("Hello,"  + name);
     }
    
     function processUserInput(greet){
        greet("Uzma!")
     }
      processUserInput(greet)

// task 5. Using Callbacks with Timing Functions


function mainFunction(callback) {
   
    setTimeout(() => {
        callback("Hello");
    }, 1000);
    setTimeout(() => {
        callback("World!");
    }, 2000);
}

function callbackFunction(result){
    console.log(result);

}
mainFunction(callbackFunction)


// What did you learn about JavaScript timing events and callbacks through this
// task?
//  ---Through this task, I've learned about the web apis which are setTimeout, setInterval, clearInterval ,these timing events are used to handle Asynchronous operations, without
//     blocking the main execution.
//  --- Callbacks are functions passed as arguments to other functions,they are invoked after the completion of a task, allowing for asynchronous programming.


// 2. How do setTimeout and setInterval differ in their usage?
    //  --setTimeout is used  delay the execution of a function or perform an action once after a certain period.
    //    It takes time in milli seconds to wait before executing the function.
    // ---setInterval- Itis used to perform a task repeatedly at regular intervals, 
    //    setInterval can be cleared using clearInterval.


// 3. What are the advantages of using callbacks in JavaScript?
// The advantages of callbacks in javascript are 
// They can handle asynchronous events and make your code more readable.
// there main purpose is to execute code in Responseto ana events.
// Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed.