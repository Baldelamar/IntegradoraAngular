import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/register';

  
  // constructor(private http: HttpClient) { }
  // register(registerdata: Register): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, registerdata);
  // }
   
}
