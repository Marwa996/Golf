import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  dataUrl = 'assets/users/';
  constructor(private http: HttpClient) {}
  getSystemUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.dataUrl + 'system-users.json');
  }
}
