import { Component, OnInit } from '@angular/core';
import { Specialista, Servizio } from 'src/app/models/model';
import { VertexService } from 'src/app/services/vertex.service';

@Component({
  selector: 'app-centromedico',
  templateUrl: './centromedico.component.html',
  styleUrls: ['./centromedico.component.scss']
})
export class CentromedicoComponent implements OnInit {

  specialisti: Specialista[] = [];
  public serviziCentroList: Servizio[];
  public specialistiList: Specialista[];
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
    });
    this.vertexService.getSpecialisti().subscribe(data => {
      this.specialistiList = data.filter(x => x.area === 'centro medico');
    });
  }
  onShowDetail(servizio: string) {
    if (servizio !== this.detailToShow) {
      switch (servizio) {
        case 'Fisiatria': {
          this.buttonText = 'I nostri fisiatri';
          this.detailToShow = 'Fisiatria';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/fisiatra.jpg")');
          break;
        }
        case 'Fisioterapia': {
          this.buttonText = 'I nostri fisioterapisti';
          this.detailToShow = 'Fisioterapia';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/fisioterapista.jpg")');
          break;
        }
        // case 'Massoterapia': {
        //   this.buttonText = 'I nostri massoterapisti';
        //   this.detailToShow = 'Massoterapia';
        //   $('.background-imgholder').css('background-image', 'url("../../../../assets/images/massoterapista.jpg")');
        //   break;
        // }
        case 'Nutrizione': {
          this.buttonText = 'I nostri nutrizionisti';
          this.detailToShow = 'Nutrizione';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/nutrizionista.jpg")');
          break;
        }
        // case 'Ortopedia': {
        //   this.buttonText = 'I nostri ortopedici';
        //   this.detailToShow = 'Ortopedia';
        //   $('.background-imgholder').css('background-image', 'url("../../../../assets/images/ortopedico.jpg")');
        //   break;
        // }
        case 'Osteopatia': {
          this.buttonText = 'I nostri osteopati';
          this.detailToShow = 'Osteopatia';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/osteopata.jpg")');
          break;
        }
        // case 'Otorinolaringoiatria': {
        //   this.buttonText = 'I nostri otorinolaringoiatri';
        //   this.detailToShow = 'Otorinolaringoiatria';
        //   $('.background-imgholder').css('background-image', 'url("../../../../assets/images/otorinolaringoiatra.jpg")');
        //   break;
        // }
        case 'Psicoterapia': {
          this.buttonText = 'I nostri psicoterapisti';
          this.detailToShow = 'Psicoterapia';
          $('.background-imgholder').css('background-image', 'url("../../../../assets/images/psicoterapeuta.jpg")');
          break;
        }
      }
      this.selectedSpecialista = this.specialistiList.find(specialista =>
        specialista.servizio === servizio);
    } else {
      this.detailToShow = undefined;
    }
  }
}
