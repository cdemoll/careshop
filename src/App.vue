<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <Navigation></Navigation>
        <router-link
          v-if="authenticated"
          to="/login"
          v-on:click.native="logout()"
          replace
          >Logout</router-link
        >
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

  Navigation:Navigation
},

  mounted() {
<<<<<<< HEAD
    if(!this.authenticated) {
      this.$router.push({ name: "login", query: {redirect: '/login'} });
    }
=======
    /* if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }*/
>>>>>>> Goulou2
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #e3e3e3;
}
</style>
