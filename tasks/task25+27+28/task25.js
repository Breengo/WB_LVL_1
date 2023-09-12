const createElem = () => {
  const div = window.document.createElement("div"); // Создаём div
  window.document.body.appendChild(div); //  Вставляем в DOM
  div.style.width = "500px";
  div.style.height = "500px";
  div.style.backgroundColor = "rgba(255,255,255,0.3)";
};

export default createElem;
