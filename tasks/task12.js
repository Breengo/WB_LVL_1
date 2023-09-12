const book = {
  // Объявление полей

  title: "Good book",
  author: "Good man",
  publish_date: "01.01.2001",

  // Методы присваивания

  changeTitle(title) {
    this.title = title;
  },
  changeAuthor(author) {
    this.author = author;
  },
  changePubDate(date) {
    this.publish_date = date;
  },

  // Методы получения

  getTitle() {
    return this.title;
  },
  getAuthor() {
    return this.author;
  },
  getPubDate() {
    return this.publish_date;
  },
};

export default book;
