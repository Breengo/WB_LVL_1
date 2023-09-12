class MathV2 {
  static findNInFib = (n) => {
    let counter = 2; // Номер числа
    let prev = 1;
    let current = 1;
    if (n === 1 || n === 2) return 1;
    while (counter < n) {
      counter++;
      let temp = current;
      current = prev + current; // Следующее число равно сумме двух предыдущих
      prev = temp;
    }
    return current;
  };

  // То же самое только закидываем числа в массив

  static findToNInFib = (n) => {
    const res = [1, 1];
    let counter = 2;
    let prev = 1;
    let current = 1;
    if (n === 1 || n === 2) return 1;
    while (counter < n) {
      counter++;
      let temp = current;
      current = prev + current;
      prev = temp;
      res.push(current);
    }
    return res;
  };

  // Решето Эратосфена

  static findPrimeNumbersToN = (n) => {
    // Создаём массив со всеми значения от 0 до N
    let primes = [];
    for (let i = 0; i <= n; i++) {
      primes.push(i);
    }
    primes[1] = 0; // 1 не считается простым числом
    let k = 2;
    // Если число = 0, то оно делилось на одно из предыдущих. Если не равно, то ищем все кратные этому числу дальше в массиве и обнуляем
    while (k <= n) {
      if (primes[k] !== 0) {
        let j = k + k;
        while (j <= n) {
          primes[j] = 0;
          j = j + k;
        }
      }
      k++;
    }
    return primes.filter((num) => num);
  };

  static findNPrimeNumber = (n) => {
    // Используем решето эратосфена. Умножаем N чтобы в массив с номерами попало нужное нам число.
    return findPrimeNumbersToN(n * 100)[n];
  };
}

export { MathV2 };
