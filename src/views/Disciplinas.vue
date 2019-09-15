<template>
  <v-container>
    <v-data-table :headers="headers" :items="disciplinas" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Gerenciar Disciplinas</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <div class="flex-grow-1"></div>
          <v-btn @click="cadastrar">Cadastrar Disciplina</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.acao="{ item }">
        <v-icon small class="mr-2">mdi-pencil</v-icon>
        <v-icon small>mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    <form-disciplina
      :showDialog="dialog"
      :editedIndex="editedIndex"
      :editedItem="editedItem"
      @close="close"
    >
    </form-disciplina>
  </v-container>
</template>

<script>
import FormDisciplina from './FormDisciplina'

export default {
  components: {
    FormDisciplina
  },
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
      ],
      dialog: false,
      editedItem: { nome: "" },
      editedIndex: -1
    };
  },
  methods: {
    getDisciplinas() {
      this.axios.get(`${this.url}/disciplinas`).then(result => {
        console.log(result.data);
        this.disciplinas = result.data;
      });
    },
    initialize() {
      this.getDisciplinas();
    },
    cadastrar(){
      this.dialog = true;
    },
    editItem(item) {
      this.editedIndex = this.disciplinas.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },
    close(){
      this.dialog = false;
      this.editedIndex = -1;
      this.initialize();
    }
  },
  created() {
    this.initialize();
  }
};
</script>