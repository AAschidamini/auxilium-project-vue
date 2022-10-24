<template>
  <div class="recover">
    <div class="recover--container">
      <p class="recover--container_return">
        <router-link :to="{ name: 'Login' }">Voltar para o login</router-link>
      </p>
      <div class="recover--container-form">
        <h1 class="recover--container_title">Recupere sua senha</h1>
        <p class="recover--container_description">
          Preencha o <b>e-mail</b> cadastrado para receber o código de
          autenticação.
        </p>

        <div v-if="!emailValidate" class="recover--container-form">
          <div class="recover--container-form_input">
            <p class="label">E-mail <span class="required">*</span></p>
            <input
              v-model="email"
              type="email"
              placeholder="exemple@exemple.com"
              required
            />
          </div>

          <div class="recover--container-form_send">
            <button class="submit" type="submit" @click="sendToken()">
              ENVIAR
            </button>
          </div>
        </div>

        <div v-else class="recover--container-form">
          <div class="recover--container-form_input">
            <p class="label">Insira o código de autenticação:</p>
            <input
              v-model="token"
              type="text"
              placeholder="Ex: 1lskmlk3hk4jh1"
            />
          </div>
          <form class="recover--container-form_input">
            <p class="label">Escolha uma nova senha:</p>
            <input v-model="password" type="password" placeholder="****" />
          </form>
          <div class="recover--container-form_send">
            <button
              :disabled="disabledSave"
              class="submit"
              type="submit"
              @click="resetPassword()"
            >
              SALVAR
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "RecoverPassword",
  data() {
    return {
      email: "",
      token: "",
      newPassword: "",
      emailValidate: false,
    };
  },
  computed: {
    disabledSave() {
      if (this.token === "" || this.password === "") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    /**
     * Método que envia o email com o código para o usuário
     * @param {String} email Email do usuário
     *
     * @return Response
     */
    sendToken() {
      axios
        .post("https://api-auxilium.herokuapp.com/user/forgot_password", {
          email: this.email,
        })
        .then((res) => {
          if (res) {
            console.log("Token enviado para seu email!");
            this.$router.push({ name: "Login" });
          }
        });
    },

    /**
     * Troca a senha do usuário no sistema
     * @param {String} token Código de autenticação enviado por email
     * @param {String} newPassword Senha do usuário
     *
     * @return Response
     */
    resetPassword() {
      axios
        .post("https://api-auxilium.herokuapp.com/user/reset_password", {
          token: this.token,
          password: this.newPassword,
        })
        .then((res) => {
          if (res) {
            console.log("Senha trocada com sucesso!");
            this.$router.push({ name: "Login" });
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.recover {
  display: flex;
  margin: 0;
  padding: 0;
  height: auto;
  font-family: sans-serif;
  background-image: linear-gradient(to bottom, #008eaa, #73cef4, #fff);
  background-repeat: no-repeat;
  background-size: 100% 20em;

  &--container {
    width: 700px;
    padding: 30px 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    background-color: #f3f3f3;

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
          float: left;
        }

        .required {
          color: red;
        }

        input {
          padding: 15px 10px;
          width: 100%;
          border: none;
          border-radius: 0;
        }
        input::placeholder {
          font-size: 14px;
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
