import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MReactiveFormsComponent } from './m-reactive-forms.component';

describe('MReactiveFormsComponent', () => {
  let component: MReactiveFormsComponent;
  let fixture: ComponentFixture<MReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
