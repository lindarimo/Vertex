import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziSideMenuComponent } from './servizi-side-menu.component';

describe('ServiziSideMenuComponent', () => {
  let component: ServiziSideMenuComponent;
  let fixture: ComponentFixture<ServiziSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiziSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiziSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
