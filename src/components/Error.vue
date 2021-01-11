<template>
  <div class="has-text-centered" v-if="error">
    {{ errorMsg }}
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    errorMsg: String,
    error: Boolean,
  },
};
</script>