import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


function getData(arr, year, stage, output){
    for (let i =0;i<arr.length;i++){
        // console.log('-----');
        if (arr[i]["Year"]===year && arr[i]["Stage"] === stage){
        //   console.log(arr[i][output]);
          return arr[i][output];
        }
     }
     
}

const newArr = fifaData.filter(function(item){

    return item["Year"]===2014 && item["Stage"] === "Final" ;

  });

console.log ('Task 1');
//(a) Home Team name for 2014 world cup final
let homeTN = getData(newArr, 2014, "Final", "Home Team Name");
console.log("Home Team name: "+ homeTN);

//(b) Away Team name for 2014 world cup final
let awayTN = getData(newArr, 2014, "Final", "Away Team Name");
console.log("Away Team name: "+ awayTN);

//(c)Home Team goals for 2014 world cup final
let homeTG = getData(newArr, 2014, "Final", "Home Team Goals");
console.log("Home Team goals: "+ homeTG);

//(d)Away Team goals for 2014 world cup final
let awayTG = getData(newArr, 2014, "Final", "Away Team Goals");
console.log("Away Team goals: "+ awayTG);

//(e)Winner of 2014 world cup final */
if (homeTG>awayTG){
    console.log('Winner: '+ homeTN);
} else 
    console.log('Winner:'+ awayTN);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */


console.log('Task 2');

function getFinals(data) {

    let finalsArray = data.filter(function(item){
        // console.log(item["Stage"])
        return item["Stage"] === "Final";   
      });
      return finalsArray;
};
let finalsArray = getFinals(fifaData);
console.log(finalsArray);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

console.log('Task 3');

function getYears(cbFinal) {

    // const newArray = cbFinal(getFinals);

     const newArray = cbFinal(fifaData).map(function(item){
        // console.log(newArray["Years"]);
        return item["Year"];
    });

    // console.log(newArray);
    return newArray;

};

console.log(getYears(getFinals));
// const yearsArray = getYears(getFinals);
// console.log(yearsArray);



/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

console.log('Task 4');

function getWinners(cbGetFinals) {
    const winningArray = cbGetFinals(fifaData);

    const winningNameArray = winningArray.map(function(item){
       if (item["Home Team Goals"] > item["Away Team Goals"]){
        return item["Home Team Name"];
       } else{
           return item["Away Team Name"];
       }

    });

    return winningNameArray;

};

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
console.log('Task 5');

function getWinnersByYear(getWinnersCB, getYearsCB) {

    // const cbArrays = [getWinnersCB(getFinals), getYearsCB(getFinals)];
    const cbWinners = getWinnersCB(getFinals); const cbYears = getYearsCB(getFinals);

    // console.log(cbArrays); // test


    const winners = [];
    // cbArrays[1].forEach(function(item){
    //     winners.push('In '+ cbArrays[1] + ', '+ cbArrays[0] + ' won the world cup!');
        
    // });

    for (let i = 0; i<cbWinners.length;i++){
        winners.push('In '+ cbYears[i] + ', '+ cbWinners[i] + ' won the world cup!');
    }
    
    return winners;
}

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

console.log('Task 6');

function getAverageGoals(data) {
    
    const newArrHome = data.map
    (function(item){

        return item["Home Team Goals"];
    
      });

      const newArrAway = data.map
      (function(item){
  
          return item["Away Team Goals"];
      
        });

        // console.log(newArrAway) //test


    let sumHome = newArrHome.reduce(function(accumulator, currentValue){
        return accumulator+ currentValue;
        
    });

    let sumAway = newArrAway.reduce(function(accumulator, currentValue){
        return accumulator+ currentValue;
        
    });
    // console.log(sumHome+' '+data.length) // test
    
    return 'Home average = ' +sumHome/data.length+ ' Away average = '+ sumAway/data.length;

};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
