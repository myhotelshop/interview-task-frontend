<template>
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Categories</th>
      <th scope="col">Description</th>
      <th scope="col">Scores</th>
      <th scope="col">Result</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Three Of A Kind</th>
      <td>At least three dice the same</td>
      <td>Sum of all dice</td>
      <td>{{diceNumberArray}}</td>
      <td > {{score[0]}}</td>
    </tr>
    <tr>
      <th scope="row">Four Of A Kind</th>
      <td>At least four dice the same</td>
      <td>Sum of all dice</td>
      <td>{{diceNumberArray}}</td>
      <td > {{score[1]}}</td>
    </tr>
    <tr>
      <th scope="row">Full House</th>
      <td>Three of one number and two of another</td>
      <td>25</td>
      <td>{{diceNumberArray}}</td>
      <td > {{score[2]}}</td>
    </tr>
    <tr>
      <th scope="row">Small Straight</th>
      <td>Four sequential dice (1-2-3-4, 2-3-4-5, or 3-4-5-6)</td>
      <td>30</td>
      <td>{{diceNumberArray}}</td>
      <td > {{score[3]}}</td>
    </tr>
    <tr>
      <th scope="row">Large Straight</th>
      <td>Five sequential dice (1-2-3-4-5 or 2-3-4-5-6)</td>
      <td>40</td>
      <td>{{diceNumberArray}}</td>
      <td > {{score[4]}}</td>
    </tr>
    <tr>
      <th scope="row">Yahtzee</th>
      <td>All five dice the same</td>
      <td>50</td>
      <td>{{diceNumberArray}}</td>
      <td > {{score[5]}}</td>
    </tr>
    <tr>
      <th scope="row">Chance</th>
      <td>Any combination</td>
      <td>Sum of all dice</td>
      <td>{{diceNumberArray}}</td>
      <td > {{score[6]}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
    export default{
        computed: {
            diceNumber() {
                return this.$store.state.diceNumber;
            },
            diceNumberArray() {
                return this.$store.state.diceNumberArray;
            },
            score() {
              return this.$store.state.score;
            }

            }
        }
    
</script>

<style>

</style>
