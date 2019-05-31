import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service';
import {UUID} from 'angular2-uuid';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  display = false;
  inputBody2 = {
    'id': '',
    'type': '',
    'year': 0,
    'fuel': '',
    'status': 'Free',
  };

  constructor(private service: ServiceService) {
  }

  ngOnInit() {

  }
  showDialog() {
    if (this.display === false) {
      this.display = true;
    } else if (this.display === true) {
      this.display = false;
    }
  }

  async addCar() {
    this.inputBody2.id = UUID.UUID();
    await this.service.regCar(this.inputBody2);
  }
}
