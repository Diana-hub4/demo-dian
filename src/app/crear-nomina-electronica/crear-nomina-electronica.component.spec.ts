import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNominaElectronicaComponent } from './crear-nomina-electronica.component';

describe('CrearNominaElectronicaComponent', () => {
  let component: CrearNominaElectronicaComponent;
  let fixture: ComponentFixture<CrearNominaElectronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearNominaElectronicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearNominaElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
