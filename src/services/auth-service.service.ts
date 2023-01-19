import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private ROL_SOURCE = new BehaviorSubject('COMPRADOR');
  ROL = this.ROL_SOURCE.asObservable();

  constructor() { }

  login(nuevoRol: string): Promise<any> {
    this.ROL_SOURCE.next(nuevoRol)
    return Promise.resolve();
  }

  logout(): Promise<any> {

    return Promise.resolve();
  }
}
