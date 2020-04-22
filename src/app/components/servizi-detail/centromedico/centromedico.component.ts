import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-centromedico',
  templateUrl: './centromedico.component.html',
  styleUrls: ['./centromedico.component.scss']
})
export class CentromedicoComponent implements OnInit {

  specialisti: any = [];

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get('assets/servizi.json').subscribe(data => {
      console.log(data);
      this.specialisti = data;
    });
  }
}
