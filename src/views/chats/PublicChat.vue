<template>
  <Layout title="Chat público" id="template">
    <template #content>
      <ChatPublic />
    </template>
  </Layout>
</template>

<script>
import Layout from "../../components/_base/patterns/template/Layout.vue";
import ChatPublic from "../../components/_base/patterns/chat/ChatPublic";

export default {
  name: "PublicChat",
  components: {
    ChatPublic,
    Layout,
  },

  created() {
    this.$loading(true);

    setTimeout(() => this.$loading(false), 9000);
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 700px) {
  #template {
    &::v-deep {
      .template--container {
        padding: 30px 5px;
      }
    }
  }
}
</style>
