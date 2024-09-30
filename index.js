function checkSpeed () {

    const speedLimit = 70 

    let demeritPoints = 0;

    if (speed < speedlimit ) {
        console.log("ok")
    }
    else { Math.floor((speed - speedLimit) / 5);
    console.log('points: ${demeritPoints}');

    if (demeritPoints > 12) {
        console.log("License suspended");
    }
   }
}
