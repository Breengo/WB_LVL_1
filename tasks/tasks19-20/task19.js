import "./style.css";
import { checkStorageLimit } from "./task20";

window.document.querySelector("#authButton").addEventListener("click", () => {
  window.open(
    "https://oauth.vk.com/authorize?client_id=51745898&redirect_uri=http://localhost:5173&response_type=token"
  );
});

function throttle(call, timeout) {
  // Создаём функцию тротл для того чтобы не спамить функций для проверки положения скролла
  let timer = null;

  return function execute(...args) {
    if (timer) return;

    timer = window.setTimeout(() => {
      call(...args);

      window.clearTimeout(timer);
      timer = null;
    }, timeout);
  };
}

function checkPosition() {
  // Функция для проверки положения скролла
  const vidgetHeight = window.document.querySelector("#container").scrollHeight;

  const scrolled = window.document.querySelector("#container").scrollTop;

  const threshold = vidgetHeight - vidgetHeight / 4;

  if (scrolled >= threshold) {
    fetchData();
  }
}

const storageOffset = window.localStorage.getItem("offset");
const storageData = window.localStorage.getItem("data");
// Если в кеше есть данные, то мы не запрашиваем данные с сервера
if (storageOffset && storageData) {
  offset = Number(storageOffset);
  data = JSON.parse(storageData);
  window.document.querySelector("button").style.display = "none";
  data.forEach((item) => {
    const div = window.document.createElement("div");
    div.classList.add("post");
    const photo = item.attachments[0] && item.attachments[0].photo;
    if (photo) {
      div.innerHTML = `<img src="${photo.sizes[photo.sizes.length - 1].url}" />
      <div class="post_info">
        <p>Likes: ${item.likes.count}</p>
        <p>Reposts: ${item.reposts.count}</p>
        <p>Views: ${item.views.count}</p>
        <p>Date: ${new Date(item.date * 1000)}</p>
      </div>`;
    }
    window.document.querySelector("#container").appendChild(div);
  });
} else {
  checkStorageLimit();
  fetchData();
}

// Вешаем события для скролла

window.document
  .querySelector("#container")
  .addEventListener("scroll", throttle(checkPosition, 500));
window.document
  .querySelector("#container")
  .addEventListener("resize", throttle(checkPosition, 500));
