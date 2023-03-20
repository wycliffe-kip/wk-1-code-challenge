//prompt the user to input student marks

let marks = prompt("Kindly input student marks: ")

//since marks is a string convert to a number
marks = Number(marks);

//use if statement to check whether the marks entered is between 0 and 100
if(marks => 0 && marks <= 100) {

/* check the condition for generating grades to learners 
based on marks*/
    let grades;
    if (marks > 79) {
        grades = "A";
    } else if(marks => 60 && marks <=79) {
        grades = "B";
    } else if (marks => 50 && marks <= 59) {
        grades = "C";
    } else if (marks => 40 && marks <=49) {
        grades = "D"
    } else{
        grades = "E";
    }

//generate the correct gradegrade 
console.log("The learner's grade is: ", grade);

} else {
    console.log("Kindly enter marks between 0 and 100.");
}





