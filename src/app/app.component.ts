import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Javier';
  age = 41;
  img='https://uploads-ssl.webflow.com/640bb6875617004703c2f34d/640db9be3ecaf830ff4a1c0b_WhatsApp%20Image%202023-03-11%20at%2020.02.25-p-500.jpeg';
  buttondisable=true

person= {
  name : 'Juan',
  age : 41,
  img : 'https://uploads-ssl.webflow.com/640bb6875617004703c2f34d/640db9be3ecaf830ff4a1c0b_WhatsApp%20Image%202023-03-11%20at%2020.02.25-p-500.jpeg'
}

family: string[] = ['Javier', 'Ceci', 'Agus', 'Facu']

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
