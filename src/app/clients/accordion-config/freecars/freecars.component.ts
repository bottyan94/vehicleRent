import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from '../../../service.service';

import {UUID} from 'angular2-uuid';
import {__await} from 'tslib';

@Component({
  selector: 'app-freecars',
  templateUrl: './freecars.component.html',
  styleUrls: ['./freecars.component.css']
})
export class FreecarsComponent implements OnInit {
  @Input() clientsID: object;

  constructor(private service: ServiceService) {
  }

  array = [];
  rentObj = null;

  ngOnInit() {
    this.getAllVehicle();
  }

  getAllVehicle() {
    console.log(this.clientsID);
    this.service.getAllVehicle().then((data) => {
      console.log(data);
      for (const car of data) {
        console.log(car.status === 'Free');
        if (car.status === 'Free') {
          this.array.push(car);
        }
      }
    });
  }

  async rent(vehicleID) {
    const id = UUID.UUID();
    this.rentObj = {'clientsID': this.clientsID, 'vehicleID': vehicleID, 'orderID': id, 'status': 'Rented','day':0, 'km': 0,'crash':false,'pricce':0};
    await this.service.rent(this.rentObj);
    this.array = [];
    this.getAllVehicle();
  }
}

