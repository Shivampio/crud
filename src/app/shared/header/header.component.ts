import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = sessionStorage.getItem('username');

  constructor(public _authService: AuthenticationService) {}

  ngOnInit() {
  }
  logout(){
    this._authService.logOut();
  }

}
