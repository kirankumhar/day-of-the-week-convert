const getDayOfWeek = () => {
    
    let day = parseInt(document.getElementById("dayNumber").value);
    console.log(day);

    if(isNaN(day)){
        alert("Please enter number");
        return;
    }

    let dayName;

    switch (day) {
        case 1:
            dayName = "Monday";
            break;
        
        case 2:
            dayName = "Tuesday";
            break;

        case 3:
            dayName = "Wednesday";
            break;

        case 4:
            dayName = "Thursday";
            break;

        case 5:
            dayName = "Friday";
            break;

        case 6:
            dayName = "Saturday";
            break;

        case 7:
            dayName = "Sunday";
            break;

        default:
            dayName = "Please enter a number between 1 to 7.";
        break;
    }

    document.getElementById("result").textContent = dayName;
};