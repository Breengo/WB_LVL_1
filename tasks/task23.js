const passStrengthCheck = (pass) => {
  const recomendations = [
    "Увеличьте длину пароля",
    "Добавьте буквы разной раскладки",
    "Добавьте цифр",
    "Добавьте букв",
    "Используйте различные символы",
  ];
  const points = [0, 0, 0, 0, 0];
  const strengthList = [
    "очень слабый",
    "слабый",
    "неплохой",
    "чороший",
    "надёжный",
  ];

  if (pass.length >= 8) points[0] = 1;
  if (pass.toLowerCase() !== pass && pass.toUpperCase() !== pass) points[1] = 1;
  for (let i = 0; i < pass.length; i++) {
    if (!isNaN(pass[i])) points[2] = 1;
    if (pass[i].toLowerCase() !== pass[i].toUpperCase()) points[3] = 1;
    if (i > 0 && pass[i] !== pass[i - 1]) points[4] = 1;
  }

  let res = [];
  points.forEach((point, index) => {
    if (!point) res.push(recomendations[index]);
  });
  const pointsSum = points.reduce((acc, val) => acc + val);
  return `Пароль ${strengthList[pointsSum - 1]}. ${
    pointsSum < 5
      ? "Вот список советов для улучшения пароля: " + res.join(". ")
      : ""
  }`;
};

export default passStrengthCheck;
