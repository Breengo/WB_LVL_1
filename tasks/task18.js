const checkStorageLimit = () => {
  var i = 0;
  try {
    for (i = 250; i <= 10000; i += 250) {
      localStorage.setItem("test", new Array(i * 1024 + 1).join("a")); // Создаём массив и превращаем в строку. В JavaScript используется кодировка UTF-16, следовательно на один символ приходится 2 байта.
      // Мы умножаем 1024 на i или же 2Кб на i, следовательно для того чтобы получить мегабайты нужно умножить i на 2 и разделить на 1000.
    }
  } catch (e) {
    console.log(e);
    localStorage.removeItem("test");
    console.log(`${((i - 250) * 2) / 1000}МБ`);
  }
};

export default checkStorageLimit;
