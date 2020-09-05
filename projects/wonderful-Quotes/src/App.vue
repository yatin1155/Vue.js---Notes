<template>
  <div class="container">
    <app-header :maxSize='maxQuote' :size='quotes.length'></app-header>
    <add-quote></add-quote>
    <quote-grid :quoteArr='quotes'></quote-grid>



<hr>
    {{quotes}}
  </div>
</template>

<script>
import Header from './components/Header.vue';
import QuoteGrid from './components/QuoteGrid.vue';
import AddQuote from './components/AddQuote.vue'
import {eventBus} from './main';
export default {
  data () {
    return {
     maxQuote:10,
     quotes: [
       "Hello Yatin",
       "jdjehduewudhwued",
       "wdiewjdiwjdwj"
     ]
    }
  },
  components:{
    QuoteGrid: QuoteGrid,
    AddQuote: AddQuote,
    AppHeader: Header
  },
  methods:{
    deleteQuote(index){
      this.quotes.splice(index,1);
    },
    addQuote(string){
      if(this.quotes.length < this.maxQuote){
        this.quotes.push(string);
      } else{
        alert('Sorry, No space to add.')
      }
      
    }
  },
  created(){
    eventBus.$on('deleteQuote',(index)=>{
     this.deleteQuote(index)
    });

    eventBus.$on('addQuote',(string)=>{
     this.addQuote(string)
    })
  }
}
</script>

<style scoped>

</style>