import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  private _listners = new Subject<any>();


 
  constructor(public http: HttpClient) { }
  
  listen(): Observable<any> {
    return this._listners.asObservable();
 }

 filter(filterBy: string) {
    this._listners.next(filterBy);
 }

  getPollutantData() {
    console.log(' register details');
    return this.http.get('http://localhost:4000/pollutantData');
   }
   addProductDetails(addDetails) {
    console.log(' product added');
    return this.http.post('http://localhost:3000/addProductDetailsFarmar', addDetails);
   }
}
