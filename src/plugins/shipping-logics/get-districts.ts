import Nepal from 'nepal-js';

export function getDistricts(){
  let dist = new Array();
  Object.keys(Nepal.Districts).forEach((val)=>{
     let json = <any>{};
	 json["value"] = val;
	 dist.push(json);
  });
  return dist;
}
