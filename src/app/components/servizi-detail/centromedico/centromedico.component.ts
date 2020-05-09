import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specialista } from 'src/app/model';

@Component({
  selector: 'app-centromedico',
  templateUrl: './centromedico.component.html',
  styleUrls: ['./centromedico.component.scss']
})
export class CentromedicoComponent implements OnInit {

  specialisti: Specialista[] = [];

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    window.scroll(0, 0);
  }
}
