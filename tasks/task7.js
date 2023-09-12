const funcListExe = async (funcList) => {
  for (let i = 0; i < funcList.length; i++) {
    console.log(`Функция ${i + 1}`);
    await funcList[i](); // На случай если функция асинхронная используем await, чтобы сохранить порядок вызова функций
  }
};

export default funcListExe;
