import { last } from "rxjs";

const username: string = 'Javier';
const
sum = (a: number, b: number) =>{
  return a+b;
}
sum(1,3);

class Person {
  age: number;
  lastname: string;
//si quisiera proteger las variables solo debo agregar private adelante y asi no se puede cambiar el valor al crear una nueva persona...
  constructor(age:number, lastname:string){
    this.age= age;
    this.lastname= lastname
  }
}
// con typescript otra forma mas simple de crear el constructor seria
// class Person {
//   constructor(public age:number, public lastname:string){
//   }
// }

const Javi = new Person(41, 'Pedernera')
