<template>
  <Layout title="Chat profissional" id="template">
    <template #content>
      <div class="pvt">
        <!-- SAIR DO CHAT -->

        <div v-if="professional === 'true'" class="pvt--return">
          <router-link :to="{ name: 'Chats' }">Voltar</router-link>
        </div>

        <!-- DADOS PARA O PROFISSIONAL CONECTAR -->
        <div v-if="professional === 'true'" class="pvt--info-professional">
          <p class="pvt--info-professional-title">
            Escolha um dos usuários online e insira o código no campo "Código"
            para realizar o atendimento. No campo nome você insere o seu
            <u>NOME COMPLETO</u>
          </p>
          <p class="pvt--info-professional-subtitle">Usuários online:</p>

          <div class="pvt--info-professional_list">
            <!-- LISTA DE USUÁRIOS ONLINE -->
            <div
              v-for="(user, i) in users"
              :key="i"
              class="pvt--info-professional_list-data"
            >
              <p>
                Código da sala: <b>{{ user.id }}</b>
              </p>
              <hr />
            </div>

            <p v-if="users.length < 1" class="not-found">
              ---- Sem usuários online no momento ----
            </p>

            <!-- REFRESH -->
          </div>
          <div class="pvt--info-professional_list-refresh">
            <p @click="getUsersOnline()">Atualizar lista</p>
          </div>
        </div>

        <!-- DADOS PARA O USUÁRIO PACIENTE CONECTAR -->
        <div v-else class="pvt--info-users">
          <p class="pvt--info-users-title">
            Preencha os campos conforme os dados abaixo:
          </p>
          <p class="pvt--info-users-subtitle">
            <b>OBS:</b> Para conseguir falar com um profissional, é importante
            inserir o código correto no campo <b>Código</b>.
          </p>
          <div class="pvt--info-users-data">
            <p>Seu nome / apelido <b>(Você escolhe)</b></p>
            <p>
              Código da sala: <b> {{ id }}</b>
            </p>
          </div>
        </div>

        <div v-if="professional === 'false'" class="pvt--finish">
          <p @click="removeStatusOnline()">Finalizar atendimento</p>
        </div>

        <div class="pvt--chat">
          <ChatPrivate />
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Cookie from "js-cookie";
import axios from "axios";

import Layout from "../../components/_base/patterns/template/Layout";
import ChatPrivate from "../../components/_base/patterns/chat/ChatPrivate";

export default {
  name: "PrivateChat",
  components: {
    ChatPrivate,
    Layout,
  },
  data() {
    return {
      professional: false,
      id: "",
      users: [],
    };
  },

  created() {
    this.$loading(true);
    this.professional = Cookie.get("type_user");

    this.id = Cookie.get("id");

    if (this.professional === "true") {
      this.getUsersOnline();
    }

    setTimeout(() => this.$loading(false), 9000);
  },

  methods: {
    getUsersOnline() {
      this.$loading(true);

      this.users = [];

      axios.get("https://api-auxilium.herokuapp.com/user/").then((res) => {
        this.$loading(false);

        const item = res.data.user;

        item.forEach((val) => {
          if (val.statusChat === true) {
            this.users.push({
              id: val._id,
            });
          }
        });
      });
    },

    removeStatusOnline() {
      this.$loading(false);

      const id = Cookie.get("id");

      const status = {
        statusChat: false,
      };

      axios
        .put(`https://api-auxilium.herokuapp.com/user/chat/${id}`, status)
        .then((res) => {
          if (res) {
            this.$loading(false);

            this.$bus.$emit("show-alert-chip", {
              message: "Atendimento finalizado!",
            });

            this.$router.push({ name: "Chats" });
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.pvt {
  &--finish {
    font-size: 20px;
    color: white;

    p {
      padding: 5px;
      text-align: center;
      background-color: #000;
      margin: 0;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: #008eaa;
      }
    }
  }

  &--return {
    margin-bottom: 30px;
    text-decoration: none;
    font-size: 18px;
  }

  &--info-professional {
    width: 100%;

    &-title {
      font-weight: 600;
      margin-bottom: 4px;
    }

    &-subtitle {
      font-size: 14px;
      margin-bottom: 4px;
    }

    &_list {
      background: white;
      height: 200px;
      padding: 10px;
      overflow: auto;

      .not-found {
        text-align: center;
        font-size: 20px;
      }

      &-data {
        font-size: 14px;
        margin-bottom: 5px;
        p {
          margin: 0;
        }
      }

      &-refresh {
        p {
          text-align: center;
          color: white;
          padding: 10px 20px;
          background: #000;
          transition: 0.3s;
          cursor: pointer;

          &:hover {
            background: #008eaa;
          }
        }
      }
    }
  }

  &--info-users {
    &-title {
      font-weight: bold;
      margin-bottom: 4px;
    }

    &-subtitle {
      font-size: 14px;
      margin-bottom: 5px;
    }

    &-data {
      p {
        font-size: 14px;
        margin-bottom: 5px;
        margin: 0;
        background: #3f3e9a;
        color: white;
        padding: 5px;

        text-align: center;
      }
    }
  }
}

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
