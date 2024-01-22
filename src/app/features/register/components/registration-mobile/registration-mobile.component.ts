import { Component, EventEmitter, Output } from '@angular/core';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';
import { registerUser } from 'src/app/shared/constants/register-user';
import { RegisterUser } from 'src/app/shared/models/register-user';

@Component({
  selector: 'app-registration-mobile',
  templateUrl: './registration-mobile.component.html',
  styleUrls: ['./registration-mobile.component.scss'],
})
export class RegistrationMobileComponent {
  @Output() sendPag = new EventEmitter<Partial<RegisterUser>>();
  numberMobile!: string;
  readonly phoneMask: MaskitoOptions = {
    mask: ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };
  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();

  send() {
    this.sendPag.emit({ numberMobile: this.numberMobile })
    console.log('Se ingreso numero de celular', this.numberMobile)
  }
}
