<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{name}}</p>
        <p>Reversed Name: {{switchName()}}</p>
        <button @click="resetName">RESET Name</button>
        <button @click="resetFn()">RESET Name</button>
    </div>
</template>

<script>
    export default {
        props:{
            name: String,
            resetFn: Function
        },
        methods:{
            switchName(){
                return this.name.split('').reverse().join("");
            },
            resetName(){
                this.name = 'Yatin';
                this.$emit('nameWasReset',this.name)
            }
        }
    }
</script>
<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
