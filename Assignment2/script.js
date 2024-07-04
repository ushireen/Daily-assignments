// Task 1: Creating an Object
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    owner: {
         firstName: "Jane", 
         lastName: "Smith", 
         age: 28, 
         email: "jane.smith@example.com"
        } 

};
console.log(car);

// Task 2: Accessing Object Properties
console.log(car.make);
console.log(car.model);
console.log(car.year);
console.log(car.owner.firstName);
console.log(car.owner.lastName);
console.log(car.owner.age);
console.log(car.owner.email);


// Task 3: Modifying Object Properties
car.year = 2021;
car.owner.email = "jane2021.smith@example.com";
console.log(car);


// Task 4: Adding New Properties to an Object
car.insurance = {
     provider: "Geico",
     policyNumber: "XYZ1234567",
     expiryDate: "2024-12-31",
}
console.log(car);

// Task 5: Removing Properties from an Object
delete car.owner['email'];
console.log(car);


// Task 6: Adding Nested Objects
car.serviceHistory = [
    {
        date: "2021-06-01",
        service: "Oil change",
        cost: 50,
      },
      {
        date: "2022-01-15",
        service: "Tire rotation",
        cost: 100
      }
    ]
console.log(car);

// Task 7: Using for...in Loop
for(let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// Bonus Task 1: Using Object.keys()

let keys = Object.keys(car);
console.log(keys);
console.log(Object.keys(car.owner));
console.log(Object.keys(car.insurance));
console.log(Object.keys(car.serviceHistory));

// Bonus Task 2: Using Object.values()

let values = Object.values(car);
console.log(values);
console.log(Object.values(car.owner));
console.log(Object.values(car.insurance));
console.log(Object.values(car.serviceHistory));
