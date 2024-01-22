import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { registerUser } from 'src/app/shared/constants/register-user';
import { DocumentTypes } from 'src/app/shared/models/document-type';
import { Gender } from 'src/app/shared/models/genders';
import { equalValidator } from 'src/app/shared/validators/equal-validator';
import { errorMessages } from './registration-data.constant';
import { RegisterUser } from 'src/app/shared/models/register-user';

@Component({
  selector: 'app-registration-data',
  templateUrl: './registration-data.component.html',
  styleUrls: ['./registration-data.component.scss'],
})
export class RegistrationDataComponent {
  @Output()
  sendPag = new EventEmitter<Partial<RegisterUser>>();
  
  @Input()
  documentTypes: DocumentTypes[] = [];
  
  @Input()
  genders: Gender[] = [];

  hideEye : boolean = true;
  hideEyeConfirm : boolean = true;
  errorMessages = errorMessages;
  formRegisterUser = this.buildForm();

  private buildForm() {
    return new FormGroup({
      documentType: new FormControl('', [
        Validators.required,
      ]),
      document: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      documentDate: new FormControl('', [
        Validators.required
      ]),
      birthDate: new FormControl('', [
        Validators.required
      ]),
      gender: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(registerUser.emailPattern)
      ]),
      emailConfirm: new FormControl('', [
        Validators.required,
        Validators.pattern(registerUser.emailPattern)
      ]),
      pin: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      pinConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    }, [
      equalValidator('email', 'emailConfirm'),
      equalValidator('pin', 'pinConfirm'),
    ])
  }

  sendData(value: any) {
    console.log('Se diligencio el formulario de registro', value);
    this.send();
  }

  viewEye() {
    this.hideEye = !this.hideEye;
  }

  viewEyeConfirm() {
    this.hideEyeConfirm = !this.hideEyeConfirm;
  }

  send() {
    this.sendPag.emit(this.formRegisterUser.value as RegisterUser)
  }
}
