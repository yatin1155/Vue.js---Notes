<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quotes>
          <h1 slot="title">The Quote</h1>
          <p slot="content">The Wonderful Quote!</p>
        </app-quotes>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
export default {
  data () {
    return {
     
    }
  },
  components:{
    'appQuotes':Quote
  }
}
</script>

<style scoped>

</style>