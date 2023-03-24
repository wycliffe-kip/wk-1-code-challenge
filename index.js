
    
    //declare a variable marks that prompts the user to input student marks on the screen

    let marks = prompt("Kindly input student marks: ")

    //use if statement to check whether the marks entered is between 0 and 100
    if(marks < 0 || marks > 100) {
        console.log(window.alert("Kindly enter marks between 0 and 100."));
    /* check the condition for generating grades to learners 
    based on marks*/
        
    } else {
        let grades;
        if (marks > 79) {  // if marks is greater than 79 an alert displaying grade A pops on the screen
            grades = window.alert("The student's grade is: A"); 
        } else if(marks >= 60 && marks <=79) {     
            grades = window.alert("The student's grade is: B");   //if marks is greater or equal to 60 and less or equal to 79, print grade B 
        } else if (marks >= 50 && marks <= 59) {
            grades = window.alert("The student's grade is: C");//if marks is greater or equal to 50 and less or equal to 59, print grade B 
        } else if (marks >= 40 && marks <=49) {
            grades = window.alert("The student's grade is: D");//if marks is greater or equal to 40 and less or equal to 49, print grade B 
        } else {
            grades = window.alert("The student's grade is: E"); // if marks is less than 40 print grade E
        }
    //generate the correct gradegrade 
    console.log(window.alert(`The learner's grade is: , ${grades}`));
        
    }






