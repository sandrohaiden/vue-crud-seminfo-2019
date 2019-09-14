<template>
  <v-app-bar app>
    <v-toolbar-title>SEMINFO 2019</v-toolbar-title>

    <div class="flex-grow-1"></div>

    <v-toolbar-items>
      <v-btn text to="/professores">PROFESSORES</v-btn>
      <v-btn text to="/disciplinas">DISCIPLINAS</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar"
};
</script>