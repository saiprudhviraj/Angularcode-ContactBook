import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactBookComponent } from './contact-book/contact-book.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { SearchDisplayComponent } from './search-display/search-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/ContactDeatilService', pathMatch: 'full' },
  { path: 'SearchDisplay', component: SearchDisplayComponent },
  { path: 'ContactDeatilService', component: HomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
