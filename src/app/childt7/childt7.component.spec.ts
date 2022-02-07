import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childt7Component } from './childt7.component';

describe('Childt7Component', () => {
  let component: Childt7Component;
  let fixture: ComponentFixture<Childt7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childt7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childt7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
