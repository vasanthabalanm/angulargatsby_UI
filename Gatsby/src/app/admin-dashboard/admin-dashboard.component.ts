import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Services/user-data.service';
import { DatePipe } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formValidators } from '../Constants/formValidators.constants';
import { UserData } from '../model/UserData';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers: [DatePipe],
})
export class AdminDashboardComponent implements OnInit {
  public allUserDetails: any = [];
  public role!: string;
  public email!: string;
  public particularUser: UserData[] = [];
  isEditMode: boolean = true;

  updateDetails: FormGroup;
  updatedDate: any;

  constructor(private getuser: UserDataService, private fb: FormBuilder,private pipe:DatePipe) {
    this.updateDetails = this.fb.group({
      firstname: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(formValidators.firstName), this.nospaces]],
      lastname: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30), Validators.pattern(formValidators.lastName), this.nospaces]],
      dateofbirth: ['', [Validators.required, this.futureDateValid]],
      email: ['', [Validators.required, Validators.pattern(formValidators.mail)]],
    });
  }

  ngOnInit() {
    this.fetchUsersData();
    this.initializeUserData();
    this.futureDatesDisable();
    this.edituser();
  }

  private fetchUsersData() {
    this.getuser.getUserDetails().subscribe((response) => {
      this.allUserDetails = response;
    });
  }

  private initializeUserData() {
    const roleFromLocalStorage = this.getuser.getRole();
    this.email = this.getuser.getemail() || 'null';
    this.role = roleFromLocalStorage || 'null';
    this.GetParticularUserData(this.email);
  }

  private GetParticularUserData(email: any) {
    this.getuser.getParticularuserInfo(email).subscribe(
      (response: any) => {
        console.log(response);
        this.particularUser = [response];
        this.setInitialFormValues(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  

  private setInitialFormValues(user: UserData) {
    this.updateDetails.setValue({
      firstname: user.firstname,
      lastname: user.lastname,
      dateofbirth: this.pipe.transform(user.dateOfBirth, 'yyyy-MM-dd') || '', 
      email: user.email,
    });
  }

  logout() {
    this.getuser.logout();
  }

  // Edit the fetched value
  edituser() {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode) {
      this.updateDetails.disable();
    } else {
      this.updateDetails.enable();
      // this.updateDetails.get('ckemail')?.disable();
    }
  }

  // admin has delete user
  delete_user(usermail: any) {
     this.getuser.deleteUserDetails(usermail).subscribe(
      (response)=>{
        console.log(response);
        confirm("are you want to delete?");
        this.fetchUsersData();
      },
      (err)=>{
        console.log(err)
      }
     )
  }
  
  futureDatesDisable() {
    const getpresentDate = new Date();
    const getcurrentDate = ('0' + getpresentDate.getDate()).slice(-2);
    const getcurrentMonth = ('0' + (getpresentDate.getMonth() + 1)).slice(-2);
    const getcurrentYear = getpresentDate.getFullYear();

    this.updatedDate = `${getcurrentYear}-${getcurrentMonth}-${getcurrentDate}`;
    console.log(this.updatedDate);
  }

  futureDateValid(enteredDate: AbstractControl) {
    const getpresentDate = new Date(enteredDate.value);
    const presentDate = new Date();
    return getpresentDate > presentDate ? { validateDate: true } : null;
  }

  get firstname() {
    return this.updateDetails.get('firstname');
  }

  get lastname() {
    return this.updateDetails.get('lastname');
  }

  get dob() {
    return this.updateDetails.get('dateofbirth');
  }

  get emails() {
    return this.updateDetails.get('ckemail');
  }

  nospaces(enteredvalue: AbstractControl) {
    const entervalues = enteredvalue.value;
    return entervalues && (entervalues.startsWith(' ') || entervalues.endsWith(' ')) ? { nonamespace: true } : null;
  }

  nodigits(enteredvalue: any) {
    let values = enteredvalue.target.value;
    values = values.replace(/[1234567890-=+_!@#$%^&*()~`{}|;:'",.<>?/]/g, '');
    enteredvalue.target.value = values;
  }

  UpdatedValues() {
    // debugger
    // console.log(this.updateDetails.value);
    let vrfyemail = this.email;
    // console.log(vrfyemail);
    const userDetails = this.updateDetails.value;
    // console.log(userDetails);
    return this.getuser.updateUserDetails(userDetails).subscribe((response) => {
      if(vrfyemail == userDetails.email){
        alert("Updated Successfully");
        window.location.reload();
      }
      else{
        alert("please check your email correct!")

      }
    },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
