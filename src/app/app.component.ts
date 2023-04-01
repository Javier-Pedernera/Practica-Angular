import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  register = {
    name:'',
    email:'',
    password:''
  }
  onSubmit(){
console.log('registrado');

  }

  name = 'Javier';
  age = 41;
  img='https://uploads-ssl.webflow.com/640bb6875617004703c2f34d/640db9be3ecaf830ff4a1c0b_WhatsApp%20Image%202023-03-11%20at%2020.02.25-p-500.jpeg';
  buttondisable=true

person= {
  name : 'Juan',
  age : 41,
  img : 'https://uploads-ssl.webflow.com/640bb6875617004703c2f34d/640db9be3ecaf830ff4a1c0b_WhatsApp%20Image%202023-03-11%20at%2020.02.25-p-500.jpeg'
}
person2= {
  name : 'Agustin',
  age : 8,
  img : '../assets/image/niño.png'
}
family: string[] = ['Javier', 'Ceci', 'Agus', 'Facu']
newMember: string =''

box={
  width:100,
  height:100,
  color: "blue"
}

products : Product[]= [{
  name: "Bansky",
  price: 8900,
  image: "https://res.cloudinary.com/dom9fvn1q/image/upload/v1675445854/ImagesStreetArt/1_vfdgu7.png",
  quantity: 4
  },
  {
  name: "Vhils",
  price: 6700,
  image: "https://res.cloudinary.com/dom9fvn1q/image/upload/v1675445853/ImagesStreetArt/2_ks6y5w.png",
  },
  {
  name: "Above",
  price: 5900,
  image: "https://res.cloudinary.com/dom9fvn1q/image/upload/v1675445851/ImagesStreetArt/3_yos2km.png",
  },
  {
  name: "Roa",
  price: 8800,
  image: "https://res.cloudinary.com/dom9fvn1q/image/upload/v1675445853/ImagesStreetArt/4_wrb2kv.png",
  quantity: 6
  },
  {
  name: "Mentalgassi",
  price: 2800,
  image: "https://res.cloudinary.com/dom9fvn1q/image/upload/v1675445845/ImagesStreetArt/6_qkofvc.png",
  }]

addMember(){
this.family.push(this.newMember);
this.newMember = ''
}
deleteMember(name:string){
  // console.log(name); en platzi lo hacen con el index
  this.family = this.family.filter((elem:string) => elem !== name);
  }


togglebutton(){
this.buttondisable = !this.buttondisable
}
masedad(){
  this.person.age +=1
}

onscroll(event: Event){
const element = event.target as HTMLElement
console.log(element.scrollTop
  );
}

onChange(event: Event){
  const name = event.target as HTMLInputElement
  this.person.name = name.value
  console.log("name");
}
}



