import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getRequest(url: string): void {
    this.http.get(url).subscribe((res) => {
      console.log(res);
    });
  }
}
