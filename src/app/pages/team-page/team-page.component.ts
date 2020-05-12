import { Component, OnInit } from '@angular/core';
import { VertexService } from 'src/app/vertex.service';
import { Specialista } from 'src/app/model';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  public specPalestraList: Specialista[];
  public specCentroList: Specialista[];

  constructor(
    private vertexService: VertexService
  ) { }

  ngOnInit() {
    this.loadServizi();
  }
  loadServizi() {
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
