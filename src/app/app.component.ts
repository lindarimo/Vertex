import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Vertex';
  isShow: boolean;
  topPosToStartShowing = 100;

  private cookieValue: string;

  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  constructor(private cookieService: CookieService) { }
  ngOnInit(): void {
    this.cookieService.set('cookie-name', 'our cookie value');
    this.cookieValue = this.cookieService.get('cookie-name');
  }
}
