<template>
  <div class="menu">
    <div class="menu--left">
      <router-link :to="{ name: 'About the Project' }" class="menu--left__logo">
        <img src="../../../../assets/logos/aux-logo-ver.png" alt="Auxilium" />
      </router-link>

      <router-link :to="{ name: 'About the Project' }" class="menu--left__link">
        Sobre o projeto
      </router-link>
      <router-link :to="{ name: 'Chats' }" class="menu--left__link">
        Chats
      </router-link>
      <router-link :to="{ name: 'Professional List' }" class="menu--left__link">
        Profissionais
      </router-link>
    </div>
    <div class="menu--right">
      <router-link
        :to="{ name: 'Dados do usuário' }"
        class="menu--right__logoff"
      >
        <b-icon icon="person-fill"></b-icon>
        Conta
      </router-link>
      <div class="menu--right__logoff" @click="logoff()">Sair</div>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";

export default {
  name: "Menu",
  methods: {
    logoff() {
      Cookie.remove("aux_token");
      Cookie.remove("user");
      Cookie.remove("id");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #008eaa;
  padding: 0;
  font-size: 20px;
  color: white;
  font-weight: 500;
  text-align: center;

  &--left {
    display: flex;
    &__logo {
      padding-top: 5px;
      background: #3f3e9a;

      img {
        width: 40%;
      }
    }
    &__link {
      padding: 20px 40px 15px 40px;
      cursor: pointer;

      color: white;
      font-weight: 500;
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        background: #3f3e9a;
      }
    }
  }

  &--right {
    display: flex;
    &__logoff {
      padding: 20px 40px 15px 40px;
      cursor: pointer;
      float: right;

      color: white;
      font-weight: 500;
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        background: #3f3e9a;
      }
    }
  }
}
</style>
