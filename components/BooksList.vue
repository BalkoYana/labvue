<template>
  <div>
    <library-item v-for="book in getBooks" :key="book.id" :book-obj="book" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LibraryItem from "./LibraryItem.vue";

export default {
  name: "BooksList",
  components: {
    LibraryItem,
  },
  computed: {
    ...mapGetters(["getBooks"]),
  },
};
</script>