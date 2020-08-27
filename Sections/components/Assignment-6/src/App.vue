<template>
    <div class="container">
        <app-Header></app-Header>
        <hr>
       <app-Server-Status></app-Server-Status>
        <hr>
        <app-Footer></app-Footer>
    </div>
</template>

<script>
import Header from './components/Shared/Header.vue';
import FooterVue from './components/Shared/Footer.vue';
import ServerStatusVue from './components/Server/ServerStatus.vue';
export default {
   
    components:{
        'app-Header': Header,
        'app-Footer': FooterVue,
        'app-Server-Status': ServerStatusVue
    }
}
</script>

<style>

</style>
