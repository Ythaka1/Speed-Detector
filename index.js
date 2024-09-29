function checkSpeed () {

    let demeritPoints = 80;

    if (speed < 70 ) {
        console.log("ok")
    }
    else { Math.floor((speed - 70) / 5);
    console.log('points: ${demeritPoints}');

    if (demeritPoints > 12) {
        console.log("License suspended");
    }
   }
}