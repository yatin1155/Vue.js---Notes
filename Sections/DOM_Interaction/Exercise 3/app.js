new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result : function(){
                return (this.value >= 37 ? 'Done':'Not yet there...');
            }
        },
        watch: {
            result : function(v){
               var vm = this;
               setTimeout(function(){
                   vm.value = 0;
               },5000);
            }
        }
    });