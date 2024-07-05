// Task 1: Generate Random Numbers
function getRandomNumber(min, max) {

      return Math.floor(Math.random() * (max - min + 1) + min);

    }
    console.log(getRandomNumber(1, 100));


// Task 2: Round Numbers
function roundNumbers(num) {
  return {
    roundedUp: Math.ceil(num),
    roundedDown: Math.floor(num),
    rounded: Math.round(num)
  };
}
console.log(roundNumbers(4.7)); 

// Task 3: Find Maximum and Minimum
function findMaxMin(numbers) {
    return{
        max: Math.max(...numbers),
        min: Math.min(...numbers)
   };
}

console.log(findMaxMin([3, 5, 7, 2, 8])); 


// Task 4: Calculate Power and Square Root
function calculatePowerAndSquareRoot(base, exponent) {
    return {
        power: Math.pow(base, exponent),
        squareRoot: Math.sqrt( base, exponent)
    };
}
console.log(calculatePowerAndSquareRoot(4, 3)); 

// Task 5: Current Date and Time
function getCurrentDateTime() {
    const newDate = new Date();
    let currentDate = newDate.toISOString().slice(0, 10);
    let currentTime = newDate.toTimeString();
  return {
  currentDate,  
  currentTime 
   };  
 }
console.log(getCurrentDateTime());


// Task 6: Get Date Methods
function getDateMethods(date) {
     const day = date.getDate();
     const month = date.getMonth() + 1
     const fullYear = date.getFullYear();
     return {
        day, 
        month, 
        fullYear
     };
}

console.log(getDateMethods(new Date()));

// Task 7: Format Date in Different Locales
function formatDateInLocales(date) {
  return {
    enUS: date.toLocaleDateString('en-US'),
    frFR: date.toLocaleDateString('fr-FR')
  };
}

console.log(formatDateInLocales(new Date()));


// Task 8: Add Days to a Date
function addDaysToDate(date, days) {
 let newDate = new Date(date);
 newDate.setDate(newDate.getDate() + days);
  return newDate;
}

console.log(addDaysToDate(new Date(), 5)); 


// Bonus Task 1: Explore More Math Methods

function exploreMathMethods(num) {
    return {
    absoluteValue: Math.abs(num),
    log: Math.log(num),
    floor: Math.floor(num),
    ceil: Math.ceil(num),
    exp: Math.exp(num),
    };
  }
  
  console.log(exploreMathMethods(-5));


//   Bonus Task 2: Advanced Date Manipulations

function advancedDateManipulations(date1, date2) {
    const timeDiff = Math.abs(date2 - date1);
    const diffInDays= Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    const isEarlier = date1 < date2;

    const formattedDates = [
        `${date1.getMonth() + 1}/${date1.getDate()}/${date1.getFullYear()}`,
        `${date2.getMonth() + 1}/${date2.getDate()}/${date2.getFullYear()}`
    ];

    // Return an object with the required properties
    return {
        diffInDays,
        isEarlier,
        formattedDates
    };
}

console.log(advancedDateManipulations(new Date('2024-01-01'), new Date('2024-12-31')));



  











