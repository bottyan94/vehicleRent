import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { RouterModule, Routes} from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'clients', component: ClientsComponent},
  {path: '', redirectTo: '/clients', pathMatch: 'full'},
  {path: 'vehicle/list', component: ClientsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
