# Yahtzee GAME

This project of a simplified version of the dice game Yahtzee (https://en.wikipedia.org/wiki/yahtzee) is created to demonstrate pattern algorithms of the dice and the software architecture.
The style of the project is implemented using Bootstrap (https://getbootstrap.com/docs/4.3/getting-started/introduction/)

The project consists of two parts - Dice.vue component and ResultTable.vue component.

## Dice.vue
Dice component contains all the functions necessary to interact with the dice - 

 - rollRandomDice() - rolling a single dice.
 - rollRandomDiceArray() - rolling the dice 5 times.
 - checkOccurencies() - helper function that generates key value array that represents dice values and number of their occurencies.
 - checkThree(), checkFour(), checkFive(), checkSmallStraight(), checkLargeStraight(), checkFullHouse() - functions that check for the possible combinations.
 - setScore() - calculates the score based on the combinations.


## ResultTable.vue
ResultTable component contains the template for the table. The component gets the result from stored values and shows them in the table.

## Vuex
Vuex is used for state management to store the dice, dice array and score array values.

## How to start
To start the project, use following comands:
1. Git clone this repository (yahtzee-project): 
 ``` git clone [url] ```
2. Open the repository in the terminal:
  ``` cd yahtzee-project ```
3. Install npm package: 
  ``` npm install ```
4. Run project on a local server: 
  ``` npm run -g serve ```
5. If you want to create a build, run the following: 
  ``` npm run build ```