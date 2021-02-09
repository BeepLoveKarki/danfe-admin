import { NgModule, Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule, CustomFieldControl, CustomFieldConfigType, registerCustomFieldComponent } from '@vendure/admin-ui/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  template: `
	<textarea  [formControl]="formControl" rows="6" cols="30">
    </textarea>
   `
})


export class DescriptionControl implements CustomFieldControl {
  readonly: boolean;
  config: CustomFieldConfigType;
  formControl: FormControl;
}

@NgModule({
  imports: [SharedModule],
  declarations: [DescriptionControl],
  providers: [
    registerCustomFieldComponent('GlobalSettings', 'ecommercedescription', DescriptionControl),
  ]
})

export class EcommerceDescriptionControlFieldModule { }