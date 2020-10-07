export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', "Cherry", "Banana", "Cheeku", "Mango"],
      filterText: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText)
      })
    }
  },
  created(){
      console.log("Created Mixin")
  }
}
