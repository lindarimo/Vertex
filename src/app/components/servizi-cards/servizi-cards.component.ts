import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servizi-cards',
  templateUrl: './servizi-cards.component.html',
  styleUrls: ['./servizi-cards.component.scss']
})
export class ServiziCardsComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit() {
  }
}
