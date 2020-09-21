<template>
  <div class="container">
    <div v-if="!isSumbitted">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <!-- Exercise 1 -->
                <!-- Create a Signup Form where you retrieve the following Information -->
                <!-- Full Name (First Name + Last Name) -->
                <!-- Mail -->
                <!-- Password -->
                <!-- Store Data? Yes/No -->

                <h1>User Info Form</h1>
                <hr />
                <name-control @getFullName = 'userData.fullName = $event'></name-control>

                <div class="form-group">
                    <label for="email">Mail</label>
                    <input type="email" id="email" class="form-control" v-model.lazy="userData.email" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" v-model.lazy="userData.password" />
                </div>
                <div>
                    <label for="Yes">Store Data :</label>
                    <label for="yes">
                    <input type="radio" id="yes" value="Yes" v-model.lazy="userData.storeData" /> Yes
                    </label>
                    <label for="no">
                    <input type="radio" id="no" value="No" v-model.lazy="userData.storeData" /> No
                    </label>
                </div>

                <!-- Exercise 2 -->
                <!-- Only display the Form if it has NOT been submitted -->
                <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                <!-- Exercise 3 -->
                <!-- Edit the Example from above and create a custom "Full Name" Control -->
                <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <button class="btn btn-primary"
                @click.prevent="onSubmit">Submit!</button>
                </div>
            </div>
        </form>
    </div>
    <hr />
    <div class="row" v-if="isSumbitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{userData.fullName}}</p>
            <p>Mail: {{userData.email}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Store in Database?: {{userData.storeData}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NameControl from './NameControl.vue'
export default {
  data() {
    return {
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        storeData: "Yes",
        fullName: ''
      },
      isSumbitted: false
    };
  },
  methods :{
      onSubmit(){
          this.isSumbitted = true;
      },
      updateFullName($event){
        this.userData.firstName = $event;
      }
  },
  components: {
      NameControl: NameControl
  },
  
};
</script>

<style>
</style>
