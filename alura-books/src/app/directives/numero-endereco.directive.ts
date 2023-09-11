import { Directive } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Directive({
  selector: "[numeroEnderecoValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumeroEnderecoDirective,
      multi: true,
    },
  ],
})
export class NumeroEnderecoDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    try {
      const numero = Number(control.value);
      return numero > 0 ? null : { numeroEnderecoValidator: true };
    } catch (error) {
      return { numeroEnderecoValidator: true };
    }
  }
}
