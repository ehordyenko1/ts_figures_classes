export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  color: string;

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sides cannot form a triangle');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }

    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle implements Figure {
  color: string;

  width: number;

  height: number;

  constructor(height: number, width: number, color: string) {
    this.height = height;

    if (height < 0 && width < 0) {
      throw new Error('Height and width must be greater than zero');
    }

    this.width = width;
    this.color = color;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

function getInfo(figure: Figure): string {
  const area = figure.getArea().toFixed(2);
  let shapeName: string;

  if (figure instanceof Triangle) {
    shapeName = 'triangle';
  } else if (figure instanceof Circle) {
    shapeName = 'circle';
  } else if (figure instanceof Rectangle) {
    shapeName = 'rectangle';
  } else {
    throw new Error('Unknown figure type');
  }

  return `A ${figure.color} ${shapeName} - ${area}`;
}

const redRectangle = new Rectangle(3, 5, 'red');

getInfo(redRectangle); // 'A red rectangle - 15.00'

const greenCircle = new Circle('green', 1);

getInfo(greenCircle); // 'A green circle - 3.14'

const redTriangle = new Triangle('red', 3, 4, 5);

getInfo(redTriangle); // 'A red triangle - 6.00'
