// Есть функция JSON.stringify(), но как я понял нам нужно написать её аналог

// Работа функции основывается на рекурсии

const convertJSONtoString = (jsonObj) => {
  // Проверяем массив или объект пришёл на вход
  if (Array.isArray(jsonObj)) {
    const res = jsonObj.map((obj) => {
      if (typeof obj === "object") return convertJSONtoString(obj);
      // Если попадается массив или объект, то вызываем функцию для этого элемента чтобы конвертировать его в string
      else return obj; // Если это простой элемент, то просто добавляем его к результату
    });
    return `[${res.join(",")}]`;
  } else if (typeof jsonObj === "object") {
    const res = [];
    for (const key in jsonObj) {
      if (typeof jsonObj[key] === "object")
        res.push(`"${key}":${convertJSONtoString(jsonObj[key])}`);
      // Если попадается массив или объект, то вызываем функцию для этого элемента чтобы конвертировать его в string
      else if (typeof jsonObj[key] === "number")
        // Числа не выделяются кавычками при конвертации
        res.push(`"${key}":${jsonObj[key]}`);
      else res.push(`"${key}":"${jsonObj[key]}"`);
    }
    return `{${res.join(",")}}`;
  }
};

export default convertJSONtoString;
