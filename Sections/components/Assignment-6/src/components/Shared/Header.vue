<template>
    <div class="row">
       <div class="col-xs-12">
            <header>
                <h1>{{headerName}}</h1>
            </header>    
        </div>     
    </div>
</template>

<script>
export default {
    data(){
        return{
            headerName: 'Server Status'
        };
    }
}
</script>
<style scoped>
    div{
        border: 1px solid red;
    }
</style>