
function greet (name: string): string {
  return `Hello ${name}`;
}

const message: string = greet("SRK");
console.log(message);

type Car = string;
type Model = number;

const car: Car = "Maruti";
const model : Model = 2017;


interface Rectangle {
  width: number,
  height: number
}

const rectangle: Rectangle = {
  width: 20,
  height: 100

}

console.log(rectangle);


function sum(a: number, b: number): number {
  return a + b;
}

let total: number = sum(5,6);
console.log(total);

function product(a:number, b: number = 4):number {
  return a * b;
}

console.log("Product",product(7));


let x = { a:10, b:5}


function divide({a , b}: {a: number, b: number}) {
return a / b;
}

console.log(divide(x));


interface Params {
  a: number,
  b: number,
  c?: number
}

function equation ({a,b,c = 6}: Params): number {
  return a + b - c;
}

console.log(equation({a: 11, b: 17}));


function addition(a: number, ...rest: number[]) : number {
  return a + rest.reduce((c, b) => c + b, 0);
}

console.log(addition(6, 7, 8, 8, 9, 4, 2));



type Nick = (a: number, b: number) => number;

const addition1: Nick = (a, b) => a + b;
console.log(addition1(7,9));


let z : unknown = "happy";

console.log((<string>z).length)
console.log((z as string).length);

let ab = "yueltewtwtwl";
console.log((((ab as unknown) as number) as unknown as string).length);



interface Voices {
  getSound(): void
}

class Animal implements Voices {
  getSound(): void {
    console.log("Woof Woof");
  }
}

let sound = new Animal();
sound.getSound();


interface Id {
  name: string,
  age: number,
  greet: () => void,
}

class Student implements Id {
  constructor(public name: string, public age: number) {}

  public greet(): void {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }

}

const child = new Student("Reema", 23);
child.greet();


class Person {
  constructor(private firstName: string, private lastName: string) {}

  fullName(): string {
    console.log(this.firstName + " " + this.lastName);
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName: string, lastName: string, private department: string) {
    super(firstName, lastName)
  }

  getDetails(): void {
    console.log(`My name is ${this.fullName()} and i work in ${this.department} department`)

  }
}

const user = new Employee("Rajesh", "Shah", "HR");
user.getDetails();

const user1 = new Person("Rajesh", "Nigam");
user1.fullName();


abstract class Famous {
  constructor(private firstName: string, private lastName: string) {};
  abstract getSalary(): number;

  getFullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getCompensation(): string {
    return `${this.getFullname()} has monthly salary: ${this.getSalary()}`
  }
}

class Star extends Famous {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.salary
  }
}

class Contractor extends Famous {
  constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.rate * this.hours;
  }
}


const name1 = new Star("Ram", "Nandgopal", 18000);
console.log(name1.getCompensation());

const name2 = new Contractor("Shyam", "Verma", 1200, 12);
console.log(name2.getCompensation());



class Generics<A> {
  private content: A;

  constructor(content: A) {
    this.content = content
  }

  getContent(): A {
    return this.content;
  }
}

const aba = new Generics<string>("Hey you there man");
console.log(aba.getContent());
const aba2 = new Generics<number>(321);
console.log(aba2.getContent());



function hereWithYou<B> (a: B): B {
  return a;
}

console.log(hereWithYou<string>("You there"));

function printArray<T> (arr: T[]): void {
  arr.forEach(x => console.log(x));
}

printArray<number>([4,5, 7, 8, 4,2]);
printArray<string>(["Take", "me", "home"]);

function merge<T, U> (a: T, b: U ): T & U {
  return {...a, ...b};
}

console.log(merge({name: "Nick"}, {age: 31}));