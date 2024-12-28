// var tweet = prompt("you have 140 characters to write:");
// var tweetCount = tweet.length;
// var tweetR = 140-tweetCount;
// var tweetUnder140 = tweet.slice(0,140);
// alert("you have written " + tweetCount + ". you have " + (140-tweetCount) + " characters remaining!",
//       tweetUnder140);
// alert(tweetUnder140);
// var myName = "Danilo";
// myName.toUpperCase();

function capUname () {
    // exercise #01
    // my solution
    var name1 = prompt("what's your name?");
    var name1stleter = name1.slice(0,1);
    var uCase = name1stleter.toUpperCase();
    
    // var _ame1 = name1.slice(1,20); 
    // alert("Hello, " + uCase + "" + _ame1 + ".");
    
    var _ame1 = name1.slice(1,name1.length);
    var _ame11 = _ame1.toLowerCase();
    var capName = uCase + _ame11;
    alert("Hello, " + capName + ".")
    // solution, considering the previous var 
}

 // Add event listener to the button after the DOM is fully loaded
 document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('capitalize-button');
    button.addEventListener('click', capUname);
});

// for call the function, capUname ();

// ____________________________________________________________
// exercise #02 dog age to human age formula
function dogAgee() { 
    var dogAge = prompt("How old is the dog?");
    if (dogAge !== null) { // Ensure the prompt was not canceled
        var humanAge = ((dogAge - 2) * 4) + 21;
        alert("Did you know your dog's age is equivalent to " + humanAge + " human years?");
    }
}

// document.getElementById('dog-age').addEventListener('click', dogAgee);




//    dogAgee ();
// _________________________________________________________________-
// // exercise#03

function getMilk(money,costBottle) {   
  var money = 10;
    var costBottle = 2.5;
    var manyBottles = Math.trunc(money/costBottle);
  
    console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy" + manyBottles + "bottles of Milk")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return money % costBottle; // remaining of the division
  
}
var change = getMilk ();

function numbBo () {
    var manyBottles = Math.trunc(money/costBottle)
} 

var bo = numbBo ();
    
alert (change);

// getMilk ();
//___________________________________________________________________
// exercise #4 
//
function calAge () {
    var myage = 56;
    var lifeLeft = 90-myage;
    var ageDays = lifeLeft*365
    var ageWeeks = lifeLeft*52 
    var ageMonths = lifeLeft*12
        
    alert (" You have " + ageDays + " days, " + ageWeeks + " weeks, and " + ageMonths + " months left.")
        
    }
    
    calAge();
//___________________________________________________________________
    // exercise #5
    function bmiCalculator() {
        var wei = prompt("What's your weight in kilograms?");
        var hei = prompt("What's your height in meters?")/100;
        var bmi = wei / Math.pow(hei,2);
        alert("Your BMI is: " + bmi.toFixed(2)); // Rounds to 2 decimal places
    }
    

// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('bmi-cal');
//     button.addEventListener('click', dogAgee);
// });
//_____________________________________________________________________
// // exercise#5
var you = prompt ("What is your name?");
var other = prompt ("What is the name of your Valentine?");    
function loveCal (you, other) {
    
    var n = Math.random ();
    n = n*100;
    n = Math.floor (n) + 1;

    return n;
    return you;
    return other;
 
}
var n = loveCal ();
   if (n > 70) {
    alert ("Your match with " + "other " + "is " + n + "%" + ".You are unlikely a pretty good match!");
} else {
    alert ("Your match with " + "other " + "is " + n + "%" + ". red flag");
}

// exercise #6
// function bmiCalculator (wei,hei) {
//     var bmi = Math.floor(wei/Math.pow(hei,2))
//     return bmi;
// }

// not working
// function bmiCalculator (wei, hei) {
//     var bmi = Math.floor(wei/Math.pow(hei,2));
//     return bmi;

// // responses 

//     if (bmi<18.8) {
//     alert("our BMI is " + bmi + ", so you are underweight.");
// }
// if (bmi>=18.8 && bm1<24.9) {    
//     alert("our BMI is " + bmi + ", so you have a normal weight.");
// }
// else {
//     alert("our BMI is " + bmi + ", so you are overweight.");
// }
// }

