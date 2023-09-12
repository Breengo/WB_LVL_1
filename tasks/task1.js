const isPalindrome = (str) => {
  /* Приводим все буквы к одной раскладке и убираем пробелы*/
  str = str.toLowerCase().split(" ").join("");

  let l = 0;
  let r = str.length - 1;
  /* Сравниваем по порядку символы левой части и правой*/
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }

  return true;
};

export default isPalindrome;
