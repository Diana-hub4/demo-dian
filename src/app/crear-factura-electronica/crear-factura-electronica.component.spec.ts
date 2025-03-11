import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFacturaElectronicaComponent } from './crear-factura-electronica.component';

describe('CrearFacturaElectronicaComponent', () => {
  let component: CrearFacturaElectronicaComponent;
  let fixture: ComponentFixture<CrearFacturaElectronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearFacturaElectronicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearFacturaElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
