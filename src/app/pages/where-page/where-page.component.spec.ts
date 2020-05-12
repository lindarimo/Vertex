import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WherePageComponent } from './where-page.component';

describe('WherePageComponent', () => {
  let component: WherePageComponent;
  let fixture: ComponentFixture<WherePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WherePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WherePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
