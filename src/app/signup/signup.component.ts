import { Component, OnInit } from '@angular/core';
import { DummyData } from '../services/Dummydata';
import { SharedService } from '../services/shared.service';
import { StatusChanged } from '../Dtos/Status_changed';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  profileImage: any="";
  IsUserExists: boolean;
  IsDisplay: boolean=true;
  GivenEmail: string = "sai@gmail.com";
  GivenPassword: string = "123";
  statusChanged:StatusChanged= new StatusChanged();
  UserInfo: any[] = [];

  constructor(private usersInfoService: DummyData, private sharedService: SharedService) {
    this.usersInfoService.UsersInfo.subscribe(data => {
      this.UserInfo = data;
    })
  }

  ngOnInit() {
    this.usersInfoService.GetUsersInfo();
  }

  CheckUserDetails() {
    var flag = false;
    this.UserInfo.forEach(x => {
      if (x.Key == this.GivenEmail && x.Value == this.GivenPassword){
        flag = true;
        this.profileImage=x.ImagePath;
      }
    });
    this.IsUserExists = flag;
    if (this.IsUserExists) {
      this.IsDisplay = false;
      this.statusChanged.flag=true;
      this.statusChanged.name=this.GivenEmail;
      this.statusChanged.ImagePath=this.profileImage;
      this.sharedService.setuserStatus(this.statusChanged);
    }
  }
}
