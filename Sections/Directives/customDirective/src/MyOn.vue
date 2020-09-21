<template>
    <div>
        <p v-customOn:click="alertMe">Click me</p>
    </div>
</template>

<script>
export default {
    directives:{
        "customOn":{
            bind(el, binding){
                const event = binding.arg;
                const fn = binding.value;
                el.addEventListener(event, fn);
                
            }
        }
    },
    methods:{
        alertMe(){
            alert("Hello");
        }
    }
}
</script>