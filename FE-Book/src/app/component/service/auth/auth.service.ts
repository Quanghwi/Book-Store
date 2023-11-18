import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  API_URL: string = ' http://localhost:8000/api/auth';

  signup(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.API_URL + '/signup', user);
  }
}
