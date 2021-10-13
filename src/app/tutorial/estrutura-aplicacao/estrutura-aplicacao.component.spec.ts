import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaAplicacaoComponent } from './estrutura-aplicacao.component';

describe('EstruturaAplicacaoComponent', () => {
  let component: EstruturaAplicacaoComponent;
  let fixture: ComponentFixture<EstruturaAplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturaAplicacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
