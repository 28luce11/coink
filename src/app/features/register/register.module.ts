import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaskitoModule } from '@maskito/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { ContractComponent } from './components/contract/contract.component';
import { RegistrationDataComponent } from './components/registration-data/registration-data.component';
import { RegistrationMobileComponent } from './components/registration-mobile/registration-mobile.component';
import { ViewTextComponent } from './components/view-text/view-text.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MaskitoModule,
    RegisterPageRoutingModule,
    SharedModule
  ],
  declarations: [
    RegisterPage,
    RegistrationMobileComponent,
    ViewTextComponent,
    RegistrationDataComponent,
    ContractComponent
  ],
})
export class RegisterPageModule {}
