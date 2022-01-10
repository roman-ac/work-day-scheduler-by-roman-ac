var timeDisplay = $("#currentDay");
var inputField = $("#input");
var timeBlockEl = document.querySelectorAll('#row');







function displayTime () {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplay.text(rightNow);
}

setInterval(displayTime, 1000);

function changeColor () {

    var currentHour = moment().format('k');
    //console.log(currentHour);

    var columns = document.body.getElementsByTagName("td");

 // this following code is referred from book "Eloquent Javascript"   
    for (let column of Array.from(columns))  { 
        var sheetTime = column.getAttribute('data-number');
        //console.log(sheetTime);
    if (sheetTime == currentHour) {
        //console.log("hello");
        column.classList.add('present');
    } else if (sheetTime < currentHour) {
        column.classList.add('past');
    } else {
        column.classList.add('future');
    }  

    }
};

changeColor();
diplaySaved1();
diplaySaved2();
diplaySaved3();
diplaySaved4();
diplaySaved5();
diplaySaved6();
diplaySaved7();
diplaySaved8();
diplaySaved9();

//-------------------------------------------------------------//
function diplaySaved1 () {

    var list = document.createElement("li");
    var storeEl = document.querySelector(".savedata1");
    var buttonEl = document.querySelector(".saveBtn1")

    buttonEl.addEventListener ('click', function(event){

        var textArea = document.querySelector("#input1");
        var myText = textArea.value;
    
        list.textContent = myText;
        localStorage.setItem("text1", myText);
    
    });

    var storedText = localStorage.getItem("text1");
    list.textContent = storedText;
    storeEl.appendChild(list);
};

//-------------------------------------------------------------//

function diplaySaved2 () {

    var list = document.createElement("li");
    var storeEl = document.querySelector(".savedata2");
    var buttonEl = document.querySelector(".saveBtn2")

    buttonEl.addEventListener ('click', function(event){

        var textArea = document.querySelector("#input2");
        var myText = textArea.value;
    
        list.textContent = myText;
        localStorage.setItem("text2", myText);
    
    });

    var storedText = localStorage.getItem("text2");
    list.textContent = storedText;
    storeEl.appendChild(list);
};

//-------------------------------------------------------------//

function diplaySaved3 () {

    var list = document.createElement("li");
    var storeEl = document.querySelector(".savedata3");
    var buttonEl = document.querySelector(".saveBtn3")

    buttonEl.addEventListener ('click', function(event){

        var textArea = document.querySelector("#input3");
        var myText = textArea.value;
    
        list.textContent = myText;
        localStorage.setItem("text3", myText);
    
    });

    var storedText = localStorage.getItem("text3");
    list.textContent = storedText;
    storeEl.appendChild(list);
};

//-------------------------------------------------------------//

function diplaySaved4 () {

    var list = document.createElement("li");
    var storeEl = document.querySelector(".savedata4");
    var buttonEl = document.querySelector(".saveBtn4")

    buttonEl.addEventListener ('click', function(event){

        var textArea = document.querySelector("#input4");
        var myText = textArea.value;
    
        list.textContent = myText;
        localStorage.setItem("text4", myText);
    
    });

    var storedText = localStorage.getItem("text4");
    list.textContent = storedText;
    storeEl.appendChild(list);
};

//-------------------------------------------------------------//

function diplaySaved5 () {

    var list = document.createElement("li");
    var storeEl = document.querySelector(".savedata5");
    var buttonEl = document.querySelector(".saveBtn5")

    buttonEl.addEventListener ('click', function(event){

        var textArea = document.querySelector("#input5");
        var myText = textArea.value;
    
        list.textContent = myText;
        localStorage.setItem("text5", myText);
    
    });

    var storedText = localStorage.getItem("text5");
    list.textContent = storedText;
    storeEl.appendChild(list);
};

//-------------------------------------------------------------//

function diplaySaved6 () {

    var list = document.createElement("li");
    var storeEl = document.querySelector(".savedata6");
    var buttonEl = document.querySelector(".saveBtn6")

    buttonEl.addEventListener ('click', function(event){

        var textArea = document.querySelector("#input6");
        var myText = textArea.value;
    
        list.textContent = myText;
        localStorage.setItem("text6", myText);
    
    });

    var storedText = localStorage.getItem("text6");
    list.textContent = storedText;
    storeEl.appendChild(list);
};

//-------------------------------------------------------------//

function diplaySaved7 () {

    var list = document.createElement("li");
    var storeEl = document.querySelector(".savedata7");
    var buttonEl = document.querySelector(".saveBtn7")

    buttonEl.addEventListener ('click', function(event){

        var textArea = document.querySelector("#input7");
        var myText = textArea.value;
    
        list.textContent = myText;
        localStorage.setItem("text7", myText);
    
    });

    var storedText = localStorage.getItem("text7");
    list.textContent = storedText;
    storeEl.appendChild(list);
};

//-------------------------------------------------------------//

function diplaySaved8 () {

    var list = document.createElement("li");
    var storeEl = document.querySelector(".savedata8");
    var buttonEl = document.querySelector(".saveBtn8")

    buttonEl.addEventListener ('click', function(event){

        var textArea = document.querySelector("#input8");
        var myText = textArea.value;
    
        list.textContent = myText;
        localStorage.setItem("text8", myText);
    
    });

    var storedText = localStorage.getItem("text8");
    list.textContent = storedText;
    storeEl.appendChild(list);
};

//-------------------------------------------------------------//

function diplaySaved9 () {

    var list = document.createElement("li");
    var storeEl = document.querySelector(".savedata9");
    var buttonEl = document.querySelector(".saveBtn9")

    buttonEl.addEventListener ('click', function(event){

        var textArea = document.querySelector("#input9");
        var myText = textArea.value;
    
        list.textContent = myText;
        localStorage.setItem("text9", myText);
    
    });

    var storedText = localStorage.getItem("text9");
    list.textContent = storedText;
    storeEl.appendChild(list);
};

//-------------------------------------------------------------//

