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
          <p class="label">Nickname <span class="required">*</span></p>
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

        <div class="register--container-form_send">
          <button
            :disabled="disabledSave"
            class="submit"
            type="submit"
            @click="newUser"
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
  name: "RegisterPatient",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      type: false,
    };
  },
  computed: {
    disabledSave() {
      if (this.name === "" || this.email === "" || this.password === "") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    /**
     * Método de cadastro de usuário paciente
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
            console.log("Usuário registrado");
            this.$router.push({ name: "Login" });
          }
        });
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
