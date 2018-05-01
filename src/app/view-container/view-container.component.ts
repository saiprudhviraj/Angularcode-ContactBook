import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.css']
})

export class ViewContainerComponent {
  path: any;
  UserInfo: any;
  displayImagepath: string = "assets/image/noImage.jpg";

  constructor(private sharedServices: SharedService) {
    this.sharedServices.contactsObs.subscribe(result => {
      this.UserInfo = result;
      this.displayImagepath = this.UserInfo.ImagePath;
      this.path=result.ImagePath;
    });
  }

  Imagechange() {
    this.displayImagepath = this.UserInfo.ImagePath;
    console.log("Helo")
  }
}
