import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-concept',
  templateUrl: './forms-concept.component.html',
  styleUrls: ['./forms-concept.component.css']
})
export class FormsConceptComponent implements OnInit {
  name = 'John';
  age = 20;
  address = '24 th street united kingdom!'

  name1 = 'default';
  count = 0;
  trackCount() {
    this.count++;
  }

  handleinput(event: any) {
    this.name = (event.target as HTMLInputElement).value
  }

  title = ['aswins', 'twins', 'spectacles', 'ultimate', 'emergency', 'fury'];

  number = 0;
  check = true;


  foods: string[] = [];
  food = '';

  addfood() {
    this.foods.push(this.food);
    this.food = '';
    console.log(this.foods);
  }

  // concept of ngonchange
  name2 = 'enter name'

  // template driven form
  contact!: Contact;
  ngOnInit(): void {
    this.contact = {
      mail: '',
      name: {
        firstName: '',
        lastName: '',
      },
      age: 0,
      country: '',
      states: '',
      city: '',
      gender: '',
      dob: new Date('01/11,2001'),
      isagree: false,
      address: ''
    }
  }

  alldistricts: State[] = [
    new State('1', 'Ariyalur'),
    new State('2', 'Chengalpattu'),
    new State('3', 'Chennai'),
    new State('4', 'Coimbatore'),
    new State('5', 'Cuddalore'),
    new State('6', 'Dharmapuri'),
    new State('7', 'Dindugal'),
    new State('8', 'Erode'),
    new State('9', 'Kallakurichi'),
    new State('10', 'Kancheepuram'),
    new State('11', 'Karur'),
    new State('12', 'Krishnagiri'),
    new State('13', 'Madurai'),
    new State('14', 'Mayiladuthurai'),
    new State('15', 'Nagapatinam'),
    new State('16', 'Nagapatinam'),
    new State('17', 'Nagarkoil'),
    new State('18', 'Namakkal'),
    new State('19', 'Perambalur'),
    new State('20', 'Pudhukottai'),
    new State('21', 'Ramnathapuram'),
    new State('22', 'Ranipetai'),
    new State('23', 'Salem'),
    new State('24', 'Sivagangai'),
    new State('25', 'Tenkasi'),
    new State('26', 'Theni'),
    new State('27', 'Thiruvallur'),
    new State('28', 'Thiruvarur'),
    new State('29', 'Thoothukudi'),
    new State('30', 'Thiruchirapalli'),
    new State('31', 'Tirunelveli'),
    new State('32', 'Thipathur'),
    new State('33', 'Trippur'),
    new State('34', 'Thiruvanamalai'),
    new State('35', 'Udamadalam(ooty)'),
    new State('36', 'Vellore'),
    new State('37', 'Villupuram'),
    new State('38', 'Viruthunagar')
  ];

  formsubmit(contactform: NgForm) {
    console.log(contactform.value);
  }


  // reactive forms
    phonebooks = new FormGroup({
      namebook:new FormGroup({
        firstNames: new FormControl,
        lastNames: new FormControl,
      }),
      mails: new FormControl('',[Validators.required]),
      ages: new FormControl(),
      countries: new FormControl(),
      states: new FormControl(),
      cities: new FormControl(),
      dateodbirth: new FormControl(),
      gendr: new FormControl(),
      addres: new FormControl(),
      ischcks: new FormControl()
    })
    checkvalues(){
      console.log(this.phonebooks.value);
    }
}
// outside the main content
// template drive forms
// all districts
class State {
  id: string;
  district: string;

  constructor(id: string, district: string) {
    this.id = id;
    this.district = district;
  }
}

// complete forms
class Contact {
  mail!: string;
  name!: {
    firstName: string;
    lastName: string;
  }
  age!: number;
  country!: string;
  states!: string;
  city!: string;
  dob!: Date;
  gender!: string;
  isagree!: boolean;
  address!: string;
}
