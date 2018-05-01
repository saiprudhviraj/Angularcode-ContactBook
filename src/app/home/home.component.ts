import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayImagepath: string = "assets/image/noImage.jpg";
  isSignIn: boolean = false;
  isUserLogged: boolean = false;
  Notclicked = true;
  DisplayName = "";
  DisplayMessage = false;
  displayContacts = false;
  isDisplaySearch = false;
  active = true;
  count=0;

  constructor(private sharedService: SharedService) {
    this.Checker()
    this.sharedService.setSignInFlagReceived.subscribe(flag => {
      if (flag) {
        this.count +=1;
        this.isSignIn = flag;
        if(this.count ==1)
        this.Checker();
      }
    });
  }
  ngOnInit() { }

  ToggleSignin() {
    this.isSignIn = !this.isSignIn;
    if (this.isSignIn == false) {
      this.active = true;
      this.isUserLogged = false;
      this.displayContacts = false;
      this.Notclicked = true;
      this.displayImagepath = "assets/image/noImage.jpg";
    }
    else
      this.sharedService.setSignInStateBool(this.isSignIn);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "13%";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
  }

  ContactList() {
    if (this.isUserLogged == false)
      this.DisplayMessage = true;
    else {
      this.Notclicked = false;
      this.displayContacts = true;
    }
  }

  Checker() {
    this.sharedService.userLoggedStatusChanged.subscribe(data => {
      if (data.flag === true) {
        this.isUserLogged = true;
        this.DisplayName = data.name
        this.DisplayMessage = false;
        this.displayImagepath = data.ImagePath;
        this.active = false;
      }
    })
  }

}
