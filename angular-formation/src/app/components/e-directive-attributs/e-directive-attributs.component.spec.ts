import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDirectiveAttributsComponent } from './e-directive-attributs.component';

describe('EDirectiveAttributsComponent', () => {
  let component: EDirectiveAttributsComponent;
  let fixture: ComponentFixture<EDirectiveAttributsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDirectiveAttributsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EDirectiveAttributsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
