<template>
  <div id="app">
  <page-header></page-header>
  <page-body></page-body>
  <page-footer></page-footer>
  </div>
</template>

<script>
import pageFooter from "./components/footer.vue";
import pageBody from "./components/body.vue";
import pageHeader from "./components/header.vue";

export default {
  name: "App",
  components: {
    pageFooter,
    pageBody,
    pageHeader
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
