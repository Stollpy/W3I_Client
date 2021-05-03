<template>
  <div class="drop-zone">
    <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
name: "DropZone",
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
        url: `${this.$store.state.API_BASE_URL}/upload/public`,
        //thumbnailWidth: 150,
        //maxFilesize: 0.5,
        headers: {
          "Content-type" : "application/json; multipart/form-data",
          "Authorization": `Bear ${this.$store.state.token}`
        }
      }
    }
  }
}
</script>

<style scoped>

</style>