// Code your solution here
function findMatching(drivers,name){
 drivers.filter(function(drivername){
   return drivername.toLowerCase()===name.toLowerCase
 })
}
