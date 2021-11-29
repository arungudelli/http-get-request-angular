import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserInformation } from './model/userinformation';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users?page=1';
    const wrongUrl = `https://fakestoreapi.com/users?limit=2`;
    return this.http.get<UserInformation>(url);
  }
}
