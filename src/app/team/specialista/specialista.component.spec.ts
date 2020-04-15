import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistaComponent } from './specialista.component';

describe('SpecialistaComponent', () => {
  let component: SpecialistaComponent;
  let fixture: ComponentFixture<SpecialistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
