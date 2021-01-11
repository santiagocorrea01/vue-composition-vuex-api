<template>
  <section class="section">
    <div class="container">
      <h1 class="title mb-4">{{ title }}</h1>
      <form @submit.prevent="onSubmit(search.enteredText)">
        <input
          class="input mb-4"
          name="input"
          type="text"
          v-model="search.enteredText"
        />
        <span v-if="search.error">{{ search.error }}</span>
      </form>
      <Pictures :pictures="pictures" />
      <Error :error="pictures.length < 1" errorMsg="No Pictures Found" />
    </div>
  </section>
</template>

<script>
import useSearch from "@/use/search";
import Pictures from "./Pictures";
import Error from "./Error";
export default {
  name: "TheHero",
  props: {
    title: String,
  },
  components: {
    Pictures,
    Error
  },
  setup() {
    const { search, pictures, onSubmit, onError, loading } = useSearch();
    return {
      search,
      loading,
      pictures,
      onSubmit,
      onError,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
  width: 100%;
  max-height: 10rem;
}
</style>