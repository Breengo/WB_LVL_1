class Shape {
  constructor(...args) {
    this.sides = [...args];
  }
  findPerimeter() {
    return this.sides.reduce((acc, val) => acc + val);
  }
  findSquare() {
    return this.sides[0] * this.sides[1];
  }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
  findSquare() {
    // Переписываем наследуемый метод
    const p = this.findPerimeter() / 2;
    return Math.sqrt(
      p * (p - this.sides[0]) * (p - this.sides[1]) * (p - this.sides[2])
    );
  }
}

class Circle extends Shape {
  constructor(radius) {
    // Переписываем наследуемый конструктор
    super();
    this.radius = radius;
  }
  findPerimeter() {
    // Переписываем наследуемый метод
    return this.radius * 2 * 3.14;
  }
  findSquare() {
    // Переписываем наследуемый метод
    return this.radius * this.radius * 3.14;
  }
}

export { Rectangle, Triangle, Circle };
