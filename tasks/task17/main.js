import "./style.css";

let timeout = null; // Создаём переменную для таймаута вне функции чтобы сохранять доступ к ней во всех обработчиках ивента

window.document.querySelector("input").addEventListener("input", (event) => {
  window.clearTimeout(timeout); // Чистим таймаут и создаём новый.
  window.document.querySelector("#list").innerHTML = "";

  if (event.target.value !== "") {
    timeout = window.setTimeout(() => {
      // Timeout для дебаунсинга
      fetch(
        `https://geocode-maps.yandex.ru/1.x/?apikey=c09f1c67-61d1-4518-82e6-26933292ca18&geocode=${event.target.value}&format=json` // Запрашиваем данные с API
      )
        .then((res) => res.json())
        .then((res) =>
          res.response.GeoObjectCollection.featureMember.forEach((member) => {
            const p = window.document.createElement("p");
            p.innerHTML = `${member.GeoObject.description}, ${member.GeoObject.name}`;
            p.addEventListener("click", () => {
              window.document.querySelector("h1").innerText = p.innerHTML;
            });
            window.document.querySelector("#list").appendChild(p);
          })
        );
    }, 500);
  }
});

/* 

Тот же код, но с тротлингом вместо дебаунсинга

let timeout = null; 

window.document.querySelector("input").addEventListener("input", (event) => {
  window.document.querySelector("#list").innerHTML = "";

  if (event.target.value !== "" && !timeout) {
    timeout = window.setTimeout(() => {
      fetch(
        `https://geocode-maps.yandex.ru/1.x/?apikey=c09f1c67-61d1-4518-82e6-26933292ca18&geocode=${event.target.value}&format=json` 
      )
        .then((res) => res.json())
        .then((res) =>
          res.response.GeoObjectCollection.featureMember.forEach((member) => {
            const p = window.document.createElement("p");
            p.innerHTML = `${member.GeoObject.description}, ${member.GeoObject.name}`;
            p.addEventListener("click", () => {
              window.document.querySelector("h1").innerText = p.innerHTML;
            });
            window.document.querySelector("#list").appendChild(p);
          })
        );
        timeout = null;
    }, 500);
  }
});

*/
