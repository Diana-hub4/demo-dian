import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsfComponent } from './pqrsf.component';

describe('PqrsfComponent', () => {
  let component: PqrsfComponent;
  let fixture: ComponentFixture<PqrsfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PqrsfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PqrsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
