import { Component, OnInit } from '@angular/core';
import { userDetails } from '../Dtos/User_details';
import { SharedService } from '../services/shared.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})

export class NewContactComponent implements OnInit {
  check: boolean=false;
  NewForm: FormGroup;
  isErrorExists: boolean = false;
  DoneEntry: boolean = true;
  contactlist: any[];
  UserInfo: userDetails = new userDetails();

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.NewForm = new FormGroup({
      'name': new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      'PrimaryContact': new FormControl("9999999999", [
        Validators.required,
        Validators.minLength(8)
      ]),
    });
    this.sharedService.contactsObs.subscribe(result => {
      this.contactlist = result;
    });

  }

  save() {
    this.isErrorExists = false;
    this.isErrorExists = this.checker();
    if (this.isErrorExists != true) {
      this.DoneEntry = false;
      this.sharedService.newContact(this.UserInfo);
      this.sharedService.setActionStateBool(true);
    }
  }

  cancel() {
    this.sharedService.newContact('');
    this.sharedService.setActionStateBool(true);
  }

  checker(): boolean {
    var flag = false;
    this.contactlist.forEach(x => {
      if (x.PrimaryContact == this.UserInfo.PrimaryContact)
        flag = true;
    });
    return flag;
  }
}