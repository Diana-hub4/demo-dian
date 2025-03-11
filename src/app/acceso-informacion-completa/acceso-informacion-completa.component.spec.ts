import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoInformacionCompletaComponent } from './acceso-informacion-completa.component';

describe('AccesoInformacionCompletaComponent', () => {
  let component: AccesoInformacionCompletaComponent;
  let fixture: ComponentFixture<AccesoInformacionCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoInformacionCompletaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoInformacionCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
