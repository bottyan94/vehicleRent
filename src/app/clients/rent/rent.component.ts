import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  @Input() entity = null;

  constructor(public activModal: NgbActiveModal) { }

  ngOnInit() {
  }
  close(){
    this.activModal.close({action: 'close'});
  }
  save(){
    this.activModal.close({action: 'save', data: 'hello'});
  }

}
