<template>
  <Layout title="Chats">
    <template #content>
      <div class="chats">
        <p class="chat-pvt" @click="actionOpenChatPvt()">
          Chat com profissional
        </p>

        <div v-if="professional === 'false'" class="mt-4">
          <p class="chat-pbl" @click="openChatPbl()">Chat público</p>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Cookie from "js-cookie";
import axios from "axios";

import Layout from "../../components/_base/patterns/template/Layout.vue";

export default {
  name: "Chats",

  components: {
    Layout,
  },

  data() {
    return {
      professional: "",
    };
  },

  created() {
    this.professional = Cookie.get("type_user");
  },

  methods: {
    actionOpenChatPvt() {
      this.$loading(true);

      if (this.professional === "false") {
        const id = Cookie.get("id");
        const status = {
          statusChat: true,
        };

        axios
          .put(`https://api-auxilium.herokuapp.com/user/chat/${id}`, status)
          .then((res) => {
            if (res) {
              this.$loading(false);
              this.$router.push({
                path: `/professional-chat`,
              });
            }
          });
      } else {
        this.$loading(false);
        this.$router.push({
          path: `/professional-chat`,
        });
      }
    },

    openChatPbl() {
      this.$router.push({ name: "Public Chat" });
    },
  },
};
</script>
<style lang="scss" scoped>
.chats {
  .chat-pvt {
    width: 50%;
    font-size: 24px;
    text-align: center;
    color: white;
    background: #008eaa;
    padding: 60px 40px;
    transition: 0.6s;
    cursor: pointer;
    margin: 0;
    margin-left: auto;
    margin-right: auto;

    &:hover {
      background: #3f3e9a;
    }
  }
  .chat-pbl {
    width: 50%;
    text-align: center;
    font-size: 24px;
    color: white;
    background: #008eaa;
    padding: 60px 40px;
    transition: 0.6s;
    cursor: pointer;
    margin: 0;
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;

    &:hover {
      background: #3f3e9a;
    }
  }
}

@media screen and (max-width: 700px) {
  .chats {
    .chat-pvt {
      width: 100%;
    }
    .chat-pbl {
      width: 100%;
    }
  }
}
</style>
