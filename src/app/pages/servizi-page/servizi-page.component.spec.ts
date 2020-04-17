import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziPageComponent } from './servizi-page.component';

describe('ServiziPageComponent', () => {
  let component: ServiziPageComponent;
  let fixture: ComponentFixture<ServiziPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiziPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiziPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
