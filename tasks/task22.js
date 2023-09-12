// При вызове таким способом, document.write будет вызвываться пока не заполнится callStack
const writeFunc = (counter = 0) => {
  console.log(counter);
  document.write(writeFunc(counter + 1));
};

// Таким способом, document.write можно вызывать бесконечно

const writeFunc2 = () => {
  for (let i = 0; i < 1000; i++) {
    document.write(i);
  }
  return -1;
};
