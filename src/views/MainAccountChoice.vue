<template>
<div class="main-account-choice">
  <v-container  v-if="loading == false">
    <v-row justify="center">
      <v-col cols="12">
          <h1 class="text-h5 text-center">Bonjour {{ data.firstname }}</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <p class="text-overline text-center" v-if="data.main_accounts">Pour commencer, choissi un compte principal ou ajoute en un nouveau :</p>
        <p class="text-overline text-center" v-else>Pour commencer, ajoute un compte principal</p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="12">
            <v-select v-model="mainAccount" v-if="data['main_accounts']" label="choisis un compte principal" :items="data['main_accounts']" item-text="pseudo" item-value="id" class="text-center"></v-select>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-btn color="primary" @click="choiceAccount">
              <span>Choissir</span>
              <v-icon>
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn color="secondary" text class="text-start">
              <span>Ajouter un nouveau compte</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
export default {
  name: "MainAccountChoice",
  data: () => ({
    loading: false,
    data: null,
    mainAccount: null,
  }),
  async mounted(){
    this.loading = true;
    try{
      const OPTIONS = {
        headers: {'Authorization' : `Bearer ${this.$store.state.token}`},
      }
      const res = await fetch(`${this.$store.state.API_BASE_URL}/home`, OPTIONS);
      const data = await res.json();

      if(data.code == 401){
        return this.$router.push({ name: 'Home' });
      }

      console.log(data);
      this.data = data;
      this.loading = false;

    }catch (e) {
      console.log(e);
    }
  },
  methods: {
      choiceAccount: function () {
        sessionStorage.setItem('id_main_account_session', this.mainAccount);
        this.$router.push({ name: 'AddMedia' });
      }
  }

}
</script>

<style scoped>

</style>