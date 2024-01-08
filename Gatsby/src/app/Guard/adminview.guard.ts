import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../Services/user-data.service';
@Injectable({
  providedIn: 'root'
})

export class adminviewGuard implements CanActivate {

  constructor(private admin:UserDataService,private router:Router){}

  canActivate(): boolean {
    if(this.admin.isLogin()){
      return true;
    }
    else{
      this.router.navigate(['adminlogin']);
      return false;
    }
  }
  
}
