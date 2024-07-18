
// Task -1 Using Fetch API

function fetchData() {
  const data = 'https://jsonplaceholder.typicode.com/users';
  fetch(data)
    .then(response => response.json())
    .then(data => console.log(data));
}

fetchData();


// Task -2 : Handling Promises with Async and Await

async function fetchData1() {
   try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        throw new Error("HTTP error");
      }
      const data = await response.json();
      console.log( data);
    } catch (error) {
      console.error(" Fetch Error", error.message);
    }
  }
fetchData1();

// Task -3 :Fetch with Parameters
document.addEventListener("DOMContentLoaded", () => {
  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );

      if (!response.ok) {
        throw new Error("HTTP error");
      }
      const data = await response.json();

      populateData(data);
    } catch (error) {
      console.error("Error", error);
    }

    function populateData(data) {
      const tableBody = document.querySelector(".table-data tbody");

      data.forEach((post) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = post.id;
        row.appendChild(idCell);

        const titleCell = document.createElement("td");
        titleCell.textContent = post.title;
        row.appendChild(titleCell);

        const completedCell = document.createElement("td");
        completedCell.textContent = post.completed;
        row.appendChild(completedCell);

        tableBody.appendChild(row);
      });
    }
  }
  fetchData();
});

// Task-4 : Error Handling in Asynchronous Code

async function fetchData3() {
  try {
    const response = await fetch("https://invalid.typicode.com/posts");
    if (!response.ok) {
      throw new Error("HTTP error");
    }
    const data = await response.json();
    console.log( data);
  } catch (error) {
    console.error(" Fetch Error", error.message);
  }

}
fetchData3();


// Task-5  : Combining Fetch with Async/Await and Error Handling
async function fetchPosts() {

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("HTTP error");
    }
    const data = await response.json();
    console.log( data);
  } catch (error) {
    console.error(" Fetch Error", error.message);
  }

}
fetchPosts();


