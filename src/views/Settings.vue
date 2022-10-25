<template>
  <div class="settings">
    <Layout title="Dados do usuário">
      <template #content>
        <div class="settings--user">
          <p class="settings--description">
            Você pode alterar apenas o seu nome de usuário. Caso necessite a
            troca de senha, será necessário efetuar logoff e ir em "Esqueci
            minha senha".
          </p>

          <button
            v-if="stateUser === false"
            class="settings--user__state"
            @click="stateUser = true"
          >
            Editar
          </button>
          <div class="settings--user__input">
            <p class="label">Nickname</p>
            <input
              v-model="name"
              :disabled="stateUser === false"
              type="text"
              placeholder="Nome"
            />
          </div>
          <div class="settings--user__input">
            <p class="label">E-mail</p>
            <p>{{ email }}</p>
          </div>
          <div class="settings--user__input">
            <p class="label">Senha</p>
            <p>****</p>
          </div>
        </div>

        <div v-if="isProfessional === true" class="settings--professional">
          <hr class="" />
          <button
            v-if="stateProfessional === false"
            class="settings--user__state"
            @click="stateProfessional = true"
          >
            Editar
          </button>
          <p class="settings--subtitle">Dados do profissional</p>
          <div class="settings--professional__input">
            <p class="label">CRM <span class="required">*</span></p>
            <input
              v-model="crm"
              v-mask="'CRM/AA ######'"
              :disabled="stateProfessional === false"
              type="text"
              placeholder="CRM/RS 123456"
            />
          </div>
          <div class="settings--professional__input">
            <p class="label">Contato</p>
            <input
              v-model="contact"
              v-mask="'(##) #####-####'"
              :disabled="stateProfessional === false"
              type="phone"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div class="settings--professional__input">
            <p class="label">Informações adicionais</p>
            <textarea
              v-model="description"
              :disabled="stateProfessional === false"
              type="text"
              rows="5"
              maxlength="250"
            />
            <p
              v-if="stateProfessional === true"
              style="text-align: right; font-size: 12px"
            >
              {{ description.length }} / 250 caracteres
            </p>
          </div>
        </div>

        <div class="settings--save">
          <button div="submit" @click="updateUserData()">SALVAR</button>
        </div>

        <div class="settings--delete">
          <button @click="deleteUser()">Excluir usuário</button>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import axios from "axios";
import Cookie from "js-cookie";
import Layout from "../components/_base/patterns/template/Layout";

export default {
  name: "Settings",

  components: {
    Layout,
  },

  data() {
    return {
      /** Dados do formulário */
      name: "",
      email: "",
      crm: "",
      description: "",
      contact: "",
      isProfessional: false,

      /** Status botões editar */
      stateUser: false,
      stateProfessional: false,
    };
  },

  created() {
    this.getDataUser();
  },

  methods: {
    /** Lista todos os profissionais */
    getDataUser() {
      const id = Cookie.get("id");

      axios.get(`https://api-auxilium.herokuapp.com/user/${id}`).then((res) => {
        const data = res.data.user;
        this.name = data.name;
        this.email = data.email;
        this.isProfessional = data.professional;

        if (this.isProfessional) {
          this.crm = data.crm;
          this.contact = data.contact;
          this.description = data.description;
        }
      });
    },

    /**
     * Método de atualização de dados do usuário
     */
    updateUserData() {
      const id = Cookie.get("id");

      const data = {
        name: this.name,
        crm: this.crm,
        contact: this.contact,
        description: this.description,
      };

      axios
        .put(`https://api-auxilium.herokuapp.com/user/${id}`, data)
        .then((res) => {
          if (res) {
            this.$bus.$emit("show-alert-chip", {
              message: "Usuário editado com sucesso.",
            });

            this.stateProfessional = false;
            this.stateUser = false;
          }
        });
    },

    /** Excluir conta */
    deleteUser() {
      const id = Cookie.get("id");

      axios.delete(`https://api-auxilium.herokuapp.com/user/${id}`).then(() => {
        this.$bus.$emit("show-alert-chip", {
          message: "O usuário foi deletado com sucesso.",
        });

        Cookie.remove("aux_token");
        Cookie.remove("user");
        Cookie.remove("id");
        this.$router.push({ name: "Login" });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.settings {
  &--description {
    font-size: 18px;
  }

  &--subtitle {
    font-weight: bold;
    font-size: 18px;
  }

  &--user {
    width: 700px;
    margin-left: auto;
    margin-right: auto;

    &__state {
      float: right;
      border: none;
      color: #008eaa;
      font-weight: bold;
      font-size: 18px;
    }

    &__input {
      margin-bottom: 15px;

      .label {
        font-size: 16px;
        text-align: left;
      }

      .required {
        color: red;
      }

      input {
        width: 100%;
        padding: 15px 10px;
        border: none;
        border-radius: 0;
      }
      input::placeholder {
        font-size: 14px;
      }
    }
  }

  &--professional {
    width: 700px;
    margin-left: auto;
    margin-right: auto;

    &__input {
      margin-bottom: 15px;

      .label {
        font-size: 16px;
        text-align: left;
      }

      .required {
        color: red;
      }

      input {
        width: 100%;
        padding: 15px 10px;
        border: none;
        border-radius: 0;
      }
      input::placeholder {
        font-size: 14px;
      }

      textarea {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 0;
        resize: none;
      }
    }
  }

  &--delete {
    text-align: right;
    margin-top: 50px;

    button {
      padding: 5px 10px;
      font-weight: bold;
      background: none;
      border: 2px solid #f20000;
      color: #f20000;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &--save {
    width: 200px;
    margin: 60px auto 20px auto;
    margin-left: auto;
    margin-right: auto;

    button {
      width: 200px;
      padding: 20px 5px;
      font-size: 14px;
      border: none;
      background-color: #3f3e9a;
      color: white;
      border-radius: 0px;
      font-weight: 600;

      &:hover {
        background: #008eaa;
      }
    }
  }
}
</style>
