import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Specialista, Servizio } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class VertexService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getSpecialisti(): Observable<Specialista[]> {
    return  this.httpClient.get<Specialista[]>('assets/specialisti.json');
  }
  public getServiziCentro(): Observable<Servizio[]> {
    return this.httpClient.get<Servizio[]>('assets/servizi centro medico.json');
  }
}
