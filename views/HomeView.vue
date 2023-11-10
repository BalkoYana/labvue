<template>
  <div class="home">
    <books-filter />
    <button @click="create">Create</button>
    <books-list />
  </div>
</template>

<script>
import BooksList from "@/components/BooksList.vue";
import BooksFilter from "@/components/BooksFilter.vue";
import { mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: {
    BooksList,
    BooksFilter,
  },
  data() {
    return {
      currentBook: {},
    };
  },
  computed: {
    ...mapGetters(["getBooks"]),
  },
  methods: {
    create() {
      this.$router.push({
        name: "book",
      });
    },
  },
};
</script>
