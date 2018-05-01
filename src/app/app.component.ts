import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignIn: boolean = false;
  isUserLogged: boolean = false;
  DisplayName = "";

  constructor(private sharedService: SharedService) {
    this.sharedService.userLoggedStatusChanged.subscribe(data => {
      if (data.flag === true) {
        this.isUserLogged = true;
        this.DisplayName = data.name
      }
    })
  }
  ToggleSignin() {
    this.isSignIn = !this.isSignIn;
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "13%";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "1.5%";
  }

}
