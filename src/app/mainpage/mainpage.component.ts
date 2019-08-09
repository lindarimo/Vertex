import { Component, OnInit, NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
@NgModule({
  imports: [NgbModule],
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
