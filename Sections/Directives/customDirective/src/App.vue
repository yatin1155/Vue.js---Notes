<template>
  <div id="app">
    <h1>Custom Directives</h1>
    <hr/>
    <p v-highlight="'red'">Hello World</p>

    <p v-highlight:background="'green'">Hello World</p>

    <p v-highlight:background.delay="'yellow'">I am modifiers</p>

    <p v-local-highlight:background.delay="'yellow'">I am Local modifiers</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  directives :{
    'local-highlight':{
      bind(el, binding, vnode){
          // el.style.backgroundColor = 'pink';
          // el.style.backgroundColor = binding.value;

          var delay = 0;
          if(binding.modifiers['delay']){
            delay = 5000;
          }
          setTimeout(()=>{
            if(binding.arg == "background"){
              el.style.backgroundColor = binding.value;
            }else{
              el.style.color = binding.value;
            }
          },delay)
        
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
