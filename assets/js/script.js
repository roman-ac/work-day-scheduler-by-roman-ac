var timeDisplay = $("#currentDay");
var inputField = $("#input");
var timeBlockEl = document.querySelectorAll('#row');







function displayTime () {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplay.text(rightNow);
}

setInterval(displayTime, 1000);

function changeColor () {

    var currentHour = moment().format('h');
    console.log(currentHour);

    var columns = document.body.getElementsByTagName("td");

 // this following code is referred from book "Eloquent Javascript"   
    for (let column of Array.from(columns))  { 
        var sheetTime = column.getAttribute('data-number');
        //console.log(sheetTime);
    if (sheetTime === currentHour) {
        console.log("hello");
        column.classList.add('present');


    }}
};

changeColor();

