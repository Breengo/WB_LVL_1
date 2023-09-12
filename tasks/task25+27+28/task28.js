const addTemplate = () => {
  const template = window.document.querySelector("template"); // Получаем шаблон из документа

  let p = template.content.cloneNode(true); // Копируем шаблон

  window.document.querySelector("div").appendChild(p); // Вставляем в DOM
};

export default addTemplate;
