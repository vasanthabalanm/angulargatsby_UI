import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from '../model/country';
import { State } from '../model/state';
import { City } from '../model/city';
import { LocationApiService } from '../Services/location-api.service';
import { formValidators } from '../Constants/formValidators.constants';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  gatsbyform: FormGroup

  listcountry: Country[] = []
  selectedcountry!: string
  liststate: State[] = []
  selectedstate!: string
  listcity: City[] = []
  todayDate: any;
  charactercounts: number = 0
  maxlengths = 200;

  Validateinput(pressedvalue:any):void{
    let inputvalues = pressedvalue.target.value;
    inputvalues = inputvalues.replace(/[!@#$%^&*()_+1234567890-=`~,.;']/g,'')
    pressedvalue.target.value = inputvalues;
  }
  // dependency injection
  constructor(private allcountry: LocationApiService, private form_builder: FormBuilder) {
    // intialize the data
    // this.gatsbyform = this.form_builder.group({
    //   firstName:['',[Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern("^[a-zA-Z]+$")]],/*not more than 30char*/
    //   lastName:['',[Validators.required, Validators.minLength(1), Validators.pattern("^[a-zA-Z]+$")]], /*max 20 len , min 10len*/
    //   mail:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._]+@[a-zA-Z]+\\.[a-zA-Z.]{2,6}$')]],/* check again */
    //   phone:['',[Validators.required, Validators.pattern('[0-9+]{10}')]],/*except +, not allow letter */
    //   company:['',[Validators.required]],/*letters and space should not be in frst and last */
    //   improvement:['',[Validators.required, Validators.maxLength(200)]],/*show the len entered eg:7/200 */
    //   dob:['',[Validators.required, this.CheckDOB]], /*disable future */
    //   // try to in single group
    //   locations:form_builder.group({
    //     countries:[''],
    //     states:[''],
    //     cities:['']
    //   })
    // })

    this.gatsbyform = this.form_builder.group({
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern(formValidators.firstName), this.nonamespaces]],
      lastName: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20), Validators.pattern(formValidators.lastName), this.nonamespaces]],
      mail: ['', [Validators.required, Validators.pattern(formValidators.mail)]],
      phone: ['', [Validators.required, Validators.pattern(formValidators.phone)]],
      dob: ['', [Validators.required, this.futuredatevalidate]],
      improvement: ['', [Validators.required, Validators.maxLength(200),this.noextraspaces]],
      company: ['', [Validators.required]],
      countries: ['', [Validators.required]],
      states: ['', [Validators.required]],
      cities: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.futuredatedisabled();
    this.fetchcountrylist()
  }

  // gatsbyform = new FormGroup({
  //   firstName: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20), Validators.pattern("^[a-zA-Z]+$")]),
  //   lastName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("^[a-zA-Z]+$")]),
  //   mail: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z.]+\.[a-z]{2,6}$")]),
  //   phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
  //   company: new FormControl('', [Validators.required]),
  //   improvement: new FormControl('', [Validators.required, Validators.maxLength(200)]),
  //   dob: new FormControl('',[Validators.required, this.CheckDOB]),
  //   locations:new FormGroup({
  //     countries: new FormControl(),
  //     states: new FormControl(),
  //     cities: new FormControl()
  //   })
  // })

  // to long to display error message, so use get meathod.
  get firstname() {
    return this.gatsbyform.get('firstName')
  }
  get lastname() {
    return this.gatsbyform.get('lastName')
  }
  get mails() {
    return this.gatsbyform.get('mail')
  }
  get phones() {
    return this.gatsbyform.get('phone')
  }
  get companies() {
    return this.gatsbyform.get('company')
  }
  get feedbacks() {
    return this.gatsbyform.get('improvement')
  }
  get bithdate() {
    return this.gatsbyform.get('dob')
  }
  get onecountry() {
    return this.gatsbyform.get('countries')
  }
  get onestate() {
    return this.gatsbyform.get('states')
  }
  get onecity() { 
    return this.gatsbyform.get('cities')
  }

  checkcharactercount() {
    const feedbackvalue = this.gatsbyform.get('improvement')?.value;
    this.charactercounts = feedbackvalue.length;
  }
  charcountcolor():boolean{
    return this.charactercounts === this.maxlengths;
  }
  nonamespaces(names:AbstractControl){
    const enterednames = names.value;
    if(enterednames && (enterednames.startsWith(' ') || (enterednames.endsWith(' ')))){
      return {nonamespaces:true}
    }
    return null;
  }
  noextraspaces(values:AbstractControl){
    const feddbackvalue = values.value;
    if(feddbackvalue && (feddbackvalue.startsWith(' ') || (feddbackvalue.endsWith(' ')))){
      return {nospaces:true}
    }
    return null;
  }

  futuredatedisabled() {
    var getdate: any = new Date();
    var getcurrentyear: any = getdate.getFullYear();
    var getcurrentmonth: any = getdate.getMonth() + 1;
    var getcurrentdate: any = getdate.getDate();

    // add 0 for one digit number both month and date
    if (getcurrentdate < 10) {
      getcurrentdate = '0' + getcurrentdate;
    }
    if (getcurrentmonth < 10) {
      getcurrentmonth = '0' + getcurrentmonth;
    }
    this.todayDate = getcurrentyear + "-" + getcurrentmonth + "-" + getcurrentdate;
  }

  futuredatevalidate(entereddate: AbstractControl) {
    var getenterdate = new Date(entereddate.value);
    var prsntdate = new Date();
    if (getenterdate > prsntdate) {
      return { validatedates: true }
    }
    return null;
  }

  gatsbyformsubmit() {
    console.log(this.gatsbyform.value)
    this.charactercounts = 0;
    this.gatsbyform.reset();
  }

  private fetchcountrylist() {
    this.allcountry.getcountry().subscribe((response) => {
      this.listcountry = response;
      console.log(this.listcountry)
    })
  }

  getAllcountry() {
    const ciso = this.onecountry?.value
    this.liststate = [];
    this.listcity = []
    console.log(ciso);
    this.allcountry.getStatebycountry(ciso).subscribe((response) => {
      this.liststate = response
      this.onestate?.setValue('');
      this.onecity?.setValue('');
      console.log(response)
    })
  }
  getAllstate() {
    const ciso = this.onecountry?.value;
    const siso = this.onestate?.value;
    console.log(ciso,siso)
    this.allcountry.getCitybystate(ciso, siso).subscribe((response) => {
      this.listcity = response
      console.log(this.listcity)
      this.onecity?.setValue('');
    })
  }
  // task:6
  // firstname - allow min 4 char not more than 20                        -done
  // last - min -1 char                                                   -done
  // phone -allow +[0-9]                                                  -done
  // mail - -.@.in.com after dot not more than 6 char min 2 char          -done
  // company - alpahbets,spaces.                                          -done
  // improvement - not more than 200 char.                                -done
  // country and states / city (if any change reseted)                    -done
  // dob not future                                                       -done
  //  form control,builder,array  - concept                               -done

  // datum: data[] =[];
  // // constructor
  // constructor(private http:HttpClient){
  // }


  // ngOnInit() {
  //   this.getdetails().subscribe((response)=>{
  //     this.datum = response
  //   })
  // }

  // getdetails(){
  //   return this.http.get<data[]>(`https://fakestoreapi.com/products`);
  // }

}

// class data{
//   price!:String;
// }