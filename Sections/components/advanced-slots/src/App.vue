<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button  @click="isSelected = 'appQuotes'">Quote</button>
        <button  @click="isSelected = 'appAuthor'">Author</button>
        <button  @click="isSelected = 'appNew'">New</button>
        
          <keep-alive>
            <component :is='isSelected'>
              <h1 slot="title">The Quote</h1>
              <p slot="content">The Wonderful Quote!</p>
            </component>
          </keep-alive>
        <!-- ### Slot implementation
        <app-quotes>
          <h1 slot="title">The Quote</h1>
          <p slot="content">The Wonderful Quote!</p>
        </app-quotes> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import New from "./components/New.vue";
import Author from "./components/Author.vue";
export default {
  data() {
    return {
      isSelected : 'appQuotes'
    };
  },
  components: {
    appQuotes: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style scoped>
</style>