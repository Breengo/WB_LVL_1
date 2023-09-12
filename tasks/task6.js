const sortObjects = (objList) => {
  return objList.sort((a, b) => {
    if (a.age === b.age) return a.name.localeCompare(b.name); // Сравниваем по лексикографии
    return a.age - b.age; // Сравниваем возраст
  });
};

export default sortObjects;
