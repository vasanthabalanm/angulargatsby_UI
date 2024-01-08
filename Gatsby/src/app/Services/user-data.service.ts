import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apicommon } from '../Constants/api.constant';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient, private router:Router) { }
// login functionalities
  login(logindetails:any){
    return this.http.post<any>(`${apicommon.userapiurl}/login`,logindetails);
  }

  setroles(setRole:string){
    localStorage.setItem('role',setRole)
  }

  setemail(setemail : string){
    localStorage.setItem('email',setemail);
  }

  getRole(){
    return localStorage.getItem('role');
  }

  isLogin():boolean{
    return !!localStorage.getItem('role');
  } 

  getemail(){
    return localStorage.getItem('email');
  }


  // register functionalities
  register(userdetails:any){
    return this.http.post<any>(`${apicommon.userapiurl}/register`,userdetails);
  }

  // fetch user details
  getUserDetails(): Observable<any>{
    return this.http.get(`${apicommon.userapiurl}/GetUserDetails`);
  }

  // fetch particular info in user role dashboard

  getParticularuserInfo(email:string):Observable<any>{
    return this.http.get(`${apicommon.userapiurl}/InfobyMail?email=${email}`);
  }

  // update user by email
  updateUserDetails(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.put(`${apicommon.userapiurl}/UpdateUserDetails?email`, userDetails);
  }

  // delete user
  deleteUserDetails(deleteemail:string): Observable<any>{
    // return this.http.delete<any>(`${apicommon.userapiurl}/DeleteUserDetails/${deleteemail}`);
    return this.http.delete(`${apicommon.userapiurl}/DeleteUserDetails?email=${deleteemail}`);

  }


  // logout
  logout(){
    localStorage.clear();
    this.router.navigate(['adminlogin'])
  }
}
