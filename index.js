/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 25
if (votingAge >18)

console.log(true)




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let hour = 20
let lost = 2
if (hour < 18) {
  newtime = hour - lost;
} else {
  newtime = hour + lost;
}

console.log(newtime)





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let num = Number ("1999");
console.log(num)


//Task d: Write a function to multiply a*b 

let a = 7
let b = 22

console.log (a*b)



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let myAge = 31;
let myAgeInDogYears = (myAge *7)
console.log(myAgeInDogYears)



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// let userChoice = prompt("Do you choose rock, paper or scissors?");
let userChoice = "rock";
let computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

let compare = function(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
    return "The result is a tie!";
}

if (userChoice === "rock") {
    if(computerChoice === "scissors") {
        return "You win!";
    } else {
        return "You lose!";
    }
}
if (userChoice === "paper") {
    if (computerChoice === "rock") {
        return "You win!";
    } else {
        if (computerChoice === "scissors") {
            return "You lose!";
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "You Lose!";
        } else {
            if (computerChoice === "paper") {
              return "You Win!";
            }
        }
    }
}
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
console.log(compare(userChoice, computerChoice));

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let kilo = 30
let mile = .621371

console.log(kilo*mile + " miles")




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
let feet = 71
let centimeters = 30.48

console.log(feet*centimeters + " centimeters")



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`


let text = "";
let i;
for (i = 2; i > 0; i--) {
  text += i + " Bottles of soda on the wall, " + i + " Bottles of soda, take one down pass it around " + (i-1) + " bottles of soda on the wall.";
  
}

console.log(text)




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
// let grade = 

// if (grade >= 90) {
//     return "A";
// } else {
// if (grade >= 90) 
//     return "B";
// } else {
//     if (grade >= 70){
//         return "C"
//     }
// }


  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





