import { createStore } from 'vuex'
//3. Особиста бібліотека. Картотека домашньої бібліотеки: дані книги (автори, назва,
//видавництво і т.д.), розділ бібліотеки (спеціальна література, хобі, домашнє господарство і
//т.д.), походження книги і наявність на даний час. Організувати вибір книги за довільним
//запитом та проведення інвентаризації.
function checkBook(book, filter) {
  for (const key in filter) {
    if (filter[key] && filter[key] !== book[key]) return false
  }
  return true
}
export default createStore({
  state: {
    books: [
      {
        id: 1,
        title: "Гаррі Потер",
        author: "Джоан Роулінг",
        category: "фентезі",
        origin: "Куплена",
        available: "У наявності",
      },
      {
        id: 2,
        title: "1984",
        author: "Джордж Орвелл",
        category: "антиутопія",
        origin: "Подарована",
        available: "Нема",
      },
      {
        id: 3,
        title: "Степовий Вовк",
        author: "Герман Гессе",
        category: "роман",
        origin: "Подарована",
        available: "У наявності",
      },
    ],
    filtered: {},
  },
  getters: {
    getBooks: ({ books, filtered }) => books.filter((book) => checkBook(book, filtered)),
    getById: (state) => { return (bookId) => state.books.find((book) => book.id == bookId) },
  },
  mutations: {
    remove(state, bookId) {
      state.books = state.books.filter((book) => book.id !== bookId)
    },
    add(state, book) {
      state.books.push(book)
    },
    update(state, book) {
      const bookIndex = state.books.findIndex((book1) => book1.id = book.id)
      state.books[bookIndex] = book
    },
    updateFilter(state, filter) {
      state.filtered = filter
    },
  },
  actions: {
    delete({ commit }, idToRemove) {
      commit('remove', idToRemove)
    },
    addBook({ commit }, bookObj) {
      commit('add', {
        id: new Date().getTime(),
        ...bookObj
      })
    },
    onUpdate({ commit }, book) {
      commit('update', book)
    },
    onUpdateFilter({ commit }, filter) {
      commit('updateFilter', filter)
    },
  },
  modules: {
  }
})
