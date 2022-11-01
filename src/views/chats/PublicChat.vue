<template>
  <Layout title="Chat público">
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
};
</script>
<style lang="scss" scoped></style>
