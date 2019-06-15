<template>
  <div>
    <button class="btn btn-primary" @click="handler">Roll</button>
  </div>
</template>

<script>
export default {
  methods: {
    /*
     * Function that generates a random value of dice from 1 to 6.
     *
     * @return {number} value from 1 to 6
     */
    rollRandomDice() {
      return (Math.floor(Math.random() * 6) + 1);
    },

    /*
     * Function that rolls an array of 5 dices.
     *
     * This function calls the rollRandomDice() function 5 times. Alternatively a for-loop can be used if
     * number of dices was bigger.
     *
     * @return {Number[]} diceNumberArray.
     */
    rollRandomDiceArray() {
      return ( [
        this.rollRandomDice(),
        this.rollRandomDice(),
        this.rollRandomDice(),
        this.rollRandomDice(),
        this.rollRandomDice()
      ]);
    },

    /*
     * Function that counts the sum of the elements of the array.
     *
     * @param {Number[]} diceNumberArray.
     * @return {Number} sum of array values.
     */
    sumOfArray(diceNumberArray) {
      return diceNumberArray.reduce(function(a, b) {
        return a + b;
      }, 0);
    },

    /*
     * Function that checks occurencies of each value in dice array.
     *
     * The function creates array with key-value relationship and for every dice value passed to it
     * from diceNumberArray it stores its occurencies under the index of dice value in the key-value array.
     *
     * @param {Number[] diceNumberArray}
     * @return {Number{key,value}} array of occurencies of dice values.
     */
    checkOccurencies(diceNumberArray) {
      var numbersOfOccurencies = {};
      diceNumberArray.forEach(function(dice) {
        if (!numbersOfOccurencies[dice]) {
          numbersOfOccurencies[dice] = 0;
        }
        numbersOfOccurencies[dice] += 1;
      });
      return numbersOfOccurencies;
    },

    /*
     * Functions to check if array contains 3 (or more) identical elements ("Three of a kind").
     *
     * @param {Number[]} diceNumberArray
     * @return {boolean} true if array contains 3 identical elements, false if not.
     */
    checkThree(diceNumberArray) {
      var numbersOfOccurencies = this.checkOccurencies(diceNumberArray);
      for (var occurency in numbersOfOccurencies) {
        if (numbersOfOccurencies[occurency] >= 3) {
          return true;
        }
      }
      return false;
    },

    /*
     * Functions to check if array contains 4 (or more) identical elements ("Four of a kind").
     *
     * @param {Number[]} diceNumberArray
     * @return {boolean} true if array contains 4 identical elements, false if not.
     */
    checkFour(diceNumberArray) {
      var numbersOfOccurencies = this.checkOccurencies(diceNumberArray);
      for (var occurency in numbersOfOccurencies) {
        if (numbersOfOccurencies[occurency] >= 4) {
          return true;
        }
      }
      return false;
    },

    /*
     * Functions to check if array contains 5 (or more) identical elements ("Yahtzee").
     *
     * A use of a simpler algorithm is possible (to check if all elements are the same), but in this case
     * use of one algorithm for all combinations is better.
     *
     * @param {Number[]} diceNumberArray
     * @return {boolean} true if array contains 5 identical elements, false if not.
     */
    checkFive(diceNumberArray) {
      var numbersOfOccurencies = this.checkOccurencies(diceNumberArray);
      for (var occurency in numbersOfOccurencies) {
        if (numbersOfOccurencies[occurency] >= 5) {
          return true;
        }
      }
      return false;
    },

    /*
     *  Functions to check if array contains 3 identical elements and 2 another identical elements ("Full House").
     *
     * @param {Number[]} diceNumberArray
     * @return {boolean} true if array contains 3 identical elements and 2 another identical elements, false if not.
     */
    checkFullHouse(diceNumberArray) {
      if (this.checkThree(diceNumberArray) == true) {
        var numbersOfOccurencies = this.checkOccurencies(diceNumberArray);
        for (var occurency in numbersOfOccurencies) {
          if (numbersOfOccurencies[occurency] == 2) {
            return true;
          }
        }
      }
      return false;
    },

    /*
     * Function that sorts the array.
     *
     * @param {Number[]} diceNumberArray
     * @return {Number[]} sorted diceNumberArray
     */
    sortArray(diceNumberArray) {
      return diceNumberArray.sort((a, b) => a - b);
    },

    /*
     * Function that counts the number of consecutive numbers in the array
     *
     * @param {Number[]} diceNumberArray
     * @return {Number} consecutiveNumbers.length
     */
    countConsecutiveNumbers(diceNumberArray) {
      const sortedArray = this.sortArray(diceNumberArray);
      let consecutiveNumbers = 0;
      const consecutiveNumbersArray = [];
      sortedArray.reduce((a, b) => {
        if (a + 1 === b) {
          consecutiveNumbers = consecutiveNumbers + 1;
        } else if (a !== b) {
          consecutiveNumbers = 0;
        }
        consecutiveNumbers > 0 &&
          consecutiveNumbersArray.push(consecutiveNumbers);
        return b;
      });
      // this.$store.state.diceNumberArray = this.unsortedArray;
      if (consecutiveNumbersArray.length > 0)
        return Math.max(...consecutiveNumbersArray) + 1;
      else return 0;
    },

    /*
     * Function that checks if the array contains 4(or more) consecutive elements ("Small Straight")
     *
     * @param {Number[]} diceNumberArray
     * @return  @return {boolean} true if array contains 4 consecutive elements, false if not.
     */
    checkSmallStraight(diceNumberArray) {
      if (this.countConsecutiveNumbers(diceNumberArray) >= 4) {
        return true;
      }
      return false;
    },

    /*
     * Function that checks if the array contains 5(or more) consecutive elements ("Large Straight")
     *
     * @param {Number[]} diceNumberArray
     * @return  @return {boolean} true if array contains 5 consecutive elements, false if not.
     */
    checkLargeStraight(diceNumberArray) {
      if (this.countConsecutiveNumbers(diceNumberArray) >= 5) {
        return true;
      }
      return false;
    },

    /*
     * Function that returns all the scores for the ResultTable.
     *
     * @param {Number[]} diceNumberArray
     * @return {Number[]} array of all scores scoreArray
     */
    setScore(diceNumberArray) {
      var scoreArray = [];
      if (this.checkThree(diceNumberArray) == true) {
        scoreArray[0] = this.sumOfArray(diceNumberArray);
      } else {
        scoreArray[0] = 0;
      }
      if (this.checkFour(diceNumberArray) == true) {
        scoreArray[1] = this.sumOfArray(diceNumberArray);
      } else {
        scoreArray[1] = 0;
      }
      if (this.checkFullHouse(diceNumberArray) == true) {
        scoreArray[2] = 25;
      } else {
        scoreArray[2] = 0;
      }
      if (this.checkSmallStraight(diceNumberArray) == true) {
        scoreArray[3] = 30;
      } else {
        scoreArray[3] = 0;
      }
      if (this.checkLargeStraight(diceNumberArray) == true) {
        scoreArray[4] = 40;
      } else {
        scoreArray[4] = 0;
      }
      if (this.checkFive(diceNumberArray) == true) {
        scoreArray[5] = 50;
      } else {
        scoreArray[5] = 0;
      }
      scoreArray[6] = this.sumOfArray(diceNumberArray);
      this.$store.state.score = scoreArray;
      return this.$store.state.score;
    },

    /**
     * The main function calling the rest of the component functions.
     *
     * This function is responsible for the functionality of the component.
     */
     handler(diceNumberArray, scoreArray) {
      diceNumberArray = this.rollRandomDiceArray();
      this.$store.dispatch('GET_DICENUMBERARRAY', diceNumberArray);
      scoreArray = this.setScore(this.$store.getters.DICENUMBERARRAY);
      this.$store.dispatch('GET_SCORE', scoreArray);
    }
  }
};
</script>

<style>
</style>