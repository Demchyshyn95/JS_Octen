import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTranferService {

  getID: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor() {
  }
}
