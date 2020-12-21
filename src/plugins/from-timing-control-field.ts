import { NgModule, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule, CustomFieldControl, 
  CustomFieldConfigType, registerCustomFieldComponent } from '@vendure/admin-ui/core';

@Component({
  template: `
   <select [formControl]="formControl">
    <option value = "Sunday">Sunday</option>
	<option value = "Monday">Sunday</option>
	<option value = "Tuesday">Sunday</option>
	<option value = "Wednesday">Sunday</option>
	<option value = "Thursday">Sunday</option>
	<option value = "Friday">Sunday</option>
	<option value = "Saturday">Sunday</option>
   </select>
   {{ formControl.value }}
   
   <input
      type="time"
      [formControl]="formControl" />
	  {{ formControl.value }}
   -
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