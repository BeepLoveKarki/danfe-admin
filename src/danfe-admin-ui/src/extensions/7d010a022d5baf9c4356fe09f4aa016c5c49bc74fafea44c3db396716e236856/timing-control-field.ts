import { NgModule, Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule, CustomFieldControl, 
  CustomFieldConfigType, registerCustomFieldComponent } from '@vendure/admin-ui/core';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  template: `
   <form [formGroup]="timeForm">
	
	<select formControlName="weekDay">
      <option value="" disabled>Choose Week Day</option>
      <option *ngFor="let day of week" [ngValue]="day">{{day}}</option>
    </select>
	<br/><br/>
	<input formControlName="fromTime" type="time"> -
    <input formControlName="toTime" type="time">
   
   </form>
   `
})


export class TimingControl implements CustomFieldControl,OnInit,OnDestroy {
  readonly: boolean;
  config: CustomFieldConfigType;
  formControl: FormControl;
  week: any = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  subs: Subscription;
  datas = new Array();
  
  timeForm = new FormGroup({
	 weekDay: new FormControl(''),
     fromTime: new FormControl(''),
	 toTime: new FormControl('')
   });

  
  ngOnInit() {
	
	//console.log(this.formControl.value);
	
    if(!this.formControl.value){
	  this.formControl.setValue(JSON.stringify({
	    weekDay: "",
		fromTime: "",
		toTime: ""
	  }));
	}
	
	this.timeForm.setValue(this.formControl.value);
	 
    this.timeForm.valueChanges.subscribe((value) => {
		if(this.checknotempty(value)){
		   this.datas.push(value);
		}
		this.formControl.setValue(this.datas.toString());
    });	
  
 }
 
 checknotempty(object){
  let i=0;
  Object.keys(object).forEach(function (key) {
    if (object[key] === '') {
      i++;
    }
  });
  
  if(i>=3){
    return false;
  }
  
  return true;
 
 }
 
 ngOnDestroy(){
     //this.formControl.reset();
	 //this.subs.unsubscribe();
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