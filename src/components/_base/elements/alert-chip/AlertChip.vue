<template>
  <transition name="pmw-alert-chip" appear>
    <div v-if="value" class="pmw-alert-chip alert-chip">
      <div class="alert-chip--content">
        <!-- slot do conteúdo do chip -->
        <slot />
      </div>

      <!-- slot para botões de ação -->
      <slot name="action" />

      <button
        class="alert-chip--close-btn"
        type="button"
        @click="$emit('input', false)"
      >
        <b-icon icon="x"></b-icon>
      </button>
    </div>
  </transition>
</template>

<script>
/**
 * Componente para o elemento de alerta apresentado como feedback
 * de erro ou sucesso para ações de CRUD
 */
export default {
  name: "AlertChip",

  props: {
    /**
     * Estado de renderização
     */
    value: {
      type: Boolean,
      default: false,
    },
    /**
     * Tempo em milisegundos que deve permanecer na tela
     */
    time: {
      type: Number,
      default: 5000,
    },
  },
  data() {
    return {
      tmout: null,
    };
  },
  watch: {
    value(newVal) {
      if (newVal) {
        if (this.tmout) {
          clearTimeout(this.tmout);
          this.addTimeout();
        } else {
          this.addTimeout();
        }
      } else {
        clearTimeout(this.tmout);
      }
    },
  },
  methods: {
    addTimeout() {
      this.tmout = setTimeout(() => {
        this.$emit("input", false);
      }, this.time);
    },
  },
};
</script>

<style lang="scss" scoped>
.alert-chip {
  display: flex;
  align-items: center;
  position: fixed;
  left: 30px;
  bottom: 20px;
  padding: 10px 20px;
  z-index: 5;

  background-color: #a6a6a6;
  color: white;

  p {
    margin-bottom: 0;
    font-size: 18px;
  }

  &--close-btn {
    margin-left: 19px;
    color: inherit;
    background: inherit;
    font-size: 24px;
    border: none;
  }

  &--close-icon {
    width: 12px;
  }
}
</style>
