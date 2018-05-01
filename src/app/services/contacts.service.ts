import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';




@Injectable()
export class ContactsListService {
    test: any[];
    @Output()
    public contactList: EventEmitter<any[]> = new EventEmitter<any[]>();

    public GetContactList() {
        this.test = [
            {  Home:" " ,ImagePath:"assets/image/sai.jpg",Skype:"Saiprudhviraj@Skype.com ",twitter:"Saiprudhviraj@Twitter.com ",Notes:"@Notes.com",FirstName: "Sai", LastName: "T", PrimaryContact: "9032726208", EmailAddress: "Saiprudhviraj.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "saiprudhviraj.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/prudhvi.jpg",Skype:"Prudhvi@Skype.com",twitter:"Prudhvi@Twitter.com",Notes:"Prudhvi@Notes.com",FirstName: "Prudhvi", LastName: "T", PrimaryContact: "9912706979", EmailAddress: "Prudhvi@gmail.com", StreetAddress: "Jaipur 1st stage", Outlook: "Prudhvi@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"Raj@Skype.com",twitter:"Raj@Twitter.com",Notes:"Raj@Notes.com",FirstName: "Raj", LastName: "T", PrimaryContact: "9000000001", EmailAddress: "Raj@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Raj.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Namratha", LastName: "A", PrimaryContact: "9000000021", EmailAddress: "Namratha@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Namratha.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Sujitha", LastName: "B", PrimaryContact: "9000000019", EmailAddress: "Sujitha.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Sujitha.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Saranya", LastName: "C", PrimaryContact: "9000000018", EmailAddress: "Saranya.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Saranya.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "NagaJyothi", LastName: "D", PrimaryContact: "9000000017", EmailAddress: "NagaJyothi.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "NagaJyothi.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Krupa", LastName: "E", PrimaryContact: "9000000016", EmailAddress: "Krupa.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Krupa.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Akhila", LastName: "F", PrimaryContact: "9000000015", EmailAddress: "Akhila.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Akhila.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Sunaina", LastName: "G", PrimaryContact: "9000000014", EmailAddress: "Sunaina.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Sunaina.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Divya", LastName: "H", PrimaryContact: "9000000013", EmailAddress: "Divya.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Divya.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Sushma", LastName: "I", PrimaryContact: "9000000012", EmailAddress: "Sushma.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Sushma.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Namitha", LastName: "J", PrimaryContact: "9000000011", EmailAddress: "Namitha.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Namitha.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Raju", LastName: "K", PrimaryContact: "9000000010", EmailAddress: "Raju.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Raju.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Venky", LastName: "L", PrimaryContact: "9000000009", EmailAddress: "Venky.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Venky.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Jayanth", LastName: "M", PrimaryContact: "9000000008", EmailAddress: "Jayanth.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Jayanth.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Eswar", LastName: "N", PrimaryContact: "9000000007", EmailAddress: "Eswar.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Eswar.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Raj Kumar", LastName: "O", PrimaryContact: "9000000006", EmailAddress: "RajKumar.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "RajKumar.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Anil", LastName: "P", PrimaryContact: "9000000005", EmailAddress: "Anil.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Anil.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Jom", LastName: "Q", PrimaryContact: "9000000004", EmailAddress: "Jom.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Jom.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Meenu", LastName: "R", PrimaryContact: "9000000003", EmailAddress: "Meenu.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Meenu.t@outlook.com" },
            {  Home:" " ,ImagePath:"assets/image/noImage.jpg",Skype:"@Skype.com",twitter:"@Twitter.com",Notes:"@Notes.com",FirstName: "Nayana", LastName: "S", PrimaryContact: "9000000002", EmailAddress: "Nayana.t@gmail.com", StreetAddress: "BTM 1st stage", Outlook: "Nayana.t@outlook.com" },
        ];
        this.contactList.emit(this.test);
    }
}
