
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