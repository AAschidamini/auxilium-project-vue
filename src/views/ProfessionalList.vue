<template>
  <div class="home">
    <Menu />

    <Template title="Lista de profissionais">
      <template #content> teste </template>
    </Template>
  </div>
</template>

<script>
import Menu from "../components/_base/patterns/menu/Menu";
import Template from "../components/_base/patterns/template/Template.vue";
export default {
  name: "ProfessionalList",
  components: {
    Menu,
    Template,
  },
};
</script>
<style lang="scss" scoped></style>
