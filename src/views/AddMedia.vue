<template>
<div class="addMedia">
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 text-center">Marketing via compte fan</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
          <v-form class="elevation-5 rounded">
            <v-select  v-model="form.id_fan" label="Choissisez un compte fan" :items="data['fan_account']" item-text="pseudo" item-value="id" class="pa-5"></v-select>
            <v-select multiple v-model="form.locations" label="Choissisez des localisations" class="pa-5" :items="data['locations']" item-text="name" item-value="locationId"></v-select>
            <DropZone />
            <v-textarea  v-model="form.media.description" class="pa-5" label="Votre description"></v-textarea>
            <v-btn color="primary" class="pa-5 ml-3 mb-3" @click="addMedia">
              <span>Upload votre contenu </span>
              <v-icon class="ml-4">
                mdi-cloud-upload
              </v-icon>
            </v-btn>
          </v-form>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import DropZone from "../components/DropZone";

export default {
  name: "AddMedia",
  components: {
    DropZone
  },
  data: () => ({
      form: {
        media: {
          description: null,
          url: false,
        },
        id_fan: null,
        locations: null,
      },
      data: null,
  }),
  async mounted(){
    try{
      const OPTIONS = {
        headers: {'Authorization' : `Bearer ${this.$store.state.token}`},
      }
      const res = await fetch(`${this.$store.state.API_BASE_URL}/media`, OPTIONS);
      const data = await res.json();
      this.data = data;
    }catch (e) {
      console.log(e);
    }

  },
  methods: {
    test: function () {
      console.log(this.file)
    },

    addMedia: async function (){

      console.log(this.form);
      try{
        const OPTIONS = {
          method: 'POST',
          headers: {
            'Authorization' : `Bearer ${this.$store.state.token}`
          },
          body: JSON.stringify(this.form)
        };
        const res = await fetch(`${this.$store.state.API_BASE_URL}/media/upload`, OPTIONS);
        const data = await res.json();
        if(data.code == 401){
          this.$router.push({name: 'Home'});
        }
        console.log(data);
      }catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>

</style>