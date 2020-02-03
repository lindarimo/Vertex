import { Component, OnInit, NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
@NgModule({
  imports: [NgbModule],
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
