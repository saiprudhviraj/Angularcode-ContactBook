import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { ContactsListService } from '../services/contacts.service';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';


@Component({
  selector: 'contact-book',
  templateUrl: './contact-book.component.html',
  styleUrls: ['./contact-book.component.css']
})
export class ContactBookComponent implements OnInit {
  IsContactReady: boolean = false;
  selectedAction: string;
  IsNewContactCreated = false;
  Griddisplay: boolean = true;
  itemsForContextMenu: MenuItem[];
  IsNewcontact: boolean = false;
  columnOptions: any[] = [];
  columns: { field: string; header: string; }[];
  columns1: { field: string; header: string; }[];
  isContactListEmpty: boolean = false;
  contactsList: any[];
  selectedContacts: any[];
  newContact: any;
  updatedContact: any;
  Startingmessage: string = "No contacts present. Feel free to add some."

  constructor(private service: ContactsListService, private router: Router, private sharedService: SharedService) {
    this.service.contactList.subscribe(data => {
      this.contactsList = data;
      if (this.contactsList.length === 0) {
        this.isContactListEmpty = true;
      }
    })
    this.columns = [
      { field: 'FirstName', header: 'First Name' },
      { field: 'LastName', header: 'Last Name' }
    ];
    this.columns1 = [
      { field: 'Home', header: 'Home' },
      { field: 'ImagePath', header: 'ImagePath' },
      { field: 'Skype', header: 'Skype' },
      { field: 'twitter', header: 'twitter' },
      { field: 'Notes', header: 'Notes' },
      { field: 'PrimaryContact', header: 'Primary' },
      { field: 'EmailAddress', header: 'Email' },
      { field: 'StreetAddress', header: 'Address' },
      { field: 'Outlook', header: 'Outlook' }];
  }

  ngOnInit() {
    this.service.GetContactList();
    this.itemsForContextMenu = [
      {
        label: 'Delete',
        icon: 'fa-times',
        command: event => this.deleteContact()
      },
      {
        label: 'Update',
        icon: 'fa-hand-paper-o',
        command: event => this.updateContact()
      },
      { label: 'View', icon: 'fa-eye', command: event => this.viewContact() },

    ];
    for (let i = 0; i < this.columns.length; i++) {
      this.columnOptions.push({
        label: this.columns[i].field,
        value: this.columns[i]
      })
    }
    for (let i = 0; i < this.columns1.length; i++) {
      this.columnOptions.push({
        label: this.columns1[i].field,
        value: this.columns1[i]
      })
    }
  }

  addContact() {
    this.IsContactReady = false;
    this.Griddisplay = false;
    this.sharedService.shareData(this.contactsList)
    this.selectedAction = "addContact";
    this.sharedService.contactsCreated.subscribe(result => {
      this.newContact = result;
      this.setActionState();
    });
  }

  viewContact() {
    this.sharedService.shareData(this.selectedContacts[0])
    this.selectedAction = "view";
    this.setActionState();
  }

  onRowSelect(event) {
    this.IsContactReady = false;
    if (this.selectedContacts.length == 1)
      this.IsContactReady = true
    this.sharedService.shareData(this.selectedContacts[0])
    this.setActionState();
    this.sharedService.setActionStateBool(true);
  }

  deleteContact() {
    this.IsContactReady = false;
    if (this.selectedContacts.length != 0) {
      this.selectedContacts.forEach(x => {
        var index = this.contactsList.findIndex(item => item.FirstName == x.FirstName)
        if (index != -1)
          this.contactsList.splice(index, 1)
        this.selectedContacts = null;
      });
    }
  }

  updateContact() {
    this.IsContactReady = false;
    this.sharedService.shareData(this.selectedContacts[0])
    this.selectedAction = "update";
    this.sharedService.contactsCreated.subscribe(result => {
      this.updatedContact = result;
      this.setActionState();
    });
  }

  onRowDblclick(event: any) {
    if (this.selectedContacts.length !== 0) {
      this.viewContact();
    }
  }

  setActionState() {
    this.sharedService.setActionStateFlagReceived.subscribe(flag => {
      if (flag == true) {
        if (this.selectedAction == "addContact") {
          this.newContactValidator();
        }
        //     if (this.selectedAction == "update") {
        //  //     this.contactUpdate();
        //     }
        this.selectedAction = undefined;
        this.sharedService.setActionStateBool(false);
      }
    })
  }

  newContactValidator() {
    if (this.newContact != "") {
      this.IsNewContactCreated = true;
      if (this.contactsList.findIndex(item => item.PrimaryContact == this.newContact.PrimaryContact) == -1)
        this.contactsList.push(this.newContact);
      this.newContact = "";
    }
    this.sharedService.setActionStateBool(false);
    this.Griddisplay = true;
  }

  // contactUpdate() {
  //   var index = this.contactsList.findIndex(item => item.PrimaryContact == this.selectedContacts[0].PrimaryContact);
  //   if (index != -1)
  //     this.contactsList[index] = this.updateContact[0];
  // }

  closeDialog() {
    this.IsNewContactCreated = false;
  }
}
