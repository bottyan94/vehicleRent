import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  display = false;
  display1 = false;
  inputBody = {
    'id': '',
    'name': {
      'first': '',
      'last': '',
    },
    'age': 18,
    'email': '',
    'phone': '',
    'address': '',
    'registered': ''
  };
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
    if (this.display ===false) {
      this.display = true;
    }
    if (this.display === true) {
      this.display = false;
    }
  }

  showDialogCar() {
    if (this.display1 === false) {
      this.display1 = true;
    }
    if (this.display1 === true) {
      this.display1 = false;
    }
  }

  async addUser() {
    await this.service.regClients(this.inputBody);

  }

  async addCar() {
    console.log(this.inputBody);
    await this.service.regCar(this.inputBody);
  }
}
