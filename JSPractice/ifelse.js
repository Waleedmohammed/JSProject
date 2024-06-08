function age(age) {
    if (age >= 18) {
        console.log("You are eligible to vote");
    } else {
        console.log("Sorry You Can not vote");
    }
}

// Call the function
age(10);
age(30);
age(0);


function checkNumber(number) {
    if (number > 0) {
        console.log("Number is Positivie");
    }
    else if (number < 0) {
        console.log("Number is Negative");
    }
    else {
        console.log("Number is ZERO");
    }
}

// Call the function
checkNumber(10);
checkNumber(-5);
checkNumber(0);



function checkGrade(score) {
    let grade;
    if (score >= 90) {
        grade = "A";
    } else {
        if (score >= 80) {
            grade = "B";
        } else {
            if (score >= 70) {
                grade = "C";
            } else {
                grade = "D"
            }
        }
    }
    console.log("Your Grade is " + grade);
}


checkGrade(90);
checkGrade(80);
checkGrade(75);
checkGrade(55);

// In lunchBrowser , lunchBrowser2 , all IF condition will be examined . Imagine there are 100 condition , 99 conditon will be still examined !!!(Performnace issue)
function lunchBrowser() {
    let browser = "edge";
    if (browser == "Chrome") {
        console.log("launching Chrome");
    }
    if (browser == "FireFox") {
        console.log("launching FireFox");
    }
    if (browser == "edge") {
        console.log("launching edge");
    }
    // Here else is only associated with last if condition
    else {
        console.log("Please pass supported Browser");
    }
}

lunchBrowser();

// if - elseif
function lunchBrowser2() {
    let browser = "Chrome";
    if (browser == "Chrome") {
        console.log("launching Chrome");
    }
    else if (browser == "FireFox") {
        console.log("launching FireFox");
    }
    else if (browser == "edge") {
        console.log("launching edge");
    }
    // Here else is default for all if conditions
    else {
        console.log("Please pass supported Browser");
    }
}

lunchBrowser2();

// Switch should fix that performance issue , magic is using break here (break is not applicable for if condition , if it is not used with loop or switch case)


