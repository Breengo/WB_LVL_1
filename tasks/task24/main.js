import "./style.css";

let data = [];
let page = 0;
let sort = 2;

const list = window.document.querySelector(".list");

// Запрашиваем данные и показываем начальные 50 штук
fetch(
  "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true"
)
  .then((res) => res.json())
  .then((res) => {
    data = res;
    data.slice(0, 50).forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerHTML = `
      <p>${index + 1}</p>
      <p>${item.fname}</p>
      <p>${item.lname}</p>
      <p>${item.state}</p>
      <p>${item.city}</p>
      <p>${item.address}</p>
      <p>${item.tel}</p>
      <p>${item.zip}</p>
      `;
      list.appendChild(div);
    });
  });

window.document.querySelector("#prev").addEventListener("click", () => {
  if (page !== 0) {
    page--;
    changePage();
  }
});

window.document.querySelector("#next").addEventListener("click", () => {
  if (page !== data.length / 50 - 1) {
    page++;
    changePage();
  }
});

const sortOptions = [
  0,
  "fname",
  "lname",
  "state",
  "city",
  "address",
  "tel",
  "zip",
];

window.document
  .querySelector(".listHead")
  .querySelectorAll("p")
  .forEach((p, index) => {
    if (index !== 0) {
      p.addEventListener("click", () => {
        sort = index;
        changePage();
      });
    }
  });

// При смене страницы сортируем в соответствии с выбранным фильтром и выбираем данные из массива в соответствии со страницей

const changePage = () => {
  list.innerHTML = "";
  data
    .slice(page * 50, 50 + page * 50)
    .sort((a, b) =>
      a[sortOptions[sort]]
        .toString()
        .localeCompare(b[sortOptions[sort]].toString())
    )
    .forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerHTML = `
    <p>${index + 1}</p>
    <p>${item.fname}</p>
    <p>${item.lname}</p>
    <p>${item.state}</p>
    <p>${item.city}</p>
    <p>${item.address}</p>
    <p>${item.tel}</p>
    <p>${item.zip}</p>
    `;
      list.appendChild(div);
    });
};
