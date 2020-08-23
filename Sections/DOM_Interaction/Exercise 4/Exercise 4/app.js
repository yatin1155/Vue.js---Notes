new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    userClass: '',
    isVisible: true
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(()=>{
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      },1000)
    }
  }
});
