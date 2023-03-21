
/*//function 
function speedDetector(speed){
    //setting the speed limit to be 70 
    const maxSpeed = 70;
    //set number of km per demerit point to 5 
    const pointsPerKm = 5;
    
    //use if else statement to check the driving speed against the speed limit.
    // if the first condition is met, output "Ok"
    //if the car speed exceedds the limit, calculate the number of points based on the km.
    //if the points calculated exceeds 12, console.log "license suspended"
    if (speed <= maxSpeed) {
         return "Ok"
     } else {
         const demeritPoints = Math.floor((speed - maxSpeed)/pointsPerKm);
         if (demeritPoints => 12) {
             return "License suspended";
         } else {
             console.log(`Points: ${demeritPoints}`);
         }
     }
 }
 speedDetector(80);
 */
 
 
 
 
 
 
 
 
 