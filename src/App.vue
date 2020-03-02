<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <Navigation></Navigation>
      </div>
      <img src="./assets/logo-car.png" />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

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

  components: {
    Navigation: Navigation
  },

  mounted() {
    /* if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }*/
  },
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
  background-color: #e3e3e3;
}
</style>
