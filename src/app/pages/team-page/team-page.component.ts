import { Component, OnInit } from '@angular/core';
import { VertexService } from 'src/app/vertex.service';
import { Specialista } from 'src/app/model';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  public specialistiList: Specialista[];

  constructor(
    private vertexService: VertexService
  ) { }

  ngOnInit() {
    this.loadServizi();
  }
  loadServizi() {
    this.vertexService.getSpecialisti().subscribe(data => {
      console.log(data);
      this.specialistiList = data;
    });
  }
}
