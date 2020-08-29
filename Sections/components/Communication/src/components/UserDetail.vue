<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{name}}</p>
        <p>Reversed Name: {{switchName()}}</p>
        <button @click="resetName">RESET Name</button>
        <button @click="resetFn()">RESET Name</button>
        <p>Counter: {{counter}}</p>
    </div>
</template>

<script>
import {eventBus} from '../main'
    export default {
        props:{
            name: String,
            resetFn: Function,
            counter:Number
        },
        methods:{
            switchName(){
                return this.name.split('').reverse().join("");
            },
            resetName(){
                this.name = 'Yatin';
                this.$emit('nameWasReset',this.name)
            }
        },
        created(){
            eventBus.$on('onCounterUpdate',(data)=>{
                this.counter = data;
            });
        }
    }
</script>
<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
