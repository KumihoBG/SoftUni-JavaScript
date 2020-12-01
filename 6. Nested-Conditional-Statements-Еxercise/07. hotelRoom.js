function hotelRoom(arg1, arg2) {
    let month = arg1;
    let nights = Number(arg2);
    let apartmentTotalPrice = 0;
    let studioTotalPrice = 0;

    if (month === "May" || month === "October") {
        studioTotalPrice = nights * 50;
        apartmentTotalPrice = nights * 65;
        if(nights > 7 && nights <= 14){
            studioTotalPrice = studioTotalPrice * 0.95;
        }
        else if (nights > 14){
            studioTotalPrice = studioTotalPrice * 0.7;
            apartmentTotalPrice = apartmentTotalPrice * 0.9;
        }
       
    }
    else if (month === "June" || month === "September") {
        apartmentTotalPrice = nights * 68.70;
        studioTotalPrice = nights * 75.2;
        if (nights > 14){
            studioTotalPrice = studioTotalPrice * 0.8;
            apartmentTotalPrice = apartmentTotalPrice * 0.9;
        }
    }
    else if (month === "July" || month === "August") {
        apartmentTotalPrice = nights * 77;
        studioTotalPrice = nights * 76;
        if (nights > 14){
            apartmentTotalPrice = apartmentTotalPrice * 0.9;
        }
    }
    console.log(`Apartment: ${apartmentTotalPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioTotalPrice.toFixed(2)} lv.`);
}

// hotelRoom("May","15");
// hotelRoom("June","14");
hotelRoom("August","20");


