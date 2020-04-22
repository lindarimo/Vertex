import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VertexService } from '../../vertex.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public specialistiList: any;
  constructor(
    private vertexService: VertexService
  ) { }

  ngOnInit() {
    this.loadSpecialisti();
  }
  loadSpecialisti() {
    this.vertexService.getSpecialisti().subscribe(data => {
      console.log(data);
      this.specialistiList = data;
    });
  }
}
