import { Component, OnInit, HostListener, AfterViewChecked, AfterViewInit } from '@angular/core';
import { VertexService } from '../../services/vertex.service';
import { Specialista } from 'src/app/models/model';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  public specialistiList: Specialista[];

  constructor(
    private vertexService: VertexService,
    // private modalService: ModalService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.loadSpecialisti();
  }

  ngAfterViewInit() {
    // this.openModal('custom-modal-1');
  }

  // openModal(id: string) {
  //   setTimeout(() => {
  //     this.modalService.open(id);
  //   }, 3000);

  // }

  // closeModal(id: string) {
  //   this.modalService.close(id);
  // }

  loadSpecialisti() {
    this.vertexService.getSpecialisti().subscribe(data => {
      this.specialistiList = data;
    });
  }
}
