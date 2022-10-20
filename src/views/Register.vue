<template>
  <div class="register">
    <div class="register--container">
      <p class="register--container_return">
        <a href="$">Já possuo login</a>
      </p>
      <div class="register--container-form">
        <h1 class="register--container_title">Cadastre sua conta</h1>
        <p class="register--container_description">
          Preencha todos os campos obrigatórios para completar o registro
        </p>
        <div class="register--container-form_input">
          <p class="label">Nickname <span class="required">*</span></p>
          <input type="text" placeholder="Nome" required />
        </div>
        <div class="register--container-form_input">
          <p class="label">E-mail <span class="required">*</span></p>
          <input type="email" placeholder="exemplo@exemplo.com" required />
        </div>
        <div class="register--container-form_input">
          <p class="label">Senha <span class="required">*</span></p>
          <input type="password" placeholder="Exemplo@123" required />
        </div>

        <div class="register--container-form_send">
          <button class="submit" type="submit">CADASTRAR</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {};
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

  &--container {
    width: 700px;
    padding: 30px 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    background-color: #f3f3f3;

    &_return {
      font-size: 16px;
      float: left;
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
