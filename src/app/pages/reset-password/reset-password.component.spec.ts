import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ResetPasswordComponent } from './reset-password.component';
import { FormBuilder } from '@angular/forms';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ResetPasswordComponent,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ token: 'test-token-123' })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with token from URL', () => {
    expect(component.resetPasswordForm.get('token')?.value).toBe('test-token-123');
  });

  it('should require all fields', () => {
    const form = component.resetPasswordForm;
    expect(form.invalid).toBeTruthy();

    form.patchValue({
      token: 'test-token',
      newPassword: 'newPassword123',
      confirmPassword: 'newPassword123'
    });
    expect(form.valid).toBeTruthy();
  });

  it('should validate password match', () => {
    const form = component.resetPasswordForm;
    form.patchValue({
      token: 'test-token',
      newPassword: 'password123',
      confirmPassword: 'differentPassword'
    });
    expect(form.hasError('passwordMismatch')).toBeTruthy();
  });

  it('should toggle password visibility', () => {
    expect(component.hidePassword).toBeTrue();
    component.hidePassword = false;
    expect(component.hidePassword).toBeFalse();
  });
});