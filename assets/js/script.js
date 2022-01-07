var timeDisplay = $("#currentDay");








function displayTime () {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplay.text(rightNow);
}

setInterval(displayTime, 1000);

