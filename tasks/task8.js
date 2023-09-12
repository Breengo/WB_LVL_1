const funcListExe2 = (funcList) => {
  return function executeFunctions() {
    const res = [];
    funcList.forEach((func) => {
      res.push(func()); // Выполняем функции и закидываем результат в массив
    });
    return res;
  };
};

export default funcListExe2;
