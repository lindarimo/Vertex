import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss']
})
export class WorkWithUsComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.title.setTitle('Vertex Arese - Palestra e centro medico polispecialistico | Lavora con noi');
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({ name: 'description', content: 'Inviaci il tuo Curriculum Vitae a info@vertexarese.it' });
  }
  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    const tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = 'Copiato: ';
  }

}
