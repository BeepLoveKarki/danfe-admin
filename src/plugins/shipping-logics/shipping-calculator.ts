import { LanguageCode, ShippingCalculator } from '@vendure/core';
import fs from 'fs';
import path from 'path';
import csv from 'csvtojson';

export const externalShippingCalculator = new ShippingCalculator({
  code: 'danfe-shipping-calculator',
  description: [{ languageCode: LanguageCode.en, value: 'Danfe Shipping Calculator' }],
  args: {
    taxRate: {
      type: 'int',
      ui: { component: 'number-form-input', suffix: '%' },
      label: [{ languageCode: LanguageCode.en, value: 'Tax rate' }],
    },
  },
  
  calculate: async (ctx, order, args) => {
	
	let district = order.shippingAddress.customFields?.district || '';
	let area = order.shippingAddress.customFields?.area || '';
	
	let fpath = path.join(__dirname,'../../shipping-rates/'+district+'.csv');
	
	let toreturn = <any>{};
	toreturn["priceIncludesTax"] = ctx.channel.pricesIncludeTax;
	toreturn["taxRate"] = args.taxRate;
	toreturn["price"] = 0;
	toreturn["metadata"] = <any>{};
	toreturn["metadata"]["deliveryDate"] = null;
	toreturn["metadata"]["possible"] = false; //this determines what to show
	
	try{
	 
	 if (fs.existsSync(fpath)) {
	  //calculate
	  
	  let totalWeight = order.lines
      .map((l) => (l.productVariant.customFields as any).weight * l.quantity)
      .reduce((total, lineWeight) => total + lineWeight, 0);
	  
	  
	  let rate;
	  let deliveryDate;
	  
	  let array = await csv().fromFile(fpath);
	  
	  let flag = 0;
	  for(let i =0;i<array.length;i++){
		if(array[i]["PLACE"]==area){
		   flag = 1;
		   rate = Math.ceil((array[i]["COST PER GRAM"]*100)*totalWeight); //cost per gram is in rs to converting to paisa
		   deliveryDate = array[i]["ESTIMATED TIME"];
		   break;
		}
	  }
	  
	  if(flag==1){
	    toreturn["price"] = rate;
	    toreturn["metadata"]["deliveryDate"] = deliveryDate;
	    toreturn["metadata"]["possible"] = true;
	  }
	  
	 }
	
	}catch(err){
	  return toreturn;
	}
	
    return toreturn;
  },
});