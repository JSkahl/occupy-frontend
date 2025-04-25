<script setup>
import { ref } from "vue";
import Eye from "vue-material-design-icons/Eye.vue";
import EyeClosed from "vue-material-design-icons/EyeClosed.vue";
import Lock from "vue-material-design-icons/Lock.vue";

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

defineProps({
  label: {
    type: String,
    required: true,
  },

  placeholder: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <label>{{ label }}</label>

  <div class="input-container">
    <Lock />

    <input :type="isVisible ? 'text' : 'password'" :placeholder="placeholder" />

    <span @click="toggleVisibility()">
      <Eye v-if="isVisible"/>
      <EyeClosed v-else class="closed-eye"/>
    </span>
  </div>
</template>

<style scoped>
.input-container {
  width: 20%;
  height: 6vh;
  display: flex;
  justify-content: space-around;
  border: 1px solid var(--blue);
  border-radius: 8px;
  padding: 0 0.5%;
  gap: 0.2em;
}

input {
  border: none;
  height: 90%;
  width: 90%;
  border-radius: 8px;
  font-size: 1em;
}

input:focus {
  outline: none;
}

label {
  color: var(--blue);
  padding-left: 1%;
}

span {
  cursor: pointer;
}

:deep(.material-design-icon__svg) {
  width: 100%;
  height: 100%;
  color: var(--blue);
}

.closed-eye {
  color: var(--gray) !important
}
</style>
