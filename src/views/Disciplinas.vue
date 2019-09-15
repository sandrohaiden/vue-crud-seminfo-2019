<template>
  <v-container>
    <v-data-table :headers="headers" :items="disciplinas" class="elevation-1">
      <template v-slot:item.acao="{ item }">
        <v-icon small class="mr-2">mdi-pencil</v-icon>
        <v-icon small>mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      disciplinas: [],
      headers: [
        {
          text: "Código",
          value: "id"
        },
        {
          text: "Disciplina",
          value: "nome"
        },
        {
          text: "Ações",
          value: "acao"
        }
      ]
    };
  },
  methods: {
    getDisciplinas() {
      axios.get(`${this.url}/disciplinas`).then(result => {
        console.log(result.data);
        this.disciplinas = result.data;
      });
    },
    initialize() {
      this.getDisciplinas();
    }
  },
  created() {
    this.initialize();
  }
};
</script>