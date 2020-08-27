import { Component, OnInit, HostListener, AfterViewChecked, AfterViewInit } from '@angular/core';
import { VertexService } from '../../vertex.service';
import { Specialista } from 'src/app/model';
import { ModalService } from 'src/app/modal.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  public specPalestraList: Specialista[];
  public specCentroList: Specialista[];

  constructor(
    private vertexService: VertexService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

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
    this.vertexService.getSpecPalestra().subscribe(data => {
      console.log(data);
      this.specPalestraList = data;
    });
    this.vertexService.getSpecCentro().subscribe(data => {
      console.log(data);
      this.specCentroList = data;
    });
  }
}
