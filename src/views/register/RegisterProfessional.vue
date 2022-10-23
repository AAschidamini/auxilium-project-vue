<template>
  <div class="register">
    <div class="register--container">
      <p class="register--container_return">
        <router-link :to="{ name: 'Login' }">Já possuo login</router-link>
      </p>
      <div class="register--container-form">
        <h1 class="register--container_title">Cadastre sua conta</h1>
        <p class="register--container_description">
          Preencha todos os campos obrigatórios para completar o registro
        </p>
        <div class="register--container-form_input">
          <p class="label">Nome completo <span class="required">*</span></p>
          <input v-model="name" type="text" placeholder="Nome" required />
        </div>
        <div class="register--container-form_input">
          <p class="label">E-mail <span class="required">*</span></p>
          <input
            v-model="email"
            type="email"
            placeholder="exemplo@exemplo.com"
            required
          />
        </div>
        <div class="register--container-form_input">
          <p class="label">Senha <span class="required">*</span></p>
          <input
            v-model="password"
            type="password"
            placeholder="Exemplo@123"
            required
          />
        </div>

        <hr class="" />
        <p class="sub-title">Dados do profissional</p>
        <div class="">
          <div class="register--container-form_input">
            <p class="label">CRM <span class="required">*</span></p>
            <input
              v-model="crm"
              v-mask="'CRM/AA ######'"
              type="text"
              placeholder="CRM/RS 123456"
              required
            />
          </div>
          <div class="register--container-form_input">
            <p class="label">Contato</p>
            <input
              v-model="contact"
              v-mask="'(##) #####-####'"
              type="phone"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div class="register--container-form_input">
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

        <div class="register--container-form_send">
          <button
            :disabled="disabledSave"
            div="submit"
            @click="actionRegister()"
          >
            CADASTRAR
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "RegisterProfessional",
  data() {
    return {
      /** Dados do formulário */
      name: "",
      email: "",
      password: "",
      type: true,
      crm: "",
      description: "",
      contact: "",

      /** Status dos alerts */
      showSucessAlert: false,
      showErrorAlert: false,
    };
  },

  computed: {
    /** Disabilita o save do botão */
    disabledSave() {
      if (
        this.name === "" ||
        this.email === "" ||
        this.password === "" ||
        this.crm === ""
      ) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    /**
     * Método de cadastro de usuário
     * @param {String} name Nome do usuário
     * @param {String} email Email do usuário
     * @param {String} password Senha do usuário
     * @param {Boolean} type se o usuário é profissional ou não
     *
     * @return Response
     */
    newUser() {
      axios
        .post("https://api-auxilium.herokuapp.com/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          professional: this.type,
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
     * Método de cadastro dos dados do profissional
     * @param {Number} crm CRM médico para atuar
     * @param {String} description Descrição adicional
     * @param {String} contact Contato do profissional
     *
     * @return Response
     */
    registerProfessional() {
      axios.post("https://api-auxilium.herokuapp.com/professional", {
        crm: this.crm,
        contact: this.contact,
        description: this.description,
      });
    },
    /** Método gatilho dos métodos de save */
    actionRegister() {
      this.registerProfessional();
      this.newUser();
    },
  },
};
</script>
<style lang="scss" scoped>
.register {
  display: flex;
  margin: 0;
  padding: 0;
  height: auto;
  font-family: sans-serif;
  background-image: linear-gradient(to bottom, #008eaa, #73cef4, #fff);
  background-repeat: no-repeat;
  background-size: 100% 20em;
  text-align: center;

  &--container {
    width: 700px;
    padding: 30px 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    background-color: #f3f3f3;

    .sub-title {
      text-align: left;
      font-weight: 600;
    }

    &_return {
      font-size: 16px;
      text-align: left;
      a {
        text-decoration: none;
        color: #008eaa;

        &:hover {
          color: #3f3e9a;
          text-decoration: underline;
        }
      }
    }

    &_description {
      font-size: 12px;
    }

    &-form {
      width: 400px;
      margin: 20px auto;
      margin-left: auto;
      margin-right: auto;

      &_input {
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

      &_send {
        margin: 60px auto 20px auto;
        margin-left: auto;
        margin-right: auto;
        width: 100%;

        button {
          padding: 20px 5px;
          font-size: 14px;
          border: none;
          background-color: #3f3e9a;
          color: white;
          border-radius: 0px;
          font-weight: 600;
          width: 200px;

          &:hover {
            background: #008eaa;
          }
        }
      }
    }
  }
}
</style>
