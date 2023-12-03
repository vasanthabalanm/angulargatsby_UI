import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-pass-form-value',
  templateUrl: './pass-form-value.component.html',
  styleUrls: ['./pass-form-value.component.css']
})
export class PassFormValueComponent {
  @Input('allfoods') foods:string[] = [];
}
