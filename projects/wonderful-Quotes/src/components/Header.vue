<template>
  <div>
    <h3>Quotes Added</h3>
    <div class="info">
      <div class="status" :style="{width:(size/maxSize)*100+'%'}">{{size}}/{{maxSize}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["size", "maxSize"]
};
</script>

<style scoped>
.info {
  border: 1px solid;
  /* padding: 5px; */
  text-align: center;
  margin: 20px 0px;
}

.status {
  background-color: #1976d2;
  color: #00bcd4;
  font-size: 20px;
  width: 0%;
}
</style>