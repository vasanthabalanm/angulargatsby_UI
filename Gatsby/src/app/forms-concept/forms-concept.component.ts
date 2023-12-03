import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-concept',
  templateUrl: './forms-concept.component.html',
  styleUrls: ['./forms-concept.component.css']
})
export class FormsConceptComponent {
  name='John';
  age=20;
  address='24 th street united kingdom!'
  
  name1 = 'default';
  count = 0;
  trackCount() {
    this.count++;
  }

  handleinput(event:any){
    this.name=(event.target as HTMLInputElement).value
  }

  title = ['aswins','twins','spectacles','ultimate','emergency','fury'];

  number = 0;
  check = true;


  foods:string[] = [];
  food = '';

  addfood(){
    this.foods.push(this.food);
    this.food = '';
    console.log(this.foods);
  }
  
}
