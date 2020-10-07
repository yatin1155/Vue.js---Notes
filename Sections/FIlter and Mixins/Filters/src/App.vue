<template>
  <div id="app">
    <h1>Filters and Mixins</h1>
    <p>{{text}}</p>
    <p>{{text | toUppercase }}</p>

    <!-- Global filter  -->
    <p>{{text2 |toLowerCase}}</p>

    <hr>
    <input type="text" v-model="filterText">
    <ul>
      <li v-for='fruit in filteredFruits'>{{fruit}}</li>
    </ul>

  <hr>
  <app-list></app-list>
  </div>
</template>

<script>

import List from './List.vue';
import { fruitMixin } from './fruitMixin';
export default {
  data () {
    return {
      text: "hello yatin",
      text2: "YATIN KAPOOR",
     
    }
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits(){
      return this.fruits.filter((element)=>{
        return element.match(this.filterText)
      })
    }
  },
  components:{
    appList : List
  },
  mixins: [fruitMixin],
  created(){
    console.log("creared App")
  }
}
</script>
