<template>
  <div class="login">
    <div class="login--container">
      <b-col class="login--container-form" col xs="12" sm="12">
        <div class="login--container-form_logo">
          <img src="../assets/logos/auxilium-logo-default.png" alt="Auxilium" />
        </div>

        <div class="login--container-form_input">
          <input v-model="email" type="email" placeholder="LOGIN" />
        </div>

        <form method="POST" class="login--container-form_input">
          <input v-model="password" type="password" placeholder="SENHA" />
          <router-link :to="{ name: 'Recover Password' }"
            >Esqueci minha senha</router-link
          >
        </form>
      </b-col>
      <div class="login--container-form_send">
        <button class="submit" type="submit" @click="actionLogin()">
          ENTRAR
        </button>
        <button class="submit" @click="$router.push({ name: 'Register' })">
          CADASTRAR-SE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookie from "js-cookie";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    /**
     * @param {String} email
     * @param {String} password
     */
    actionLogin() {
      Cookie.remove("aux_token");

      axios
        .post(
          "https://api-auxilium.herokuapp.com/auth/authenticate",
          {
            email: this.email,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          Cookie.set("aux_token", res.data.token);
          this.$router.push({ name: "Home" });
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
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

    &-form {
      width: 300px;
      margin: 20px auto;
      margin-left: auto;
      margin-right: auto;

      &_logo {
        margin-bottom: 60px;
        text-align: center;
      }

      &_input {
        margin-bottom: 15px;
        input {
          padding: 15px 10px;
          width: 100%;
          border: none;
          border-radius: 0;
        }
        input::placeholder {
          font-size: 14px;
        }

        a {
          font-size: 12px;
          float: right;
          margin: 5px 0px;
          text-decoration: none;
          color: #3f3e9a;

          &:hover {
            color: #008eaa;
          }
        }
      }

      &_send {
        display: block;
        margin: 60px auto 20px auto;
        margin-left: auto;
        margin-right: auto;
        width: 300px;

        button {
          padding: 20px 5px;
          width: 300px;
          margin: 5px;
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
  }
}
</style>
