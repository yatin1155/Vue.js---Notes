<template>
  <div>
    <h2>This is Author component</h2>
    <button @click="counter++">Counter++</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            counter:0
        }
    },
    destroyed(){
        console.log("Destroyed");
    },
    deactivated(){
        console.log("Deactivated");
    },
    activated(){
        console.log("Activated");
    }
};
</script>

<style scoped>
</style>