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

export class ToTimingControl implements CustomFieldControl {
  readonly: boolean;
  config: CustomFieldConfigType;
  formControl: FormControl;
}

@NgModule({
  imports: [SharedModule],
  declarations: [ToTimingControl],
  providers: [
    registerCustomFieldComponent('Customer', 'operationTimes', ToTimingControl),
  ]
})

export class ToTimingControlFieldModule { }