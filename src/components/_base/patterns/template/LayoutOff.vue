<template>
  <div class="template">
    <div class="template--container">
      <slot />
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
  name: "LayoutOff",
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
  }
}
</style>
