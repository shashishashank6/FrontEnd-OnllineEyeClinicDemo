
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCanActivateGuardServiceGuard implements CanActivate {
 constructor(private router:Router){

 }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(sessionStorage.getItem("username")==null){
        //alert('Login to access this page.');
        this.router.navigate(['/login']);
        return false;
    }else{
        return true;
    }
  }
  
}
