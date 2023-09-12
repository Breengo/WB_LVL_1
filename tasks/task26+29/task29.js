const configForm = () => {
  window.document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); // Отменяем обновление страницы
    const res = [];
    window.document
      .querySelector("form")
      .querySelectorAll("input") // Достаёи все инпуты из формы
      .forEach((input) => {
        res.push(input.value);
      });
    alert(res.join("-"));
  });
};

export default configForm;
