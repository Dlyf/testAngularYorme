import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IiiDirectivesStructurellesComponent } from './iii-directives-structurelles.component';

describe('IiiDirectivesStructurellesComponent', () => {
  let component: IiiDirectivesStructurellesComponent;
  let fixture: ComponentFixture<IiiDirectivesStructurellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IiiDirectivesStructurellesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IiiDirectivesStructurellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
