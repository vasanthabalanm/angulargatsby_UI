import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  brand ='';
  brands:string[] = [];

  addbrands(){
    this.brands.push(this.brand);
    this.brand = '';
    console.log(this.brands)
    // step2: child to parent concept
    this.myfavbrands.emit(this.brands)

  }

  // step 1:now the code for child to parent
  @Output() myfavbrands:EventEmitter<string[]> = new EventEmitter;
}
