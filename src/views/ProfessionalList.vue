<template>
  <div class="home">
    <Menu />

    <Template title="Lista de profissionais">
      <template #content> teste </template>
    </Template>
  </div>
</template>

<script>
import axios from "axios";
import Menu from "../components/_base/patterns/menu/Menu";
import Template from "../components/_base/patterns/template/Template.vue";

export default {
  name: "ProfessionalList",
  components: {
    Menu,
    Template,
  },
  created() {
    this.getDataProfessional();
  },
  methods: {
    getDataProfessional() {
      axios
        .get("https://api-auxilium.herokuapp.com/professional/")
        .then((res) => {
          console.log(res.data);
        });
    },
  },
};
</script>
<style lang="scss" scoped></style>
