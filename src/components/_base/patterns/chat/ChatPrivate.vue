<template>
  <div>
    <iframe
      src="https://private-chat-auxilium.herokuapp.com/"
      width="100%"
      height="600px"
      frameborder="0"
      id="chat-private"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "ChatPrivate",
};
</script>
<style lang="scss" scoped>
#chat-private {
  &::v-deep {
    overflow: hidden;
  }
}
</style>
