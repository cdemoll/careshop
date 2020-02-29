<template>
  <v-app id="inspire">
    <div id="site">
      <!-- <NavBar /> -->
      <v-content>
        <img src="./assets/logo-car.png" />
        <router-view />
      </v-content>
    </div>
  </v-app>
</template>

<script>
//import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {},
  data() {
    return {
      authenticated: false,
      devAccount: {
        username: "test",
        password: "test"
      }
    };
  },
  mounted() {
    if(!this.authenticated) {
      this.$router.push({ name: "login", query: {redirect: '/login'} });
    }
  },
  methods: {
    /*  setAuthenticated(status) {
      this.authenticated = status;
    },*/
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style>
#site {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e3e3e3;
}
</style>
