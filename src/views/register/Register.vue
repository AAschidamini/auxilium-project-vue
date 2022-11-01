<template>
  <LayoutOff>
    <template>
      <div class="register">
        <p class="register--container_return">
          <router-link :to="{ name: 'Login' }">Já possuo login</router-link>
        </p>

        <div class="register-form">
          <h1 class="register_title">Cadastre sua conta</h1>
          <p class="register_description">
            Preencha todos os campos obrigatórios para completar o registro.
          </p>
          <div>
            <div class="register-form_input">
              <p class="label">Nome <span class="required">*</span></p>
              <input v-model="name" type="text" placeholder="Nome" required />
            </div>
            <div class="register-form_input">
              <p class="label">E-mail <span class="required">*</span></p>
              <input
                v-model="email"
                type="email"
                placeholder="exemplo@exemplo.com"
                required
              />
            </div>
            <div class="register-form_input">
              <p class="label">Senha <span class="required">*</span></p>
              <input
                v-model="password"
                type="password"
                placeholder="Exemplo@123"
                required
              />
            </div>

            <div class="register-form_input checkbox">
              <p class="checkbox-label">
                É um profissional e deseja se voluntariar?
              </p>
              <input
                v-model="professional"
                type="checkbox"
                class="checkbox-input"
              />
            </div>
          </div>

          <div v-if="professional === true">
            <hr class="" />
            <p class="register--subtitle">Dados do profissional</p>
            <div class="register-form_input">
              <p class="label">CRM <span class="required">*</span></p>
              <input
                v-model="crm"
                v-mask="'CRM/AA ######'"
                type="text"
                placeholder="CRM/RS 123456"
              />
            </div>
            <div class="register-form_input">
              <p class="label">Contato</p>
              <input
                v-model="contact"
                v-mask="'(##) #####-####'"
                type="phone"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div class="register-form_input">
              <p class="label">Informações adicionais</p>
              <textarea
                v-model="description"
                type="text"
                rows="5"
                maxlength="250"
              />
              <p style="text-align: right; font-size: 12px">
                {{ description.length }} / 250 caracteres
              </p>
            </div>
          </div>

          <div class="register-form_send">
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
    </template>
  </LayoutOff>
</template>
<script>
import axios from "axios";
import LayoutOff from "../../components/_base/patterns/template/LayoutOff";

export default {
  name: "Register",

  components: {
    LayoutOff,
  },

  data() {
    return {
      name: "",
      email: "",
      password: "",
      professional: false,

      /** Dados do profissional se houver */
      crm: "",
      description: "",
      contact: "",
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
     * @param {Boolean} professional se o usuário é profissional ou não
     *
     * @return Response
     */
    newUser() {
      this.$loading(true);

      axios
        .post("https://api-auxilium.herokuapp.com/user/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          professional: this.professional,
          crm: this.crm,
          description: this.description,
          contact: this.contact,
        })
        .then((res) => {
          if (res) {
            this.$loading(false);

            this.$bus.$emit("show-alert-chip", {
              message: "Cadastro realizado com sucesso!",
            });
            this.$router.push({ name: "Login" });
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.register {
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

  &--subtitle {
    margin: 10px 0 30px 0;
    font-size: 16px;
    font-weight: bold;
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

      textarea {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 0;
        resize: none;
      }
    }
    .checkbox {
      display: flex;

      &-input {
        width: 20px !important;
        margin: 10px 20px;
      }
      &-label {
        text-align: right;
        padding: 20px 0 0px 0;
      }
    }

    &_send {
      margin: 60px auto 20px auto;
      margin-left: auto;
      margin-right: auto;
      width: 200px;

      button {
        padding: 20px 5px;
        font-size: 14px;
        border: none;
        background-color: #3f3e9a;
        color: white;
        border-radius: 0px;
        font-weight: 600;
        width: 200px;
        transition: 0.3s;

        &:hover {
          background: #008eaa;
        }
      }
    }
  }
}
</style>
