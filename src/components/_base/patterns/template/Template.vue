<template>
  <div class="template">
    <div class="template--container">
      <div class="template--container__title">
        <h1>{{ title }}</h1>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Template",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.template {
  display: flex;
  height: auto;

  &--container {
    width: 80%;
    padding: 50px 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    background: #ececec;

    &__title {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
      width: 700px;
    }
  }
}
</style>
