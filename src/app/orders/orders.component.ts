import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  // noinspection JSAnnotator
  obj: [];
  rentInfo = {
    'km': 0,
    'day': 0
  };

  constructor(private service: ServiceService) {
  }

  ngOnInit() {
    this.getAllActive();
  }

  getAllOrders() {
    this.obj = [];
    this.service.getAllOrders().then((data) => {
      console.log(data);
      this.obj = data;
    });
  }

  getAllActive() {
    this.obj = [];
    this.service.getAllOrders().then((data) => {
      for (const entity of data) {
        console.log(entity);
        if (entity.data.status === 'Rented') {
          this.obj.push(entity);
        }
      }
    });
  }

  async finish(entity) {

    entity.data.day = this.rentInfo.day;
    entity.data.km = this.rentInfo.km;
    entity.data.price = ((this.rentInfo.day * 5000) + this.rentInfo.km * 10);
    await this.service.finishRent(entity).then((data) => {
      console.log(data);
      this.obj.push(data);
    });
    this.obj = [];
    this.getAllActive();
    this.rentInfo = {
      'km': 0,
      'day': 0
    };
  }

}
