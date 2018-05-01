import { Component, OnInit } from '@angular/core';
import { ContactsListService } from '../services/contacts.service';

@Component({
  selector: 'search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})

export class SearchDisplayComponent implements OnInit {
  columnOptions: any[] = [];
  columns1: { field: string; header: string; }[];
  columns: { field: string; header: string; }[];
  items: { value: string; name: string; }[] = [];
  SearchItem = "";
  filteredContacts: any[] = [];
  Searchterm: string = "";
  contactsList: any[] = [];
  Griddisplay: boolean = false;

  constructor(private service: ContactsListService) {
    this.service.contactList.subscribe(data => {
      this.contactsList = data;
    });
    this.columns = [
      { field: 'FirstName', header: 'First Name' },
      { field: 'PrimaryContact', header: 'Primary' },
      { field: 'Home', header: 'Home' },
      { field: 'Skype', header: 'Skype' },
      { field: 'twitter', header: 'twitter' },
      { field: 'Notes', header: 'Notes' },
      { field: 'LastName', header: 'Last Name' },
      { field: 'EmailAddress', header: 'Email' },
      { field: 'StreetAddress', header: 'Address' },
      { field: 'Outlook', header: 'Outlook' }];
  }

  ngOnInit() {
    this.items = [
      { value: "FirstName", name: "First Name" },
      { value: "LastName", name: "Last Name" },
      { value: "PrimaryContact", name: "Primary" },
      { value: "Home", name: "Home" },
      { value: "Skype", name: "Skype" },
      { value: "twitter", name: "Twitter" },
      { value: "Notes", name: "Notes" },
      { value: "EmailAddress", name: "Email" },
      { value: "Outlook", name: "Outlook" }
    ];
    this.service.GetContactList();
    for (let i = 0; i < this.columns.length; i++) {
      this.columnOptions.push({
        label: this.columns[i].field,
        value: this.columns[i]
      })
    }
  }
  save() {
    if (this.Searchterm != "")
      switch (this.SearchItem) {
        case "FirstName": {
          this.filteredContacts = this.contactsList.filter(x => x.FirstName.toLowerCase() == this.Searchterm.toLowerCase());
          break;
        }
        case "LastName": {
          this.filteredContacts = this.contactsList.filter(x => x.LastName.toLowerCase() == this.Searchterm.toLowerCase());
          break;
        }
        case "PrimaryContact": {
          this.filteredContacts = this.contactsList.filter(x => x.PrimaryContact == this.Searchterm);
          break;
        }
        case "Home": {
          this.filteredContacts = this.contactsList.filter(x => x.Home == this.Searchterm);
          break;
        }
        case "Skype": {
          this.filteredContacts = this.contactsList.filter(x => x.Skype.toLowerCase() == this.Searchterm.toLowerCase());
          break;
        }
        case "twitter": {
          this.filteredContacts = this.contactsList.filter(x => x.twitter.toLowerCase() == this.Searchterm.toLowerCase());
          break;
        }
        case "Notes": {
          this.filteredContacts = this.contactsList.filter(x => x.Notes.toLowerCase() == this.Searchterm.toLowerCase());
          break;
        }
        case "EmailAddress": {
          this.filteredContacts = this.contactsList.filter(x => x.EmailAddress.toLowerCase() == this.Searchterm.toLowerCase());
          break;
        }
        case "Outlook": {
          this.filteredContacts = this.contactsList.filter(x => x.Outlook.toLowerCase() == this.Searchterm.toLowerCase());
          break;
        }
        default:
          alert("Please select the Field to search ")
          break;
      }
    this.Griddisplay = true;
  }
}
