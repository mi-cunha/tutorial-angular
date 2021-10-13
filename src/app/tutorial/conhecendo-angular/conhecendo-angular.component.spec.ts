import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecendoAngularComponent } from './conhecendo-angular.component';

describe('ConhecendoAngularComponent', () => {
  let component: ConhecendoAngularComponent;
  let fixture: ComponentFixture<ConhecendoAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConhecendoAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConhecendoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
