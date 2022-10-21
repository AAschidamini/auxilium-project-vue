<template>
  <div class="home">
    <Menu />
    <ChatPublic />
  </div>
</template>

<script>
import Menu from "../components/_base/patterns/menu/Menu";
import ChatPublic from "../components/_base/patterns/chat/ChatPublic";
export default {
  name: "Home",
  components: {
    Menu,
    ChatPublic,
  },
};
</script>
<style lang="scss" scoped></style>
