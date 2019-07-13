<template>
  <div id="app" class="app">
    <JwtEcdsaDemo />
  </div>
</template>

<script>
import JwtEcdsaDemo from "./components/JwtEcdsaDemo";

export default {
  name: "app",
  components: {
    JwtEcdsaDemo
  }
};
</script>

<style>
#app {
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1.1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: MidnightBlue;
  line-height: 1.6;
}
</style>
