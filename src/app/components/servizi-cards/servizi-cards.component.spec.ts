import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziCardsComponent } from './servizi-cards.component';

describe('ServiziCardsComponent', () => {
  let component: ServiziCardsComponent;
  let fixture: ComponentFixture<ServiziCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiziCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiziCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
