import { Component, OnInit } from '@angular/core';
import {Clients } from '../clients';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ClientServiceService } from '../client-service.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  client: Clients = {
    id: '0',
    first: 'Bottyán',
    last: 'Tamás',
    age: 24,
    email: 'bottyan94@gmail.com',
    phone: '+36308990872',
    address: '3780, Edelény Katona József út 74',
    registered: '2018.03.27.14:27'
  };

  valami: string;
  constructor(private fb: FormBuilder, private service: ClientServiceService) { }
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),

  });
  log() {
    console.log(this.profileForm);
  }
  sayHello() {
    this.service.getMessage().subscribe((data: string) => {
      this.valami = data;
      console.log(data);
    });
  }


  ngOnInit() {
  }

}
