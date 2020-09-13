<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="text" id="email" class="form-control" v-model.lazy="userData.email"/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model.lazy="userData.password"/>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" class="form-control" v-model.number="userData.age"/>
          </div>
        
            <app-switch
           v-model="dataSwitch"
            ></app-switch>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label>
          <br />
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea id="message" rows="5" class="form-control" v-model.lazy="message"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input type="checkbox" id="sendmail" value="SendMail" 
              v-model="sentMail"/> Send Mail
            </label>
            <label for="sendInfomail">
              <input type="checkbox" id="sendInfomail" value="SendInfoMail" 
              v-model="sentMail"/> Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input type="radio" id="male" value="Male" 
            v-model="gender"/> Male
          </label>
          <label for="female">
            <input type="radio" id="female" value="Female" 
            v-model="gender"/> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select id="priority" class="form-control" v-model="selectedPriority">
            <option v-for="item in priority">{{item}}</option>
          </select>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary"
          @click.prevent="submitted">Submit!</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if='isSumbitted'>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{userData.email}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Age: {{userData.age}}</p>
            <p>Message: {{message}}</p>
            <p>
              <strong>Send Mail?</strong>
            </p>
            <ul>
              <li v-for="items in sentMail">{{items}}</li>
            </ul>
            <p>Gender: {{gender}}</p>
            <p>Priority: {{selectedPriority}}</p>
            <p>Switched: {{dataSwitch}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './Switch.vue'
export default {
  data() {
    return {
      userData: {
          email: '',
          password: '',
          age: 27
      },
      message:'',
      sentMail: [],
      gender: 'Male',
      priority: ['High',"Low",'Urgent'],
      selectedPriority: 'Low',
      dataSwitch: true,
      isSumbitted: false
    };
  },
  components:{
      AppSwitch: Switch
  },
  methods:{
      submitted(){
          this.isSumbitted = true;
      }
  }
};
</script>

<style>
</style>
