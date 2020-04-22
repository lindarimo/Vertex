import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VertexService } from 'src/app/vertex.service';
import { Specialista } from 'src/app/model';

@Component({
  selector: 'app-specialista',
  templateUrl: './specialista.component.html',
  styleUrls: ['./specialista.component.scss']
})

export class SpecialistaComponent implements OnInit {
  @Input() selectedSpecialista: Specialista[];
  @Input() specialistiList: Specialista;
  // public serviziList;
  constructor(
    private vertexService: VertexService) { }

  ngOnInit() {
    this.loadSpecialisti();
  }
  loadSpecialisti() {
    // this.vertexService.getServizi().subscribe(data => {
    //   console.log(data);
    //   this.serviziList = data;
    // });
  }
}
