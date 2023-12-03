import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngonchange-compont',
  templateUrl: './ngonchange-compont.component.html',
  styleUrls: ['./ngonchange-compont.component.css']
})
export class NgonchangeCompontComponent implements OnInit,OnChanges{
  @Input() name = '';

  ngOnInit(): void {
    console.log("oninit called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges called");
    // console.log("onchange called",changes['name'].currentValue);
  }
  
}
