<template>
  <div id="app">
    <div id="nav"></div>
    <img src="./assets/logo-car.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      devAccount: {
        username: "test",
        password: "test"
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
