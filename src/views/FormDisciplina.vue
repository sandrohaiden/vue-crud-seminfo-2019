<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-text-field v-model="item.nome" label="Nome"></v-text-field>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
        <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "form-disciplina",
  data() {
    return {
      dialog: this.showDialog,
      item: this.editedItem,
      index: this.editedIndex
    };
  },
  props: {
    showDialog: {
      type: Boolean
    },
    editedItem: {
      type: Object
    },
    editedIndex: {
      type: Number
    }
  },
  methods: {
    close() {
      this.dialog = false;
      this.$emit("close");
    },
    save() {
      if (this.editedIndex > -1) {
        this.axios
          .patch(`${this.url}/disciplinas/${this.editedItem.id}`, this.editedItem)
          .then(result => {
            console.log(result);
          });
      } else {
        this.axios
          .post(`${this.url}/disciplinas`, this.editedItem)
          .then(result => {
            console.log(result);
          });
      }
      this.$emit("close");
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Cadastrar Disciplina"
        : "Editar Disciplina";
    }
  },
  watch: {
    showDialog: function() {
      console.log("alterou estado");
      this.dialog = this.showDialog;
    },
    editedItem: function() {
      this.item = Object.assign({}, this.editedItem);
    }
  }
};
</script>