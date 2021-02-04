// Code your solution here
function findMatching(drivers,name){
return drivers.filter(function(driverName){
   return driverName.toLowerCase()===name.toLowerCase();
 });
}


function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (drivers,string){
return  drivers.filter(function(driver){
  return driver.name===string
})
}
