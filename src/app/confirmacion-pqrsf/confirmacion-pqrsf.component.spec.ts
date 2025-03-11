import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionPqrsfComponent } from './confirmacion-pqrsf.component';

describe('ConfirmacionPqrsfComponent', () => {
  let component: ConfirmacionPqrsfComponent;
  let fixture: ComponentFixture<ConfirmacionPqrsfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionPqrsfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionPqrsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
