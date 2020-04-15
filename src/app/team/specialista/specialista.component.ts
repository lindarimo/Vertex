import { Component, OnInit, Input } from '@angular/core';
import { TeamComponent } from '../team.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-specialista',
  templateUrl: './specialista.component.html',
  styleUrls: ['./specialista.component.scss']
})

export class SpecialistaComponent implements OnInit {

  constructor() { }
  private specialista;
  ngOnInit() {
 
  }

}
