<template>
<div>
    <app-Server-Status v-for="server in 5"></app-Server-Status>
</div>
</template>


<script>
import ServerStatus from './ServerStatus.vue';

export default {
    components:{
        'app-Server-Status': ServerStatus
    }
}
</script>
