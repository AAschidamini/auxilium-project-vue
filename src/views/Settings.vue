<template>
  <div class="settings">
    <Menu />
    <Template title="Dados do usuário">
      <template #content>
        <div class="settings--user">
          <p class="settings--description">
            Você pode alterar apenas o seu nome de usuário. Caso necessite a
            troca de senha, será necessário efetuar logoff e ir em "Esqueci
            minha senha".
          </p>
          <div class="settings--user__input">
            <p class="label">Nome completo <span class="required">*</span></p>
            <input v-model="name" type="text" placeholder="Nome" required />
          </div>
          <div class="settings--user__input">
            <p class="label">E-mail <span class="required">*</span></p>
          </div>
          <div class="settings--user__input">
            <p class="label">Senha <span class="required">*</span></p>
          </div>
        </div>

        <div class="settings--professional">
          <hr class="" />
          <p class="settings--subtitle">Dados do profissional</p>
          <div class="settings--professional__input">
            <p class="label">CRM <span class="required">*</span></p>
            <input
              v-model="crm"
              v-mask="'CRM/AA ######'"
              type="text"
              placeholder="CRM/RS 123456"
            />
          </div>
          <div class="settings--professional__input">
            <p class="label">Contato</p>
            <input
              v-model="contact"
              v-mask="'(##) #####-####'"
              type="phone"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div class="settings--professional__input">
            <p class="label">Informações adicionais</p>
            <textarea
              v-model="description"
              type="text"
              rows="5"
              maxlength="250"
              placeholder="Área de especialização, forma de atendimento, etc.."
            />
            <p style="text-align: right; font-size: 12px">
              {{ description.length }} / 250 caracteres
            </p>
          </div>
        </div>

        <div class="settings--save">
          <button div="submit" @click="actionRegister()">SALVAR</button>
        </div>
      </template>
    </Template>
  </div>
</template>

<script>
import axios from "axios";
import Menu from "../components/_base/patterns/menu/Menu";
import Template from "../components/_base/patterns/template/Template";

export default {
  name: "Settings",
  data() {
    return {
      /** Dados do formulário */
      name: "",
      email: "",
      crm: "",
      description: "",
      contact: "",
    };
  },
  components: {
    Menu,
    Template,
  },
  created() {
    this.getDataProfessional();
  },
  methods: {
    getDataProfessional() {
      axios
        .get("https://api-auxilium.herokuapp.com/professional/")
        .then((res) => {
          console.log(res.data);
        });
    },
    /**
     * Método de atualização de dados do usuário
     * @param {String} name Nome do usuário
     * @param {String} email Email do usuário
     * @param {String} password Senha do usuário
     * @param {Boolean} type se o usuário é profissional ou não
     *
     * @return Response
     */
    updateUserData() {
      axios
        .put("https://api-auxilium.herokuapp.com/user/register", {
          name: this.name,
        })
        .then((res) => {
          if (res) {
            this.showSucessAlert = true;

            this.$router.push({ name: "Login" });
          }
        })
        .catch(() => {
          this.showErrorAlert = true;
        });
    },

    /**
     * Método que registra ou atualiza os dados profissionais
     * @param {Number} crm CRM médico para atuar
     * @param {String} description Descrição adicional
     * @param {String} contact Contato do profissional
     *
     * @return Response
     */
    updateProfessionalData() {
      axios.post("https://api-auxilium.herokuapp.com/professional", {
        crm: this.crm,
        contact: this.contact,
        description: this.description,
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
