<template>
  <div class="columns is-flex-wrap-wrap">
    <div
      v-for="(picture, index) in pictures"
      :key="index"
      class="column is-3-desktop is-full-mobile"
    >
      <img
        :src="picture.cover_photo.urls.full"
        :alt="picture.cover_photo.urls.alt_description"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictures: Array,
  },
};
</script>