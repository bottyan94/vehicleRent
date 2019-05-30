import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../service.service';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit {

  constructor(private service: ServiceService) { }
  obj: any;
  ngOnInit() {
    this.getAllVehicle();
  }
  getAllVehicle() {
    this.service.getAllVehicle().then((data) => {
      console.log(data);
      this.obj = data;
    });
  }
}
