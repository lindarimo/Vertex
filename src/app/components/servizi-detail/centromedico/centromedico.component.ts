import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specialista } from 'src/app/model';

@Component({
  selector: 'app-centromedico',
  templateUrl: './centromedico.component.html',
  styleUrls: ['./centromedico.component.scss']
})
export class CentromedicoComponent implements OnInit {

  specialisti: Specialista[] = [];
  public isCollapsed = false;
  public detailToShow: string;

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    window.scroll(0, 0);
  }
  onShowDetail(servizio: string) {
    if (servizio !== this.detailToShow) {
      switch (servizio) {
        case 'fisioterapia': {
          this.detailToShow = 'fisioterapia';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/fisioterapista.jpg")');
          break;
        }
        case 'massoterapia': {
          this.detailToShow = 'massoterapia';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/massoterapista.jpg")');
          break;
        }
        case 'nutrizione': {
          this.detailToShow = 'nutrizione';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/nutrizionista.jpg")');
          break;
        }
        case 'ortopedia': {
          this.detailToShow = 'ortopedia';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/ortopedico.jpg")');
          break;
        }
        case 'osteopatia': {
          this.detailToShow = 'osteopatia';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/osteopata.jpg")');
          break;
        }
      }
    } else {
      this.detailToShow = undefined;
    }
  }
}
