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
  ``` cd interview-task-frontend ```
3. Install npm package: 
  ``` npm install ```
4. Run project on a local server: 
  ``` npm run -g serve ```
5. If you want to create a build, run the following: 
  ``` npm run build ```

  ## How to start testing
  To test the project, jest, @vue/test-utils, vue-jest, babel-jest are used.
  1. Install the jest and other components:
  ``` npm install --save-dev jest @vue/test-utils vue-jest babel-jest ```
  2. Run testing:
  ``` npm run test ```
  3. If you get an error "SyntaxError: Unexpected token import" or "SyntaxError: Unexpected identifier import" try to update babel by running following command:
  ``` npm install --save-dev babel-core@7.0.0-bridge.0 ```

  ## How to start docker container
  To start the docker container, you need to:
  1. Install the docker from following link and restart the computer:
  ``` https://www.docker.com/get-started ```
  2. Open the repository that contains Dockerfile in terminal:
  ``` cd interview-task-frontend ```
  3. Build docker container using following command in the terminal:
  ``` docker build -t yahtzee-container . ``` (you can use any name instead of 'yahtzee-container')
  4. Run the container:
  ``` docker run -p 8080:80 yahtzee-container ``` (alternatively, if http://localhost:8080 is already used, you can change 8080:80 to another port, for example 8081:80)
  5. Open the localhost in your browser:
  ``` http://localhost:8080 ```
