<template>
  <div class="menu">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link
        :to="{ name: 'About the Project' }"
        class="navbar-brand menu__logo"
      >
        <img src="../../../../assets/logos/aux-logo-ver.png" alt="Auxilium" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'About the Project' }" class="nav-link">
              Início
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Chats' }" class="nav-link">
              Chats
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Professional List' }" class="nav-link">
              Profissionais
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Dados do usuário' }" class="nav-link">
              <b-icon icon="person-fill"></b-icon>
              Conta
            </router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="logoff()"
              style="cursor: pointer; color: #3f3e9a; font-weight: bold"
            >
              Sair
            </a>
          </li>
        </ul>
      </div>
    </nav>
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
.navbar {
  padding: 0;
}

.navbar-dark .navbar-nav .nav-link {
  color: white;
  padding: 0 20px;
}

.menu {
  padding: 0;
  text-align: center;
  font-size: 20px;
  background: #008eaa;
  color: white;

  &__logo {
    background: #3f3e9a;
    padding: 0;

    img {
      width: 40%;
    }
  }
}
</style>
