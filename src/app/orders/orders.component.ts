import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  obj: any;
  constructor(private service: ServiceService) { }

  ngOnInit() { this.getAllOrders();
  }
  getAllOrders() {
    this.service.getAllOrders().then((data) => {
      console.log(data);
      this.obj = data;
    });
  }
  finish(entity) {
    this.service.finishRent(entity).then((data) => {
      console.log(data);
      this.obj = data;
    });
  }
}
