<template>
  <div class="about">
    <Layout title="">
      <template #content>
        <div class="about--logo">
          <img
            src="../assets/logos/auxilium-logo-default.png"
            alt="Logo Auxilium"
          />
        </div>
        <div class="about--text">
          <p>
            Auxilium é uma plataforma totalmente gratuíta, voltada para ajudar
            pessoas que estão sofrendo com crises de ansiedade e/ou depressão.
          </p>
        </div>
        <div class="about--text">
          <h3>Como iremos ajudar?</h3>
          <p>
            A plataforma possui duas opções de
            <router-link :to="{ name: 'Chats' }">Chats</router-link> na qual o
            usuário irá optar por um atendimento imediato com um dos
            profissionais voluntários cadastrados na plataforma ou apenas
            conversar abertamente com outros usuários registrados na Auxilium.
          </p>
        </div>
        <div class="about--text">
          <h3>Porque criar esse projeto?</h3>
          <p>
            O projeto foi pensado para pessoas que não tem condições de procurar
            ajuda. Também com foco em ajudar pessoas que não conseguem tomar a
            iniciativa de realizar um tratamentoe por conta de medo ou vergonha,
            acaba não procurando ajuda.
            <br /><br />

            Por conta disso, a plataforma possui a opção de inserir o nome antes
            mesmo de inicializar o chat. Podendo usar um nome fictício caso não
            queira se identificar em ambos os chats.
          </p>
        </div>
        <div class="about--text">
          <h3>Porque um chat livre?</h3>
          <p>
            O chat livre pensado no simples ato de querer "apenas conversar",
            sem compromisso ou objetivo.<br />
            Para os usuários que querem conhecer outras experiências e também
            contar suas experiências. Falar com alguém, sempre ajuda.
          </p>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "../components/_base/patterns/template/Layout";

export default {
  name: "AboutProject",
  components: {
    Layout,
  },
};
</script>
<style lang="scss" scoped>
.about {
  &--logo {
    width: 300px;
    text-align: center;
    margin: 10px auto 60px;

    img {
      width: 70%;
    }
  }

  &--text {
    margin-bottom: 40px;
    p {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
}

@media screen and (max-width: 700px) {
  .about {
    &--logo {
      width: 100%;
    }
  }
}
</style>
