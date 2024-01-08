import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formValidators } from '../Constants/formValidators.constants';
import { UserDataService } from '../Services/user-data.service';
import { Router } from '@angular/router';
import FormValidationCheck from '../Helpers/FormValidationCheck';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  logindetails:FormGroup;
  constructor(private fb:FormBuilder, private logindetail:UserDataService, private router:Router,private toaster:NgToastService){
    this.logindetails = this.fb.group({
      email:['',[Validators.required,Validators.pattern(formValidators.mail)]],
      password:['',[Validators.required]]
    })
  }

  get email(){
    return this.logindetails.get('email');
  }
  get password(){
    return this.logindetails.get('password');
  }

  formsubmit(){
    if(this.logindetails.valid){
      console.log(this.logindetails.value);
      this.logindetail.login(this.logindetails.value).subscribe({
        next:(response)=>{
          this.logindetails.reset();
          this.logindetail.setroles(response.role);
          this.logindetail.setemail(response.email)
          console.log(response);
          this.toaster.success({detail:"SUCCESS", summary:"Welcome back!", duration: 5000});
          this.router.navigate(['adminDashboard'])
        },
        error: (err) => {
          alert("The entered details are invalid");
          this.toaster.error({detail:"ERROR", summary:"Something when wrong!", duration: 5000});
          console.log(err);
        },
      });
    }else {
      FormValidationCheck.ValidateallformFields(this.logindetails);
    }
  }
}
