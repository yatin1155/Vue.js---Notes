<template>
  <div>
    <h1>Filters and Mixins</h1>
    
    <input type="text" v-model="filterText">
    <ul>
      <li v-for='fruit in filteredFruits'>{{fruit}}</li>
    </ul>

  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin"
export default {
  mixins: [fruitMixin]
}
</script>
