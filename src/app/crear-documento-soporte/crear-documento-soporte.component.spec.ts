import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDocumentoSoporteComponent } from './crear-documento-soporte.component';

describe('CrearDocumentoSoporteComponent', () => {
  let component: CrearDocumentoSoporteComponent;
  let fixture: ComponentFixture<CrearDocumentoSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearDocumentoSoporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDocumentoSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
