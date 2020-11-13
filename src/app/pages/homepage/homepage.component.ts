import { Component, OnInit, HostListener, AfterViewChecked, AfterViewInit } from '@angular/core';
import { VertexService } from '../../services/vertex.service';
import { Specialista } from 'src/app/models/model';
import { ModalService } from 'src/app/services/modal.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  public specialistiList: Specialista[];

  constructor(
    private vertexService: VertexService,
    private modalService: ModalService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    // tslint:disable-next-line:max-line-length
    this.title.setTitle('Vertex Arese - Palestra e centro medico polispecialistico | personal training, fisioterapia, osteopatia, Tecar, ortopedia');
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({ name: 'description', content: 'Palestra, centro medico polispecialistico, riabilitativo, ortopedico e fisioterapico ad Arese (Milano). I nostri servizi: ortopedia, fisioterapia, ginnastica riabilitativa, Tens, osteopatia, nutrizione.' });

    this.loadSpecialisti();
  }

  ngAfterViewInit() {
    this.openModal('custom-modal-1');
  }

  openModal(id: string) {
    setTimeout(() => {
      this.modalService.open(id);
    }, 3000);

  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  loadSpecialisti() {
    this.vertexService.getSpecialisti().subscribe(data => {
      this.specialistiList = data;
    });
  }
}
