import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparandoAmbienteComponent } from './preparando-ambiente.component';

describe('PreparandoAmbienteComponent', () => {
  let component: PreparandoAmbienteComponent;
  let fixture: ComponentFixture<PreparandoAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparandoAmbienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparandoAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
