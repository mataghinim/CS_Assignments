let grade = 78;
let scale = '';

if ( grade < 60 ){
    scale = "F"
}
else if (grade <= 62 ){
    scale = "D-"
}
else if (grade <= 66 ){
    scale = "D"
}
else if (grade <= 69 ){
    scale = "D+"
}
else if (grade <= 72 ){
    scale = "C-"
}
else if (grade <= 76 ){
    scale = "C"
}
else if (grade <= 79 ){
    scale = "C+"
}
else if (grade <= 82 ){
    scale = "B-"
}
else if (grade <= 86 ){
    scale = "B"
}
else if (grade <= 89 ){
    scale = "B+"
}
else if (grade <= 92 ){
    scale = "A-"
}
else if (grade <= 96 ){
    scale = "A"
}
else if (grade <= 100 ){
    scale = "A+"
}

switch (scale) {
    case "F":
    case "D-":
    case "D":
    case "D+":
        console.log("Your grade is " + grade + " which corresponds to " + scale + ". You failed!");
        break;

    default:
        console.log("Your grade is " + grade + " which corresponds to " + scale + ". You passed!");
        break;
}
