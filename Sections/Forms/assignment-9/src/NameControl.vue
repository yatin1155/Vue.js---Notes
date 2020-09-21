<template>
  <div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" class="form-control" v-model="firstName" @blur="updateName"/>
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" class="form-control" v-model="lastName" @blur="updateName"/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      firstName: '',
      lastName : ''
    }
  },
  methods: {
    updateName(){
      var fullName = this.firstName +' '+ this.lastName;
      this.$emit('getFullName',fullName);
    },
  },
  created(){

  }
};
</script>

<style scoped>
</style>