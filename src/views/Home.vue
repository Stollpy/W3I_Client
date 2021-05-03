<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-center">Veuillez vous authentifier</h1>
        </v-col>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Votre e-mail" v-model="log.email"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Votre mot de passe" type="password" v-model="log.password"></v-text-field>
          </v-col>
          <v-col>
            <v-btn color="primary" @click="login">
              <span class="mr-2">Me connecter</span>
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-row>
      <v-row v-if="snackbar.display">
        <Snackbar :snackbar="snackbar" />
      </v-row>
    </v-container>
  </div>
</template>

<script>

import Snackbar from "../components/Snackbar";

export default {
  name: 'Home',
  components: {
    Snackbar
  },
  data: () => ({
    log: {
      email: null,
      password: null
    },
    snackbar: {
      display: false,
      content: null,
      color: null,
    }
  }),
  methods:{
    login: async function(){
      try{
        const OPTIONS = {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(this.log)
        }

        const res = await fetch(`${this.$store.state.API_BASE_URL}/login`, OPTIONS);
        const data = await res.json();

        if(data.code == 401){
          this.snackbar = {
            display: true,
            content: data.message,
            color: 'red darken-3'
          }

          setTimeout(function () {
            this.snackbar = {
              display: false,
              content: null,
              color: null
            }
          }, 3000)

        }else{

          this.$store.state.token = data.token;
          sessionStorage.setItem('jwt', data.token);
          this.snackbar = {
            display: true,
            content: 'Vous êtes désormais connêcter',
            color: 'green darken-1'
          };
          setTimeout(() => {

            this.snackbar = {
              display: false,
              content: null,
              color: null
            };

            this.$router.push({ name: 'MainAccountChoice' });

          }, 3000);

        }
      }catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