// bmiCalculator (65,1.8);


// // Function to check if a year is a leap year
// function isLeap(year) {
//     var step1 = year % 4;
//     var step2 = year % 100;
//     var step3 = year % 400;
//     if (step1 === 0) {
//         if (step2 === 0) {
//             if (step3 === 0) {
//                 return "leap";
//             } else {
//                 return "not a leap year";
//             }
//         } else {
//             return "leap";
//         }
//     } else {
//         return "not a leap year";
//     }
// }

// /**************Don't change the code below****************/    

// alert("test 2024,  " + isLeap(2024));
// alert("test 1900,  " + isLeap(1900));
// alert("test 2020,  " + isLeap(2020));

// // array exercise#6
// var guestList = ["Angela", "Danilo", "Gabriel", "Anna", "Carlos", "Du"];

// var aGuest = prompt ("what is your name?");

// var test = guestList.includes (aGuest);

// if (guestList.includes (aGuest)) {
//     alert ("Welcome to the party")
// } else {
//     alert ("sorry, you are not invited")
// }

// function whosPaying(names) {
    
// /******Don't change the code above*******/
    
//     //Write your code here.
    
//     var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
    
//     var i = Math.random();
//     i= i * names.length;
//     i= Math.floor (i);
    
//     var randomPerson = names [i];

//     // return randomPerson;
    
//     alert (randomPerson + " is going buy the lunch today.");
    
// /******Don't change the code below*******/    
// }

// whosPaying ();

// FizzBuzz game2
// var output = [];
// var count = 1;

// function fizzBuzz() {
//         while (count <= 200) {
           
//             if (count % 3 === 0 && count % 5 === 0) {
//                 output.push("FizzBuzz");
//             } else if (count % 3 === 0) {
//                 output.push("Fizz");
//             } else if (count % 5 === 0) {
//                 output.push("Buzz");
//             } else {
//                 output.push(count)
//             }
//         count++;
//         }
// }    
//     fizzBuzz ();
//     console.log(output);

//     // var lyrics = [];
//     var countBeer = 99;

//     function beer () {
                 
//             for (var countBeer = 99; countBeer>0; countBeer--) {
//             console.log(countBeer + " bottles of beer on the wall , " + countBeer + "bottles of beer. Take one down and pass it around," + countBeer + "bottles of beer on the wall.")
//                 }
            
//     }
    
// beer();
        



// var numberOfBottles = 99;
// var bottleWord = "bottle";
//     while (numberOfBottles >= 0) {
        
//         if (numberOfBottles === 1) {
//             bottleWord = "bottles";
//         } 
//         console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//         console.log(numberOfBottles + " " + bottleWord + " of beer,");
//         console.log("Take one down, pass it around,");
//     	numberOfBottles--;
//         console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
//     }

// var output = [];
// function fizzBuzz() {
//         for (var count = 1; count <= 100; count++) {
           
//             if (count % 3 === 0 && count % 5 === 0) {
//                 output.push("FizzBuzz");
//             } else if (count % 3 === 0) {
//                 output.push("Fizz");
//             } else if (count % 5 === 0) {
//                 output.push("Buzz");
//             } else {
//                 output.push(count)
//             }
//                 }
// }    

// fizzBuzz ();
// console.log(output);

________________________________________________

function fibonacci (qte) {
    var fibonacciSequency = [];
    var qte = prompt("tip the numbers in the sequence")
    if (qte === 1) {
        fibonacciSequency = [0];
        }
        else if (qte === 2) {
        fibonacciSequency = [0, 1];   
        }
        else {
        fibonacciSequency = [0, 1];    
        
    for (var i = 2; i < qte; i++ ) { 
        var nextNumber = fibonacciSequency[i - 1] + fibonacciSequency[i - 2];
        fibonacciSequency.push (nextNumber);    
        }   
    }
return fibonacciSequency;
}    

fibonacci (qte);

alert(fibonacciSequency);

// document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Danilo";