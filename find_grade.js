function findGrade(grade){
    if(grade >= 97 && grade <=100){
       console.log("Your grade is " + grade +  " which corresponds to A+.")
    }
    else if(grade >= 93 && grade < 97){
        console.log ("Your grade is " + grade + " which corresponds to A.")
    }
    else if(grade >= 90 && grade < 93){
        console.log ("Your grade is " + grade + " which corresponds to A-.")
    }
    else if(grade >= 87 && grade < 90){
        console.log ("Your grade is " + grade + " which corresponds to B+.")
    }
    else if(grade >= 84 && grade < 87){
        console.log ("Your grade is " + grade + " which corresponds to B.")
    }
    else if(grade >= 81 && grade < 84){
        console.log ("Your grade is " + grade + " which corresponds to B-.")
    }
    else if(grade >= 78 && grade < 81){
        console.log ("Your grade is " + grade + " which corresponds to C+.")
    }
    else if(grade >= 75 && grade < 78){
        console.log ("Your grade is " + grade + " which corresponds to C.")
    }
    else if(grade >= 72 && grade < 75){
        console.log ("Your grade is " + grade + " which corresponds to C-.") 
    }
    else if(grade >= 69 && grade < 72){
        console.log ("Your grade is " + grade + " which corresponds to D+.")
    }
    else if(grade >= 66 && grade < 69){
        console.log ("Your grade is " + grade + " which corresponds to D.")
    }
    else if(grade >= 63 && grade < 66){
        console.log ("Your grade is " + grade + " which corresponds to D-.")
    }
    else if(grade >= 60 && grade < 63){
        console.log ("Your grade is " + grade + " which corresponds to F.")
    }   
 } 
 findGrade (66)
    
    function passFail (lettergrade){
    
    switch (lettergrade){
        case 'A+':
            console.log("You passed!");
            break;
        case 'A':
            console.log("You passed!");
            break;
        case 'A-':
            console.log("You passed!");
            break;
        case 'B+':
            console.log("You passed!");
            break;
        case 'B':
            console.log("You passed!");
            break;
        case 'B-':
            console.log("You passed!");
            break;
        case 'B':
            console.log("You passed!");
            break;
        case 'C+':
            console.log("You passed!");
            break;
        case 'C':
            console.log("You passed!");
            break;
        case 'C-':
            console.log("You passed!");
            break;
        default:
            console.log("You failed!")
     }
 }
 
 passFail ('D')
