<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="updateCounter">counter++</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
import {eventBus} from '../main'
export default {
    data(){
        return{
            counter:0
        }
    },
    methods:{
        updateCounter(){
            this.counter++;
            eventBus.$emit('onCounterUpdate',this.counter);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
