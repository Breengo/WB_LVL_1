const checkStorageLimit = () => {
  window.localStorage.clear();

  console.log("Testing localStorage");

  setTimeout(function () {
    var low = 0,
      high = 2e9,
      half;

    // Увеличиваем пока не превысим предел для localStorage
    while (canStore(high)) high *= 2;

    // Увеличиваем пока low и high не сравняются, находим среднее между последним числом, которое поместилось в localStorage и первым, которое не поместилось
    while (low !== high) {
      half = Math.floor((high - low) / 2 + low);

      // Проверяем, что не можем засунуть в localStorage ещё большую строку
      if (low === half || high === half) {
        low = canStore(high) ? high : low;
        high = low;
        window.localStorage.clear();
        window.localStorage.setItem("size", Math.round(low / 1024));
        break;
      }

      // Проверяем не больше ли максимальная строка чем half
      if (storageMaxBetween(low, half)) {
        high = half;
        // Остаётся только тот вариант, что максимальная строка больше half и меньше high
      } else {
        low = half + 1;
      }
    }

    // Проверяем помещается ли данная строка в localStorage
    function canStore(strLen) {
      try {
        delete localStorage.foo;
        localStorage.foo = Array(strLen + 1).join("A");
        return true;
      } catch (ex) {
        return false;
      }
    }

    function storageMaxBetween(low, high) {
      return canStore(low) && !canStore(high);
    }
  }, 1);
};

const checkRemainingSpace = () => {
  var currentSize = Math.round(
    JSON.stringify(window.localStorage.getItem("data")).length / 1024
  );
  const maxSize = window.localStorage.getItem("size");
  console.log(`Current: ${currentSize} | Max: ${maxSize}`);
};

export { checkStorageLimit, checkRemainingSpace };
