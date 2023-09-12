const isImgLoaded = (url) => {
  const img = new Image(); // Создаём объект Img
  img.src = url; // Назначаем src для img

  // Возвращаем промис с данными картинки
  return new Promise((resolve) => {
    img.onload = () => {
      resolve({ width: img.width, height: img.height, size: img.sizes });
    };
  });
};

export default isImgLoaded;
