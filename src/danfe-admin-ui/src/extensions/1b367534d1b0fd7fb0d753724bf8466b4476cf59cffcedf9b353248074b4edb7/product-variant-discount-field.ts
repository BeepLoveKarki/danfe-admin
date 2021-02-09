import { NgModule, Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule, CustomFieldControl, CustomFieldConfigType, registerCustomFieldComponent } from '@vendure/admin-ui/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  template: `
	
	<select [formControl]="formControl">
     <option *ngFor="let type of types" [ngValue]="type">{{type}}</option>
    </select>
	
   `
})


export class DiscountTypeControl implements CustomFieldControl {
  readonly: boolean;
  config: CustomFieldConfigType;
  types: any = ['Amount','Percentage','New Price'];
  formControl: FormControl;
}

@NgModule({
  imports: [SharedModule],
  declarations: [DiscountTypeControl],
  providers: [
    registerCustomFieldComponent('ProductVariant', 'discounttype', DiscountTypeControl),
  ]
})

export class ProductVariantDiscounttypeControlFieldModule { }