import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  UserName: string = "";
  selectedContact: any;
  display = true;
  key_code = 27;

  constructor(private sharedServices: SharedService) { }

  ngOnInit() {
    this.sharedServices.contactsObs.subscribe(result => {
      this.selectedContact = result;
    });
    this.UserName = this.selectedContact.FirstName + ". " + this.selectedContact.LastName;
  }

  viewPayment() {
    this.display = false;
    this.sharedServices.setActionStateBool(true);
  }
  
  closeDialog() {
    this.display = false;
    this.sharedServices.setActionStateBool(true);
  }
  
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === this.key_code) {
      this.closeDialog();
    }
  }
}

