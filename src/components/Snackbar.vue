<template>
<div class="snackbar">
  <v-snackbar
      v-model="snackbar.display"
  >
    {{ snackbar.content }}

    <template v-slot:action="{ attrs }">
      <v-btn
          :color="snackbar.color"
          text
          v-bind="attrs"
          @click="snackbar.display = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</div>
</template>

<script>
export default {
  name: "Snackbar",
  props : {
    snackbar : Object
  }
}
</script>

<style scoped>

</style>