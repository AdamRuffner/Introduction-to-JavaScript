/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let age = 24
let votingAge = (age > 18);
    console.log(votingAge);






//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let number = 1
console.log('im number 1')

if(number = 2){
   console.log('now im number 2')
}








//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var text =("1999");
var integer = parseInt(text, 10);
console.log(integer);





//Task d: Write a function to multiply a*b 
function multiply(a, b){
    return a * b
}
console.log(multiply(3,2));





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogYears(age){
    let dogYears=7*age;
    console.log('I am ' + dogYears + ' years old as a dog!');
}
dogYears(24);




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

// let (percentOfWeight = '.03');
// let (age ='1');
// let (weight ='15');
// function dogFeeder(weight, percentOfWeight ){
//     const poundsOfRawFood = 0;
//     poundsOfRawFood = (weight*percentOfWeight);
//     console.log(poundsOfRawFood);
//     return poundsOfRawFood;
//   }  
function dogFeeder(weight,percent){
    if (age > '1'){
    console.log('it is a dog')
    } else if (age < '1'){
        console.log('it is a puppy')
    }
    if (weight == '11,14,15'){
        console.log('use 3%')
    }if (weight == '6,7,8,9,10'){
        console.log('use 4%')
    }if (weight == '1,2,3,4,5'){
        console.log('use 5%')
    }
    return weight * percent
}
console.log(dogFeeder(15,.03));
  






/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function Game(guess){
    var whole_num = Math.ceil(Math.random() * 3);
    var comp_guess = " ";
    if (comp_guess ==1){  
        comp_guess ='rock'
    } else if (whole_num == 2){
        comp_guess ='paper'
    } else{
        comp_guess = 'scissors'
    }
    var win = false;

    if (guess == comp_guess){
        return 'You Tied!'
    }

    if (guess == "rock" && comp_guess == "scissors"){
        win = true;
    } else if(guess == "scissors" && comp_guess =="paper"){
        win =true;
    } else if(guess =="paper" && comp_guess =="rock"){
        win = true;
    } else{
        win = false;
    }

    if (winner ='ME'){
        return 'You Won!'
    } else{
        return 'You Lost!'
    }
}
console.log(Game("rock"));
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let miles = '.621371';
function converter(num1, miles){
   return num1 * miles
}
console.log(converter(5, miles));




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  let cm = '30.48';
  function other(num1, cm){
      return num1 * cm
  }
  console.log(other(2, cm));




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  function annoyingSong(){
      var bottles;
      var bottlesLeft;
      for (let i =99; i>=1; i--){
      if (i==1){
          bottles ='bottle';
          bottlesLeft ='No bottles of beer on the wall';
      } else{
          bottles = 'bottles';
          bottlesLeft = i - 1 + ' bottles of beer on the wall';
      }console.log(i + ' ' + bottles + ' of beer on the wall');
      console.log(i + ' ' + bottles + ' of beer');
      console.log('take one down, pass it around');
      console.log(bottlesLeft);
    }
}
  console.log(annoyingSong());




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
var n = Math.floor(Math.random() * 100);
function grades(){
    if (n >= 90 && n<=100){
        grade= 'A';
        console.log('you got an' + ' ' +  grade);
    } else if (n >=80 && n<=89){
        grade ='B';
        console.log('you got a' +' ' +  grade);
    } else if (n >=70 && n<=79){
        grade ='C';
        console.log('you got a' + ' ' +  grade);
    } else if (n >=60 && n<=69){
        grade ='D';
        console.log('you got a' + ' ' +  grade);
    } else if (n >=0 && n<=59){
        grade ='F';
        console.log('you got an' + ' ' +  grade);
    }
}
console.log(grades());
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
