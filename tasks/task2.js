const isEqualToSumOfDiv = (num) => {
  /* Ищем делители */
  const arr = [];
  for (let i = 0; i <= Math.ceil(num / 2); i++) {
    if (num % i === 0) arr.push(i);
  }
  /* Сравниваем */
  if (num === arr.reduce((acc, val) => acc + val)) return true;
  return false;
};

export default isEqualToSumOfDiv;
