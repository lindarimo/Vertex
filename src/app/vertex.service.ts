import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VertexService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getServizi(): Observable<any> {
    return this.httpClient.get('assets/servizi.json');
  }
}
