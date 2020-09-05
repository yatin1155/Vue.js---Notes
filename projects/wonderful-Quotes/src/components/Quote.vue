<template>
  <div class="child" index='index' @click="deleteQuote(index,$event)">{{quote}}</div>
</template>

<script>
import {eventBus} from '../main';
export default {
  props: ["quote",'index'],
  methods:{
    deleteQuote(index,$event){
        eventBus.$emit('deleteQuote',index);
    }
  }
};
</script>

<style scoped>
.child {
  border: 1px solid black;
  width: max-content;
  padding: 15px;
  font-size: 25px;
  display: inline-block;
  margin: 10px;
  font-family: Arizonia;
}

.child:hover{
    background-color: #ffcdd2;
    cursor: pointer;
}
</style>