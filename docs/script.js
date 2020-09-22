let container = createElement("div", "container");
let topSide = createElement("div", "row");

let row1 = createElement("div", "row");

let h1 = createElement("h1", "title");
h1.innerHTML = "AGE CALCULATOR";
row1.append(h1);

let row2 = createElement("div", "row");
row2.className += " info";
let h2 = createElement("h1", "display");
row2.append(h2);

let row3 = createElement("div", "row");
row3.className += " info";
let h4 = createElement("h4", "display2");
row3.append(h4);

let row4 = createElement("div", "row");
let label = document.createElement("label");
label.for = "date";
label.innerHTML = "Birthdate";
let input = createElement("input", "date", "date");
input.value = "", input.min = "1970-01-01", input.type = "date",
    input.name = "date";
row4.append(label, input);

let row5 = createElement("div", "row");
let button = createElement("button", "btn");
button.addEventListener("click", handleSubmit);
button.innerHTML = "Submit";
row5.append(button);

topSide.append(row1, row2, row3, row4, row5);





function createElement(tagName, className, id = "") {
    let element = document.createElement(tagName);
    element.classList.add(className);
    if (id)
        element.id = id;
    return element;
}


function handleSubmit() {
    display.innerHTML = a.join(" ");
    display2.innerHTML = b.join(" ");
}

let bottomSide = createElement("div", "row");
let randomH1 = createElement("div", "row");
let randomTitle = createElement("h1", "title");
randomTitle.innerHTML = "RANDOM NUMBER GENERATOR";
randomH1.append(randomTitle);

let finalRandom = createElement("div", "row");
let randomInfo = createElement("div", "row");
randomInfo.className += " info";
let displayRandom = createElement("h1", "displayRandom");
randomInfo.append(displayRandom);

let randomButtonRow = createElement("div", "row");
let randomButton = createElement("button", "btn");
randomButton.addEventListener("click", generateNumber);
randomButton.type = "button";
randomButton.innerHTML = "Generate";
randomButtonRow.append(randomButton);
finalRandom.append(randomInfo, randomButtonRow);


bottomSide.append(randomH1, finalRandom);
container.append(topSide, bottomSide);
document.body.append(container);

let mapMonths = {
    "Jan": 1,
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sep": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12
};

let currentTime = new Date().toDateString().split(" ");
let curYear = +currentTime[3],
    curMonth = currentTime[1],
    curDate = +currentTime[2];

curMonth = mapMonths[curMonth];


let display = document.querySelector(".display");
let display2 = document.querySelector(".display2");
let a = ["", "year", "", "month", "", "day"];
let b = ["", "minutes,", "", "seconds,", "", "milliseconds"];
document.querySelector("#date").addEventListener("change", function () {
    let userInput = this.value;
    let array = userInput.split("-");
    let year = +array[0],
        month = array[1],
        date = +array[2];
    let userBirthDate = month + "/" + date + "/" + year;
    let currentDate = curMonth + "/" + curDate + "/" + curYear;

    let date1 = new Date(userBirthDate);
    let date2 = new Date(currentDate);
    let milliSecondDiff = date2.getTime() - date1.getTime();
    let secondsDiff = milliSecondDiff / 1000;
    let minutesDiff = secondsDiff / 60;

    let noOfDays = milliSecondDiff / (1000 * 3600 * 24);
    b[0] = minutesDiff;
    b[2] = secondsDiff;
    b[4] = milliSecondDiff;

    let noOfYears = parseInt(noOfDays / 365);
    let rem = parseInt(noOfDays % 365);
    let noOfMonths = parseInt(rem / 31);
    let daysLeft = parseInt(rem % 31);
    console.log(noOfDays);

    a[0] = noOfYears;
    a[2] = noOfMonths;
    a[4] = daysLeft;
});



let result;

function getRandomArbitrary(min, maxRange) {
    let randomNumber = Math.floor((Math.random() * (maxRange - min)) + min);
    let compareArray = randomNumber.toString().split("")
    let set = new Set(compareArray);
    if (set.size == compareArray.length) {
        result = randomNumber;
        return;
    } else {
        getRandomArbitrary(min, maxRange);
    }
}


function generateNumber() {
    getRandomArbitrary(10000000, 99999999);
    displayRandom.innerHTML = result;
}