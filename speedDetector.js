


    function getSpeed() {
    let speed = parseInt(prompt("Enter the speed of the car"));
    //setting the speed limit to be 70 
    //set number of km per demerit point to 5 

    
    //use if else statement to check the driving speed against the speed limit.
    // if the first condition is met, output "Ok"
    //if the car speed exceedds the limit, calculate the number of points based on the km.
    //if the points calculated exceeds 12, console.log "license suspended"
    if (speed <= 70) {
         console.log(window.alert("Ok"));
     } else {
         let demeritPoints = Math.floor((speed - 70) / 5);
         console.log(window.alert(`Points: ${demeritPoints}`))
         if (demeritPoints > 12) {
             console.log(window.alert("License suspended"));
         } else {
             console.log(`Points: ${demeritPoints}`);
         }
     }
 
}
getSpeed();
 
 
 
 
 
 
 
 