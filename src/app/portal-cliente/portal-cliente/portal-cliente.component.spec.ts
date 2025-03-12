import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalClienteComponent } from './portal-cliente.component';

describe('PortalClienteComponent', () => {
  let component: PortalClienteComponent;
  let fixture: ComponentFixture<PortalClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
