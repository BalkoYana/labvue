<template>
  <div>
    <div>
      <label>
        Title
        <input v-model="currentBook.title" type="text" />
      </label>
    </div>
    <div>
      <label>
        Author
        <input v-model="currentBook.author" type="text" />
      </label>
    </div>
    <div>
      <label>
        Category
        <input v-model="currentBook.category" type="text" />
      </label>
    </div>
    <div>
      <label>
        Origin
        <input v-model="currentBook.origin" type="text" />
      </label>
    </div>
    <div>
      <label>
        Available
        <input v-model="currentBook.available" type="text" />
      </label>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BooksFilter",
  data() {
    return {
      currentBook: {},
    };
  },
  watch: {
    currentBook: {
      handler(newFilter) {
        this.onUpdateFilter(newFilter);
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(["onUpdateFilter"]),
  },
};
</script>