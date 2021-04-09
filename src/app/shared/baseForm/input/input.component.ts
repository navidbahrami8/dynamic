import {
  Component,
  ChangeDetectionStrategy,
  Renderer2,
  ViewChild,
  forwardRef,
  Input,
  ElementRef
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: forwardRef(() => InputComponent),
    //   multi: true
    // }
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {
  @ViewChild('input', { static: true }) input: ElementRef<HTMLInputElement>;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};
  // onValidationChange: any = () => {};
  hasError: boolean = false;

  constructor(private renderer: Renderer2) {}

  writeValue(value: any): void {
    this.renderer.setProperty(this.input.nativeElement, 'value', value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   this.onValidationChange = fn;
  // }

  change(event) {
    this.onChange(event.target.value);
  }

  // TODO: check disabled Mode
  setDisabledState(isDisabled: boolean): void {
    const input = this.input.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](input, 'disabled');
  }

  // validate(control: FormControl) {
  //   if (control.invalid) {
  //     this.hasError = true;
  //   } else {
  //     this.hasError = false;
  //   }
  // }
}
