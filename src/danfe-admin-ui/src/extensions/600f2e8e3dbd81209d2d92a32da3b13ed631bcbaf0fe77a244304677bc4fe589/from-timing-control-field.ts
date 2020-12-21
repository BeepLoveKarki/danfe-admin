import { NgModule, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule, CustomFieldControl, 
  CustomFieldConfigType, registerCustomFieldComponent } from '@vendure/admin-ui/core';

@Component({
  template: `
   <input
      type="time"
      [formControl]="formControl" />
	 {{ formControl.value }}
  `,
})

export class FromTimingControl implements CustomFieldControl {
  readonly: boolean;
  config: CustomFieldConfigType;
  formControl: FormControl;
}

@NgModule({
  imports: [SharedModule],
  declarations: [FromTimingControl],
  providers: [
    registerCustomFieldComponent('Customer', 'operationTimes', FromTimingControl),
  ]
})

export class FromTimingControlFieldModule { }