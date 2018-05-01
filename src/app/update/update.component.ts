import { Component, OnInit, HostListener } from '@angular/core';
import { userDetails } from '../Dtos/User_details';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  display = true;
  key_code = 27;
  isValueChanged = false;
  UserInfo: userDetails = new userDetails();

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.contactsObs.subscribe(result => {
      this.UserInfo = result;
    });
  }

  save() {
    if (this.isValueChanged = true) {
      this.sharedService.newContact(this.UserInfo);
    }
    this.display = false;
    this.sharedService.setActionStateBool(true);
  }
  
  onChange() {
    this.isValueChanged = true;
  }

  closeDialog() {
    this.display = false;
    this.sharedService.setActionStateBool(true);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === this.key_code) {
      this.closeDialog();
    }
  }
}