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
    <button @click="onAction">{{ actionBtnTitle }}</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BookPage",
  data() {
    return {
      currentBook: {},
    };
  },
  computed: {
    ...mapGetters(["getById"]),
    id() {
      return this.$route.params.bookId;
    },
    actionBtnTitle() {
      return this.bookId ? "Save" : "Create";
    },
  },
  created() {
    if (this.bookId) this.currentBook = { ...this.getById(this.bookId) };
  },
  methods: {
    ...mapActions(["addBook", "onUpdate"]),
    onAction() {
      if (!this.bookId) this.addBook(this.currentBook);
      else this.onUpdate(this.currentBook);
      this.$router.push({ path: "/" });
    },
  },
};
</script>