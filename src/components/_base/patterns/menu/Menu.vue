<template>
  <div class="menu">
    <div class="menu--left">
      <div class="menu--left__logo">
        <img src="../../../../assets/logos/aux-logo-ver.png" alt="Auxilium" />
      </div>

      <div class="menu--left__link">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </div>
      <div class="menu--left__link">
        <!-- <router-link>Sobre o projeto</router-link> -->
        <a>Sobre o projeto</a>
      </div>
      <div class="menu--left__link">
        <!-- <router-link>Chats</router-link> -->
        <a>Chats</a>
      </div>
      <div class="menu--left__link">
        <!-- <router-link> Profissionais</router-link> -->
        <a> Profissionais</a>
      </div>
    </div>
    <div class="menu--right">
      <div class="menu--right__logoff"><b-icon icon="gear"></b-icon></div>
      <div class="menu--right__logoff">Sair</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  components: {},
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

  &--left {
    display: flex;
    &__logo {
      padding: 0;
      background: #3f3e9a;

      img {
        width: 40%;
      }
    }
    &__link {
      padding: 15px 50px;
      cursor: pointer;
      a {
        color: white;
        font-weight: 500;
        text-decoration: none;
        margin-top: 10px;
      }

      &:hover {
        background: #3f3e9a;
      }
    }
  }

  &--right {
    display: flex;
    &__logoff {
      padding: 15px 50px;
      cursor: pointer;
      float: right;
      a {
        color: white;
        font-weight: 500;
        text-decoration: none;
        margin-top: 10px;
      }

      &:hover {
        background: #3f3e9a;
      }
    }
  }
}
</style>
