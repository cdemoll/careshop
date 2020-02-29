<template>


<v-app id="inspire">
    <v-content>
      <v-container class="fill-height brown lighten-5" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar dark flat>
                <v-toolbar-tittle>Login</v-toolbar-tittle>
              </v-toolbar>



  <div id="login">
    
    <form>
      <label for="email">E-Mail Address</label>
      
      <div>
          <v-text-field>
        <input id="email" type="email" v-model="email" required autofocus />
        </v-text-field>
      </div>
      <div>
        <label for="password">Password</label>
        <div>
           <v-text-field>
          <input id="password" type="password" v-model="password" required />
          </v-text-field>
        </div>
      </div>
      <div>
        <button type="submit" @click="handleSubmit">
          Login
        </button>
      </div>
    </form>
   </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        this.$http
          .post("http://localhost:3000/login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            let is_admin = response.data.user.is_admin;
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.token);

            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                if (is_admin == 1) {
                  this.$router.push("admin");
                } else {
                  this.$router.push("dashboard");
                }
              }
            }
          })
          .catch(function(error) {
            console.error(error.response);
          });
      }
    }
  }
};
</script>
