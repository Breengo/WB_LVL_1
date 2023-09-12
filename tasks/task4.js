// На вход поступает число стоящее перед словом и варианты склонения этого слова в Именительном, Родительном и в Винительном множественного числа падежах

const wordCase = (num, caseList) => {
  if (caseList.length < 3) return -1;

  num = num % 100; // Склонение зависит только от последних двух цифр

  const lastDigit = num % 10; // Если последние два числа не входят в промежуток от 10 до 20, то влияет только последняя цифра

  if (num > 10 && num < 20) {
    return caseList[1];
  }
  if (lastDigit > 1 && lastDigit < 5) return caseList[2];

  if (lastDigit === 1) return caseList[0];

  return caseList[1];
};

export default wordCase;
