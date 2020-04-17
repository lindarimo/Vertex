import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VertexService } from '../../vertex.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public serviziList: any;
  constructor(
    private vertexService: VertexService
  ) { }

  ngOnInit() {
    this.loadServizi();
  }
  loadServizi() {
    this.vertexService.getServizi().subscribe(data => {
      console.log(data);
      this.serviziList = data;
    });
  }
}
