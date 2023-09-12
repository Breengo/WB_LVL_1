const toAllNodesIn = (node, func) => {
  const children = node.childNodes; // Получаем дочерние узлы

  func(node); // Передаём узел в функцию
  if (children) {
    // Рекурсивно применяем функцию к каждому дочернему узлу
    children.forEach((child) => {
      toAllNodesIn(child, func);
    });
  }
};

export default toAllNodesIn;
