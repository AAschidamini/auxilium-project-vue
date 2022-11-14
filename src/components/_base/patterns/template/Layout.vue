<template>
  <div class="template">
    <Menu />

    <div class="template--title">
      <h1>{{ title }}</h1>
    </div>
    <div class="template--title-mobile">
      <h1>{{ title }}</h1>
    </div>

    <div class="template--container">
      <slot name="content"></slot>

      <AlertChip
        v-if="typeof alertChipMessage === 'string'"
        v-model="showAlertChip"
        :time="10000"
      >
        <p class="alert-chip-text">{{ alertChipMessage }}</p>

        <template v-if="alertChipActionSlot" #action>
          <component
            :is="alertChipActionSlot.element"
            :to="alertChipActionSlot.link"
            class="alert-chip--action"
            >{{ alertChipActionSlot.text }}</component
          >
        </template>
      </AlertChip>

      <AlertChip v-else v-model="showAlertChip" :time="10000">
        <p
          v-for="(text, i) in alertChipMessage"
          :key="i"
          class="alert-chip-text"
        >
          {{ text }}
        </p>

        <template v-if="alertChipActionSlot" #action>
          <component
            :is="alertChipActionSlot.element"
            :to="alertChipActionSlot.link"
            class="alert-chip--action"
            >{{ alertChipActionSlot.text }}</component
          >
        </template>
      </AlertChip>
    </div>
  </div>
</template>

<script>
import Menu from "../menu/Menu";
import AlertChip from "../../elements/alert-chip/AlertChip";
export default {
  name: "Layout",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  components: { Menu, AlertChip },

  data() {
    return {
      showAlertChip: false /** Controla a visualização do chip de alerta */,
      alertChipMessage: null /** Mensagem aprensentada no chip de alerta */,
      alertChipActionSlot: null /** Conteúdo do slot de ação */,
    };
  },

  created() {
    /**
     * Recebe o evento para mostrar o toast de alerta
     *
     * @param { Object } obj Objeto com o conteúdo do toast
     * @param { String | Array } obj.message String ou Array de strings com as mensagens
     * @param { Object } [obj.action] Objeto com o conteúdo do slot de ação
     * @param { String } obj.action.element Elemento que será usado como tag html
     * @param { String } obj.action.link Caminhho do link
     * @param { String } obj.action.text Texto para o elemento
     */
    this.$bus.$on("show-alert-chip", async (obj) => {
      if (obj.message) {
        this.showAlertChip = false;

        await this.$nextTick();

        this.alertChipMessage = obj.message;
        this.showAlertChip = true;
        this.alertChipActionSlot = obj.action;
      }
    });
  },

  beforeDestroy() {
    this.$bus.$off("show-alert-chip");
  },
};
</script>
<style lang="scss" scoped>
.template {
  height: auto;

  &--container {
    width: 70%;
    padding: 50px 30px;
    margin-left: auto;
    margin-right: auto;
    background: #ececec;
    margin-bottom: 80px;
  }
  &--title {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    margin-top: 60px;
    width: 70%;
    h1 {
      font-weight: bold;
    }

    &-mobile {
      display: none;
    }
  }
}

.alert-chip-text {
  margin: 0;
  font-weight: bold;
}

@media screen and (max-width: 700px) {
  .template {
    &--container {
      width: 100%;
    }

    &--title {
      margin-top: 20px;
      h1 {
        display: none;
      }

      &-mobile {
        display: block;
        text-align: center;
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
