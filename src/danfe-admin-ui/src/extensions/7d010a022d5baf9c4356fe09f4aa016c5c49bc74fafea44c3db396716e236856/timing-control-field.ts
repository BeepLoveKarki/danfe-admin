import { NgModule, Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserInputError } from '@vendure/core';
import { SharedModule, CustomFieldControl, CustomFieldConfigType, registerCustomFieldComponent } from '@vendure/admin-ui/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


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
    <br/><br/>
    <p *ngIf="error"><small>Opening Time later than the Closing Time is unacceptable.</small></p>	
   </form>
   `
})


export class TimingControl implements CustomFieldControl {
  readonly: boolean;
  config: CustomFieldConfigType;
  formControl: FormControl;
  week: any = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  destroy$ = new Subject();
  timeForm: FormGroup;
  data = new Array();
  error = false;
    
  constructor(){
   
   this.timeForm = new FormGroup({
	 weekDay: new FormControl(''),
     fromTime: new FormControl(''),
	 toTime: new FormControl('')
   });
  
  
  
  }

  ngOnInit() {
	
    if(!this.formControl.value || this.formControl.value.length==0){
	  this.formControl.patchValue({
	    weekDay: "",
		fromTime: "",
		toTime: ""
	  });
	  this.timeForm.patchValue(this.formControl.value);
	}else{
	  let ctime = this.formControl.value;
	  let time = this.formControl.value.split("-");
	  this.formControl.patchValue({
	    weekDay: time[0],
		fromTime: time[1],
		toTime: time[2]
	  });
	  this.timeForm.patchValue(this.formControl.value);
	  this.formControl.patchValue(ctime);
	}
	
	
    this.timeForm.valueChanges.pipe(
	  takeUntil(this.destroy$)
	).subscribe((value) => {
		if(this.checkallfields(value)){
		  this.formControl.patchValue(this.convertToString(value));
		}
    });


 }
 
 convertToString(object){
    let data = object["weekDay"]+"-"+object["fromTime"]+"-"+object["toTime"];
	return data;
 }
 
 checkallfields(object){
   
   if(object["fromTime"].length!=0 && object["toTime"].length!=0 && object["weekDay"].length!=0){
     let t1sec = this.toseconds(object["fromTime"]);
     let t2sec = this.toseconds(object["toTime"]);
     let diff = t2sec-t1sec;
   
     if(diff < 0){
	  //throw new UserInputError("Either of the inputs have opening time later than the closing time.");  
	  //alert("Either of the inputs have opening time later than the closing time.");
	  this.error = true;
	  return false;
	 }
	 
	 this.error = false;
	 return true;
   
   }else{
     return false;
   }
   
   
 }
 
 toseconds(time){
    let a = time.split(":");
	console.log(a);
	let seconds = Number(a[0])*60*60+Number(a[1])*60;
	console.log(seconds);
	return seconds;
 }
 
 
 ngOnDestroy(){
	this.destroy$.next();
    this.destroy$.complete();
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