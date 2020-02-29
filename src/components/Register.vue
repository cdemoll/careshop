<template>
  <div>
    
<v-app id="inspire">
    <v-content>
      <v-container class="fill-height brown lighten-5" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar dark flat>
                <v-toolbar-tittle>REGISTER</v-toolbar-tittle>
              </v-toolbar>



    
    <form>
     
      <label for="name">Name</label>
      <v-text-field>
      <div>
        <input id="name" type="text" v-model="name" required autofocus />
      </div>
      </v-text-field>
      <label for="email">E-Mail Address</label>
       <v-text-field>
      <div>
        <input id="email" type="email" v-model="email" required />
      </div>
      </v-text-field>
      <label for="password">Password</label>
      <v-text-field>
      <div>
        <input id="password" type="password" v-model="password" required />
      </div>
      </v-text-field>
      <label for="password-confirm">Confirm Password</label>
      <v-text-field>
      <div>
        <input
          id="password-confirm"
          type="password"
          v-model="password_confirmation"
          required
        />
      </div>
       </v-text-field>
      <label for="password-confirm">Is this an administrator account?</label>
      <v-text-field>
      <div>
        <select v-model="is_admin">
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>
       </v-text-field>
      <div>
        <button type="submit" @click="handleSubmit">Register</button>
      </div>
    </form>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</v-app>





  </div>
</template>

<script>
export default {
  props: ["nextUrl"],
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      if (
        this.password === this.password_confirmation &&
        this.password.length > 0
      ) {
        let url = "http://localhost:3000/register";
        if (this.is_admin == 1) url = "http://localhost:3000/register-admin";
        this.$http
          .post(url, {
            name: this.name,
            email: this.email,
            password: this.password,
            is_admin: this.is_admin
          })
          .then(response => {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.token);

            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                this.$router.push("/");
              }
            }
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        this.password = "";
        this.passwordConfirm = "";

        return alert("Passwords do not match");
      }
    }
  }
};
</script>
