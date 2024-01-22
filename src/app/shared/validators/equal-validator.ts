import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function equalValidatorInternal(control: AbstractControl): ValidationErrors | null {
    const group = control as FormGroup;
    const controlMain = group.get('email')?.value;
    const controlConfirm = group.get('emailConfirm')?.value;
    
    //si no coinciden return el error 
    if (controlMain !== controlConfirm) {
        return {
            noMathValue: true
        };
    }

    return null;
}


export function equalValidator(controlName: string, controlConfirmName: string): ValidatorFn {
    return (control: AbstractControl) => {
        const group = control as FormGroup;
        const controlValue = group.get(controlName)?.value;
        const controlConfirm = group.get(controlConfirmName)!;
        const controlConfirmValue = controlConfirm.value;
        
        //si no coinciden return el error 
        if (controlValue !== controlConfirmValue) {
            controlConfirm.setErrors({
                ...controlConfirm.errors,
                [`${controlName}NoMathValue`]: true
            });

            return {
                [`${controlName}NoMathValue`]: true
            };
        }

        return null;
    }
}
