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

        <div class="login--container-form_input">
          <input v-model="password" type="password" placeholder="SENHA" />
          <a href="">Esqueci minha senha</a>
        </div>

        <div class="login--container-form_send">
          <button class="submit" type="submit">ENTRAR</button>
        </div>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {},
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
