import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, NgModel} from '@angular/forms'; // <-- NgModel lives here

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';

import {ReactiveFormsModule} from '@angular/forms';
import {ClientsComponent} from './clients/clients.component';
import {HttpClientModule} from '@angular/common/http';
import {ServiceService} from './service.service';
import {VehicleComponent} from './vehicle/vehicle.component';
import {OrdersComponent} from './orders/orders.component';
import {AccordionConfigComponent} from './clients/accordion-config/accordion-config.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClientsTableComponent} from './clients/accordion-config/clients-table/clients-table.component';
import {CarsTableComponent} from './clients/accordion-config/cars-table/cars-table.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { RentComponent } from './clients/rent/rent.component';
import { FreecarsComponent } from './clients/accordion-config/freecars/freecars.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { RegComponentComponent } from './reg-component/reg-component.component';
import { RentComponentComponent } from './rent-component/rent-component.component';
import { RentModalComponent } from './orders/rent-modal/rent-modal.component';


const routes: Routes = [
  {path : 'list', component:ListComponentComponent},
  {path : 'reg', component:RegComponentComponent},
  {path : 'rent', component:RentComponentComponent},
  {path : '**',redirectTo:'/list',pathMatch:'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    VehicleComponent,
    OrdersComponent,
    AccordionConfigComponent,
    ClientsTableComponent,
    CarsTableComponent,
    RentComponent,
    FreecarsComponent,
    ListComponentComponent,
    RegComponentComponent,
    RentComponentComponent,
    RentModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    DialogModule,
    InputTextModule,
    FormsModule
  ],
  entryComponents: [
    RentComponent
  ],
  exports: [AccordionConfigComponent],
  providers: [ServiceService, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule {
}
