import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormErrorPipe } from './pipes/form-error/form-error.pipe';

@NgModule({
  declarations: [FormErrorPipe],
  imports: [CommonModule],
  exports: [FormErrorPipe],
})
export class SharedModule {}
