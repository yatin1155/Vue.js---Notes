new Vue({
        el: '#exercise',
        data: {
            value:''
        },
        methods: {
            onClicked: function(){
                alert("Btn clicked");
            },
            onKeyup: function(event){
                this.value = event.target.value;
            }
        }
    });