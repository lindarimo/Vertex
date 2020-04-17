import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziDetailComponent } from './servizi-detail.component';

describe('ServiziDetailComponent', () => {
  let component: ServiziDetailComponent;
  let fixture: ComponentFixture<ServiziDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiziDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiziDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
