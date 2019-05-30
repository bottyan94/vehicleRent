import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';

import {ReactiveFormsModule} from '@angular/forms';
import {ClientsComponent} from './clients/clients.component';
import {HttpClientModule} from '@angular/common/http';
import {ServiceService} from './service.service';
import {VehicleComponent} from './vehicle/vehicle.component';
import {MatButtonModule} from '@angular/material/button';
import {OrdersComponent} from './orders/orders.component';
import {AccordionConfigComponent} from './clients/accordion-config/accordion-config.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClientsTableComponent} from './clients/accordion-config/clients-table/clients-table.component';
import {CarsTableComponent} from './clients/accordion-config/cars-table/cars-table.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';


const routes: Routes = [];


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    VehicleComponent,
    OrdersComponent,
    AccordionConfigComponent,
    ClientsTableComponent,
    CarsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    DialogModule,
    InputTextModule,
    FormsModule
  ],
  exports: [AccordionConfigComponent],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
