// Вызываем функцию рекурсивно до тех пор пока не переполнится callStack, каждый раз увеличиваем счётчик
//Результаты:
// Chrome: 8364
// Edge: 8363

const callStackChecker = (counter = 1) => {
  try {
    callStackChecker(counter + 1);
  } catch (error) {
    console.log("Maximum: ", counter);
  }
};

export default callStackChecker;
