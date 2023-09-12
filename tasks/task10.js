// Опять же, есть функция JSON.parse()

// Функция рекурсивна

const convertStringToJSON = (str) => {
  // Определяем какой результать возвращать: массив или объект
  if (str[0] === "[") {
    let res = [];
    let l = 1;
    let r = 1;
    while (r < str.length - 1) {
      // Проходим до конца строки
      if (str[r] === "{" || str[r] === "[") {
        // Если встречаем объект/массив, то идём до тех пор, пока все скобки не будут закрыты(в массиве или объекте могут быть другие массивы или объекты),
        //  после чего вызываем функциюю повторно для этого массива или объекта
        let counter = 1;
        l = r;
        while (counter) {
          // Если counter === 0 - значит все скобки закрыты
          r++;
          if (str[r] === "{" || str[r] === "[") counter++;
          if (str[r] === "}" || str[r] === "]") counter--;
        }
        res.push(convertStringToJSON(str.slice(l, r + 1))); // Добавляем результат в финальный ответ
        r++;
        l = r;
      } else if (r === str.length - 2) {
        res.push(str.slice(l, r + 1).replaceAll('"', "")); // Убираем лишние кавычки
      }
      if (str[r] === "," && l !== r) {
        res.push(str.slice(l, r).replaceAll('"', "")); // Убираем лишние кавычки
        r++;
        l = r;
      } else r++;
    }
    return res;
  } // Определяем какой результать возвращать: массив или объект
  else if (str[0] === "{") {
    let res = {};
    let l = 1; // Одна пара указателей для key, другая для value
    let r = 2;
    let l2 = 2;
    let r2 = 2;
    while (r < str.length - 1) {
      if (str[r] === "{" || str[r] === "[") {
        let counter = 1;
        l2 = r;
        r2 = r;
        while (counter) {
          r++;
          if (str[r] === "{" || str[r] === "[") counter++;
          if (str[r] === "}" || str[r] === "]") counter--;
        }
        res[str.slice(l, r2 - 1)] = convertStringToJSON(str.slice(l2, r + 2));
        r++;
        l = r;
      } else if (r === str.length - 2) {
        let temp = str.slice(l, r + 1).split(":");
        res[temp[0]] = temp[1].replaceAll('"', "");
      }
      if (str[r] === ",") {
        let temp = str.slice(l, r).split(":");
        res[temp[0]] = temp[1].replaceAll('"', "");
        r++;
        l = r;
      } else r++;
    }

    return res;
  }
};

export default convertStringToJSON;
