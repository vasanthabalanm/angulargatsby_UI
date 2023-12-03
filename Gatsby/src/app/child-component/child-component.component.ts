import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  // these code for parent to child
  // @Input("listofbrands") listbrand:string[] = [];


  // now child to parent
  listbrand:string[] = [];

  brandupdated(branddata:string[]){
    this.listbrand = branddata
  }
}
