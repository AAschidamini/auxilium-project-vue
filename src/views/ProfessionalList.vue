<template>
  <div class="professional">
    <Layout title="Lista de profissionais">
      <template #content>
        <div v-if="professionals.length > 0" class="professional-list">
          <div
            v-for="(doc, index) in professionals"
            :key="index"
            class="professional-list--content"
          >
            <p class="professional-list--content__title">
              {{ doc.name }}
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
            <hr />
          </div>
        </div>
        <div v-if="professionals.length === 0" class="professional-not-found">
          <p>Nenhum profissional cadastrado na plataforma!</p>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import axios from "axios";
import Layout from "../components/_base/patterns/template/Layout.vue";

export default {
  name: "ProfessionalList",
  components: {
    Layout,
  },
  data() {
    return {
      professionals:
        [] /** Array com o retorno dos profissionais cadastrados */,
    };
  },
  created() {
    this.getDataUser();
  },

  methods: {
    /** Lista todos os profissionais */
    getDataUser() {
      axios.get(`https://api-auxilium.herokuapp.com/user/`).then((res) => {
        const data = res.data.user;

        data.forEach((item) => {
          if (item.professional === true) {
            this.professionals.push({
              crm: item.crm,
              description: item.description,
              contact: item.contact,
              name: item.name,
            });
          }
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.professional {
  &-list {
    &--content {
      margin: 5px;
      padding: 30px;

      &__title {
        width: 300px;
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
