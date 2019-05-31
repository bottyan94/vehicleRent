import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RentComponent} from './rent/rent.component';
import {UUID} from 'angular2-uuid';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  display = false;
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
  async addUser() {
    this.inputBody.id = UUID.UUID();
    await this.service.regClients(this.inputBody);
  }


}
