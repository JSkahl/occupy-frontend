<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },

  placeholder: {
    type: String,
    required: true,
  },

  icon: {
    type: String,
    required: false,
  },

  type: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <label>{{ label }}</label>

  <div class="input-container">
    <component 
      :is="icon" />

    <input :type="type" :placeholder="placeholder" />

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

:deep(.material-design-icon__svg) {
  width: 100%;
  height: 100%;
  color: var(--blue);
}

</style>
