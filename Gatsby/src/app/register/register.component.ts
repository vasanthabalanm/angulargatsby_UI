import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formValidators } from '../Constants/formValidators.constants';
import FormValidationCheck from '../Helpers/FormValidationCheck';
import { NgToastService } from 'ng-angular-popup';
import { UserDataService } from '../Services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerdetails:FormGroup
  updatedDate:any;
  
  constructor(private fb:FormBuilder,private userdata:UserDataService,private router:Router,private toast:NgToastService){
    this.registerdetails = this.fb.group({
      firstname:['',[Validators.required,Validators.maxLength(30),Validators.pattern(formValidators.firstName),this.nospaces]],
      lastname:['',[Validators.required,Validators.minLength(1),Validators.maxLength(30),Validators.pattern(formValidators.lastName),this.nospaces]],
      dateofbirth:['',[Validators.required,this.futureDateValid]],
      email:['',[Validators.required,Validators.pattern(formValidators.mail)]],
      password:['',[Validators.required]]
    })
  }
  ngOnInit() {
    this.futureDatesDiable();
  }

  get firstname(){
    return this.registerdetails.get('firstname')
  }
  get lastname(){
    return this.registerdetails.get('lastname');
  }
  get dob(){
    return this.registerdetails.get('dateofbirth');
  }
  get email(){
    return this.registerdetails.get('email');
  }
  get password(){
    return this.registerdetails.get('password');
  }

  nospaces(enteredvalue:AbstractControl){
    let entervalues = enteredvalue.value;
    if(entervalues && (entervalues.startsWith(' ') || entervalues.endsWith(' '))){
      return {nonamespace:true}    
    }
    return null;
  }

  nodigits(enteredvalue:any){
    let values = enteredvalue.target.value;
    values = values.replace(/[1234567890-=+_!@#$%^&*()~`{}|;:'",.<>?/]/g,'');
    enteredvalue.target.value = values;
  }

  futureDatesDiable(){
    var getpresentDate:any = new Date();
    var getcurrentDate:any = getpresentDate.getDate();
    var getcurrentMonth:any = getpresentDate.getMonth() +1;
    var getcurrentYear:any = getpresentDate.getFullYear();

    if(getcurrentDate <10){
      getcurrentDate = '0' + getcurrentDate;
    }
    if(getcurrentMonth <10){
      getcurrentMonth = '0' + getcurrentMonth;
    }
    this.updatedDate = getcurrentYear + '-' + getcurrentMonth + '-' + getcurrentDate;
    console.log(this.updatedDate)
  }

  futureDateValid(enteredDate:AbstractControl){
    var getpresentDate = new Date(enteredDate.value);
    var presentDate = new Date();
    if(getpresentDate > presentDate){
      return {validateDate:true};
    }
    return null;
  }

  registerdValues(){
    if(this.registerdetails.valid){
      console.log(this.registerdetails.value);
      let sigunupdetails = { ...this.registerdetails.value,role:''}
      this.userdata.register(sigunupdetails).subscribe({ next: (reponse =>{
        console.log(reponse);
        this.registerdetails.reset();
        // this.toast.success({detail:"SUCCESS",summary:"user registerd successfully",duration:4000});
        this.router.navigate(['adminlogin']);
        alert("user account created successfully");
        // alert(reponse.message);
        })
        // ,
        //   error:(err=>{
        //     alert(err?.error.message)
        // })
      })
    }
    else{
      alert("please fill all fields");
      FormValidationCheck.ValidateallformFields(this.registerdetails);
    }
  }
}


