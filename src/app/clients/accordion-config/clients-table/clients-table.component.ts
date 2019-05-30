import {Component, OnInit} from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import {ServiceService} from '../../../service.service';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {

  constructor(private service: ServiceService) {
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
}
