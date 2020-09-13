<template>
  <div>
    <div id="on"
    @click="switched(true)"
    :class="{active:value}"
    >On</div>
    <div id="off"
    @click="switched(false)"
    :class="{active:!value}"
    >Off</div>
  </div>
</template>

<script>
export default {
    props:['value'],
    methods:{
        switched(isOn){
            this.$emit('input',isOn)
        }
    }
};
</script>

<style scoped>
#on,#off{
    width: 50px;
    height: 20px;
    border: 1px solid black;
    display: inline-block;
    background-color: lightgray;
    text-align: center;
    margin: -2px

}

#on:hover,#on.active {
    background-color: aqua;
}

#off:hover,#off.active {
    background-color: lightgreen;
}

</style>