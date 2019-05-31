import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) {
  }

  getAllClients(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:8080/clients/listAllClients`)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllVehicle(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:8080/vehicles/listAllVehicles`)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllOrders(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:8080/orders/listAllOrders`)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  regClients(obj) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/clients/register', obj)
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  regCar(obj) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/vehicles/register', obj)
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  rent(obj) {
    console.log(obj)
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/rent', obj)
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  finishRent(entity) {
    console.log(entity)
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/finishrent', entity)
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
