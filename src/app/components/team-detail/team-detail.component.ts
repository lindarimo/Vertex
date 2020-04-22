import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  @Input() specialistiList: any;

  // detailOpen = false;
  // showDetail = false;
  // toggleNavbar() {
  //   this.detailOpen = !this.detailOpen;
  // }
  constructor() { }

  ngOnInit() {
  }

  onShowDetail(id: number) {
    $('#detail' + id).toggle();
  }

}
