import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palestra',
  templateUrl: './palestra.component.html',
  styleUrls: ['./palestra.component.scss']
})
export class PalestraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
