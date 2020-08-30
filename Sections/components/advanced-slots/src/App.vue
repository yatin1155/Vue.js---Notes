<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quotes></app-quotes>
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

