//1. localStorage: Setting and Getting Data

localStorage.setItem('name', 'sarah');
localStorage.setItem("email", "sarah@gmail.com");
const value = localStorage.getItem('name');
console.log(value);
console.log(localStorage.getItem('email'));


// sessionStorage: Setting and Getting Data
 sessionStorage.setItem("car", "Ford");
 sessionStorage.setItem('series', 'f-series');
 const item = sessionStorage.getItem("car");
 console.log(item);


// 3. Removing Items from Storage
  localStorage.removeItem("email");
  console.log(localStorage.getItem("email"));

  sessionStorage.removeItem("series");
  console.log(sessionStorage.getItem("series"));

// 4. JSON Storage
// Local Storage 
const userObj = {
    username : "Maria",
    email: "maria@mail.com",
  }
  localStorage.setItem('userObj', JSON.stringify(userObj));
  console.log(JSON.parse(localStorage.getItem("userObj")));

//   Session storage

const userObj1 = {
    Id : 34567,
    address: "Hyderabad",
  }
  sessionStorage.setItem('userObj1', JSON.stringify(userObj1));
  console.log(JSON.parse(sessionStorage.getItem("userObj1")));

// 5.  Clearing Storage

localStorage.clear();
sessionStorage.clear();

console.log("local storage after clearing:", localStorage.getItem(userObj1));
console.log("session storage after clearing:", sessionStorage.getItem(userObj1));


// Reflection questions
// What did you learn about using localStorage and sessionStorage in JavaScript?
// ->We can use the localStorage or sessionStorage objects to store key/value pairs.
// ->In both we use setItem() for setting the data and getItem() for retrieving the data, and removeItem() for removing the data from the storage.

// ● How does storing data in localStorage differ from sessionStorage?
// -> localStorage  web applications to store data locally within the user's browser, The data isn’t deleted when the  browser is closed, and is available when the browser is opened again.
// -> SessionStorage is used when we need browser storage that does not impact web application performance. Login credentials are held in sessionStorage as they are cleared once the open tab closes. 


// ● What are the use cases for localStorage and sessionStorage?
// -->Local storage is suitable for storing user preferences, application settings, and other long-term data that needs to persist across multiple sessions.
// -->Session storage is ideal for storing temporary data that is relevant only to the current browsing session, such as form data, shopping cart items, or transient application state.