import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from '../../../service.service';
import {RentComponent} from '../../rent/rent.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {

  constructor(private service: ServiceService, private modalService: NgbModal) {
  }

  obj: any;

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.service.getAllClients().then((data) => {
      console.log(data);
      this.obj = data;
    });
  }

  openRentModal(entity) {
    console.log(entity);
    const modalRef = this.modalService.open(RentComponent);
    modalRef.componentInstance.entity = entity;

    modalRef.result.then((result) => {
      switch (result.action) {
        case 'save':
          console.log(result.data);
          break;
      }
    });
  }
}

