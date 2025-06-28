import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  private apiUrl = "https://dummyjson.com/auth/login";
  constructor(private httpClient: HttpClient) { }
  SaveAccessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }
  GetAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }
  decodeJWT(token: string): any {
    try {
      const payload = token.split('.')[1];
      const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
      return JSON.parse(decoded);
    } catch (error) {
      console.error('Failed to decode JWT', error);
      return null;
    }
  }
  getDecodedToken() {
    const token = this.GetAccessToken();
    if (token) {
      return this.decodeJWT(token);
    }
    return null;
  }
  AuthLogin(userName: string, password: string): Observable<any> {
    const body = {
      username: userName,
      password: password,
      expiresInMins: 30
    }
    return this.httpClient.post(this.apiUrl, body);
  }
}
