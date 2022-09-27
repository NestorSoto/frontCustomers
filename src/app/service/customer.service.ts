import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url="http://localhost:8080/api/customers";

  constructor(private http: HttpClient) {}
    getCustomers(): Observable<any>{
      return this.http.get(this.url);
    }

    getCustomer(id : string): Observable<any>{
      return this.http.get(this.url+'/'+id);
    }
    saveCustomer(customer: Customer):Observable<any>{
      return this.http.post(this.url,customer);
    }

    editCustomer(id: string,customer: Customer): Observable<any>{
      return this.http.put(this.url+'/',customer);
    }

    deleteById(id: string):Observable<any>{
      return this.http.delete(this.url+'/'+id);
    }
    deleteAll():Observable<any>{
      return this.http.delete(this.url);
    }
   
}
