import { NgModule, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule, CustomFieldControl, 
  CustomFieldConfigType, registerCustomFieldComponent } from '@vendure/admin-ui/core';

@Component({
  template: `
   <form [formGroup]="timeForm">
	<select formControlName="weekDay">
     <option value = "Sunday">Sunday</option>
	 <option value = "Monday">Monday</option>
	 <option value = "Tuesday">Tuesday</option>
	 <option value = "Wednesday">Wednesday</option>
	 <option value = "Thursday">Thursday</option>
	 <option value = "Friday">Friday</option>
	 <option value = "Saturday">Saturday</option>
   </select>
	<input formControlName="fromTime" type="time">
    <input formControlName="toTime" type="time">
   </form>
   `
})

export class TimingControl implements CustomFieldControl {
  readonly: boolean;
  config: CustomFieldConfigType;
  formControl: FormControl;
  
  timeForm = new FormGroup({
	 weekDay: new FormControl(''),
     fromTime: new FormControl(''),
	 toTime: new FormControl('')
  });
  
  ngOnInit() {
	
    if(this.formControl){
	  this.timeForm.setValue(this.formControl.value);
	}
	
    this.timeForm.valueChanges.subscribe((value) => {
       this.formControl.setValue(JSON.stringify(value));
    }); 
  
  }
  
}

@NgModule({
  imports: [SharedModule],
  declarations: [TimingControl],
  providers: [
    registerCustomFieldComponent('Customer', 'operationTimes', TimingControl),
  ]
})

export class TimingControlFieldModule { }