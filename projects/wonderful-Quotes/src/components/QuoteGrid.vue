<template>
    <div class="row">
        <app-quote v-for="(quote,index) in quoteArr" :index='index' :quote='quote' :key='index'>
        </app-quote>
        <div class='empty' v-if="quoteArr.length === 0 ">No quotes to display ☹️ </div>
    </div>
</template>

<script>
import Quote from './Quote.vue'
export default {
    components:{
        appQuote:Quote
    },
    props:['quoteArr']
}
</script>

<style scoped>
.empty{
    padding: 28px;
    background-color: antiquewhite;
    font-size: 22px;
    border: 2px dotted;
    margin: 3%;
    border-radius: 20px;
}

</style>