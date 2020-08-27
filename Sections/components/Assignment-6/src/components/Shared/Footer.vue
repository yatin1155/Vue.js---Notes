<template>
  <div class="row">
    <div class="col-xs-12">
      <footer>
        <p>{{footertext}}</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            footertext: 'All Servers are managed here'
        }
    }
}
</script>