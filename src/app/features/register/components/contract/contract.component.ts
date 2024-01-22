import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { RegisterUser } from 'src/app/shared/models/register-user';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss'],
})
export class ContractComponent {
  @Output()
  sendPag = new EventEmitter<Partial<RegisterUser>>();

  checkContract = false;

  send() {
    console.log('Se chequeo el contrato', this.checkContract);
    this.sendPag.emit({
      checkContract: this.checkContract
    })
  }
}
