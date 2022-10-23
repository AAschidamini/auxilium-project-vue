<template>
  <div class="register">
    <div class="register--container">
      <p class="register--container_return">
        <router-link :to="{ name: 'Login' }">Já possuo login</router-link>
      </p>
      <h1 class="register--container_title">Cadastre sua conta</h1>
      <p class="register--container_description">
        Escolha o tipo de cadastro para proceguir..
      </p>
      <div class="register--container_links">
        <div class="register--container_links-item">
          <router-link :to="{ name: 'Register User' }"
            >Registrar-se como usuário</router-link
          >
        </div>
        <div class="register--container_links-item">
          <router-link :to="{ name: 'Register Professional' }"
            >Registrar-se como profissional</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      type: true,
      crm: "",
      description: "",
      contact: "",
    };
  },

  computed: {
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
            console.log("Usuário registrado");
            this.$router.push({ name: "Login" });
          }
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
  },

  sendData() {
    this.registerProfessional();
    this.newUser();
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
    height: 370px;

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

    &_links {
      &-item {
        width: 400px;
        padding: 20px 5px;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        font-size: 14px;
        border: none;
        background-color: #3f3e9a;
        border-radius: 0px;

        &:hover {
          background: #008eaa;
        }

        a {
          color: white;
          font-weight: 600;
          padding: 20px 70px;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
