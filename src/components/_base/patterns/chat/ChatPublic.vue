<template>
  <div class="chat">
    <iframe
      src="https://public-chat-auxilium.herokuapp.com/"
      width="100%"
      height="600px"
      frameborder="0"
      id="chat-public"
    ></iframe>
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
#chat-public {
  &::v-deep {
    overflow: hidden;
  }
}
</style>
