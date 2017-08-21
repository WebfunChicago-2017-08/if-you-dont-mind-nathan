function time(hour,minute,period){
    if(minute < 30){
        if (period==="AM"){
            console.log("It is a little after" , hour , "in the morning.");
        }
        else{
            console.log("It is a little after" , hour , "in the afternoon.");
        }
    }
    if (minute >= 30){
        if (period==="PM"){
            console.log("It is almost" , (hour + 1) , "in the afternoon.");
        }
        else{
            console.log("It is almost" , (hour + 1) , "in the morning.")
        }
    }
}