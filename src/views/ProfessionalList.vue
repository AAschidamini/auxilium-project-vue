<template>
  <div class="professional">
    <Menu />

    <Template title="Lista de profissionais">
      <template #content>
        <div v-if="professionals.length > 1" class="professional-list">
          <div
            v-for="(doc, index) in professionals"
            :key="index"
            class="professional-list--content"
          >
            <p class="professional-list--content__title">
              {{ doc.user.name }}
            </p>
            <p class="professional-list--content__subtitle">
              <b>CRM:</b> {{ doc.crm }}
            </p>
            <p class="professional-list--content__info">
              <b>Contato:</b> {{ doc.contact }}
            </p>
            <p class="professional-list--content__info">
              <b>Informações adicionais:<br /></b>
              {{ doc.description }}
            </p>
          </div>
        </div>
        <div v-if="professionals.length === 0" class="professional-not-found">
          <p>Nenhum profissional cadastrado na plataforma!</p>
        </div>
      </template>
    </Template>
  </div>
</template>

<script>
import axios from "axios";
import Cookie from "js-cookie";
import Menu from "../components/_base/patterns/menu/Menu";
import Template from "../components/_base/patterns/template/Template.vue";

export default {
  name: "ProfessionalList",
  components: {
    Menu,
    Template,
  },
  data() {
    return {
      professionals:
        [] /** Array com o retorno dos profissionais cadastrados */,
    };
  },
  created() {
    this.getDataProfessional();
  },
  methods: {
    /** Lista todos os profissionais */
    getDataProfessional() {
      const token = Cookie.get("aux_token");

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .get("https://api-auxilium.herokuapp.com/professional/", config)
        .then((res) => {
          this.professionals = res.data.professional;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.professional {
  &-list {
    display: flex;
    &--content {
      margin: 5px;
      border: 1px solid;
      padding: 30px;

      &__title {
        width: 300px;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
      }
      &__subtitle {
        font-weight: 600;
      }
    }
  }
  &-not-found {
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    p {
      padding: 30px 0;
      color: #3f3e9a;
    }
  }
}
</style>
