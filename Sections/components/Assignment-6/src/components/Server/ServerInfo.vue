<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="server">Server #{{server.id}}, Status:{{server.status}}</p>
    <p v-else>Server Details are currently not updated</p>
    <button v-if="server" @click="resetStatus()">Reset Status</button>
  </div>
</template>

<script>
import {eventBus} from '../../main'
export default {
  data(){
    return{
      server : null
    }
  },
  created(){
    eventBus.$on('serverSelected',(server)=>{
      this.server = server;
    })
  },
  methods:{
    resetStatus(){
      this.server.status = 'Normal';

    }
  }
};
</script>