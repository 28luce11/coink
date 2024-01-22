import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formError'
})
export class FormErrorPipe implements PipeTransform {
  transform(errors: ValidationErrors | null, errorMessages: { [key: string]: string }): string | null {
    let errorKey = Object.keys(errors || {})[0];
    const error = errorKey ? errorMessages[errorKey] : null;

    return error || null;
  }
}
