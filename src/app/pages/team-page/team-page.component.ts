import { Component, OnInit } from '@angular/core';
import { VertexService } from 'src/app/vertex.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  public serviziList: any;

  constructor(
    private vertexService: VertexService
  ) { }

  ngOnInit() {
    this.loadServizi();
  }
  loadServizi() {
    this.vertexService.getSpecialisti().subscribe(data => {
      console.log(data);
      this.serviziList = data;
    });
  }
}
