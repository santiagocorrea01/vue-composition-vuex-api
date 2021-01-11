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
      <div class="columns is-flex-wrap-wrap">
        <div
          v-for="(picture, index) in pictures"
          :key="index"
          class="column is-3-tablet is-full-mobile"
        >
          <img
            :src="picture.cover_photo.urls.full"
            :alt="picture.cover_photo.urls.alt_description"
          />
        </div>
      </div>
      <div class="has-text-centered" v-if="pictures.length < 1">
        No Pictures found
      </div>
    </div>
  </section>
</template>

<script>
import useSearch from "@/use/search";
export default {
  name: "TheHero",
  props: {
    title: String,
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