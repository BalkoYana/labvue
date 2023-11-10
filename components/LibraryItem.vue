<template>
  <div class="container">
    <div>{{ bookObj.title }}</div>
    <div>{{ bookObj.author }}</div>
    <div>{{ bookObj.category }}</div>
    <div>{{ bookObj.origin }}</div>
    <div>{{ bookObj.available }}</div>
    <button @click="delete bookObj.id">Delete</button>
    <button @click="onEdit(bookObj.id)">Edit</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LibraryItem",
  props: {
    bookObj: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions(["delete"]),
    onEdit(editBookId) {
      this.$router.push({
        name: "book",
        params: {
          bookId: editBookId,
        },
      });
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  max-width: 600px;
}
</style>