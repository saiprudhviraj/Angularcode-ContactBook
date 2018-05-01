import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  DialogModule, DataTableModule, ContextMenuModule, DropdownModule,
  GrowlModule, MenuItem, MultiSelectModule, PanelModule, InputTextareaModule,
  GMapModule
} from 'primeng/primeng';
import { SignupComponent } from './signup/signup.component';
import { DummyData } from './services/Dummydata';
import { FormsModule, Validators, FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactBookComponent } from './contact-book/contact-book.component';
import { ContactsListService } from './services/contacts.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { ViewContainerComponent } from './view-container/view-container.component';
import { SearchDisplayComponent } from './search-display/search-display.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    ContactBookComponent,
    NewContactComponent,
    ViewComponent,
    UpdateComponent,
    ViewContainerComponent,
    SearchDisplayComponent
  ],
  imports: [DropdownModule,
    PanelModule, InputTextareaModule,
    BrowserModule, DialogModule, BrowserAnimationsModule, FormsModule,
    AppRoutingModule, DataTableModule, ContextMenuModule, MultiSelectModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [DummyData, SharedService, ContactsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
