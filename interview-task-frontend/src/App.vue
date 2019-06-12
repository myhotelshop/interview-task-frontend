<template>
 <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <app-result-table> </app-result-table>
        <app-dice> </app-dice>
    </div>
 </div>

</template>

<script>
import Dice from './components/Dice.vue';
import ResultTable from './components/ResultTable.vue';

export default {
  components: {
    appDice: Dice,
    appResultTable: ResultTable,
  }
}

</script>

<style>

</style>
