import { Component, OnInit } from '@angular/core';
import { Specialista, Servizio } from 'src/app/model';
import { VertexService } from 'src/app/vertex.service';

@Component({
  selector: 'app-centromedico',
  templateUrl: './centromedico.component.html',
  styleUrls: ['./centromedico.component.scss']
})
export class CentromedicoComponent implements OnInit {

  specialisti: Specialista[] = [];
  public serviziCentroList: Servizio[];
  public specCentroList: Specialista[];
  public isCollapsed = false;
  public detailToShow: string;
  public isServizioToShow = false;
  public routerServizio: string;
  public selectedSpecialista: Specialista;
  public routerId: string;
  public buttonText: string;

  constructor(private vertexService: VertexService) { }
  ngOnInit() {
    this.loadServizi();
    window.scroll(0, 0);
  }
  loadServizi() {
    this.vertexService.getServiziCentro().subscribe(data => {
      this.serviziCentroList = data;
      console.log(this.serviziCentroList);
    });
    this.vertexService.getSpecCentro().subscribe(data => {
      this.specCentroList = data;
    });
  }
  onShowDetail(servizio: string) {
    if (servizio !== this.detailToShow) {
      switch (servizio) {
        case 'Fisioterapia': {
          this.buttonText = 'I nostri fisioterapisti';
          this.detailToShow = 'Fisioterapia';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/fisioterapista.jpg")');
          break;
        }
        case 'Massoterapia': {
          this.buttonText = 'I nostri massoterapisti';
          this.detailToShow = 'Massoterapia';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/massoterapista.jpg")');
          break;
        }
        case 'Nutrizione': {
          this.buttonText = 'I nostri nutrizionisti';
          this.detailToShow = 'Nutrizione';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/nutrizionista.jpg")');
          break;
        }
        case 'Ortopedia': {
          this.buttonText = 'I nostri ortopedici';
          this.detailToShow = 'Ortopedia';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/ortopedico.jpg")');
          break;
        }
        case 'Osteopatia': {
          this.buttonText = 'I nostri osteopati';
          this.detailToShow = 'Osteopatia';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/osteopata.jpg")');
          break;
        }
      }
      this.selectedSpecialista = this.specCentroList.find(specialista =>
        specialista.servizio === servizio);
    } else {
      this.detailToShow = undefined;
    }
  }
}
