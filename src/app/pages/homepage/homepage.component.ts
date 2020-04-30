import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VertexService } from '../../vertex.service';
import { Specialista } from 'src/app/model';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public specPalestraList: Specialista[];
  public specCentroList: Specialista[];

  constructor(
    private vertexService: VertexService
  ) { }

  ngOnInit() {
    this.loadSpecialisti();
  }
  loadSpecialisti() {
    this.vertexService.getSpecPalestra().subscribe(data => {
      console.log(data);
      this.specPalestraList = data;
    });
    this.vertexService.getSpecCentro().subscribe(data => {
      console.log(data);
      this.specCentroList = data;
    });
  }
}
