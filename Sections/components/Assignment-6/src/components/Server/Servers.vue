<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group" >
      <app-server v-for="obj in servers" :server='obj'></app-server>
    </ul>
  </div>
</template>

<script>
import server from './Server.vue'
export default {
  data() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" }
      ]
    };
  },
  components: {
    'app-server':server
  }
};
</script>