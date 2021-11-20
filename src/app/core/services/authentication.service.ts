import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private router: Router) { 
}
  authenticate(username, password) : any {
    if(username === 'admin' && password ==='admin'){
      sessionStorage.setItem('login', JSON.stringify(true));
      sessionStorage.setItem('username',username);
      this.router.navigate(['dashboard']);
      return true
    }
    else
      return false
    }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('login')
    return !(user === null)
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
