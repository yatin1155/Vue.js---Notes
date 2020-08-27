<template>
  <div class="row">
    <app-server></app-server>

    <app-server-info></app-server-info>
  </div>
</template>

<script>
import ServersVue from './Servers.vue'
import ServerInfoVue from './ServerInfo.vue'
export default {
    components:{
        'app-server': ServersVue,
        'app-server-info': ServerInfoVue
    }
}
</script>