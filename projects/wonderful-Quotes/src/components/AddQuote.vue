<template>
    <div>
        <h4>Quote</h4>
        <textarea v-model="message" rows="4" cols="50" placeholder="Type your quote..."/>
        <button class='btn' @click="updateQuote">Add Quote</button>
    </div>
</template>

<script>
import {eventBus} from '../main';
export default {
    data(){
        return{
            message:''
        }
    },
    methods:{
        updateQuote(){
            if(this.message === ''){
                alert("You have entered an empty content");
            }else{
                eventBus.$emit('addQuote',this.message);
                this.message='';
            }
          
        }
    }
}
</script>

<style scoped>
.btn{
    cursor: pointer;
    background-color: #0D47A1;
    color: aliceblue;
}
</style>