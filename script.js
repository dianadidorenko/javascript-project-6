// Set Date in Input Date

var dateControl = document.querySelector('input[type="date"]'),
  day = new Date().getDate(),
  month = new Date().getMonth() + 1,
  year = new Date().getFullYear(),
  dateOption = document.querySelector(".date-option");

dateControl.value = year + "-0" + month + "-" + day;
dateControl.style.cssText = "font-size: 30px; font-weight: 700;";
dateOption.style.cssText = "font-size: 30px; font-weight: 700;";

today.onclick = function () {
  day = new Date().getDate();
  dateControl.value = year + "-0" + month + "-" + day;
  dateOption.value = dateControl.value;
};
tomorrow.onclick = function () {
  day = new Date().getDate() + 1;
  dateControl.value = year + "-0" + month + "-" + day;
  dateOption.value = dateControl.value;
};

aftertomorrow.onclick = function () {
  day = new Date().getDate() + 2;
  dateControl.value = year + "-0" + month + "-" + day;
  dateOption.value = dateControl.value;
};

dateOption.value = dateControl.value;

// ----------------------------------------------

// Working with 'Звідки' and 'Куди' inputs

var fromWhere = document.getElementById("fromWhere"),
  toWhere = document.getElementById("toWhere"),
  chooseCitiesLeft = document.getElementById("choose-cities-left"),
  chooseCitiesRight = document.getElementById("choose-cities-right"),
  selectedP,
  wayOption = document.querySelector(".way-option");

cssTextStyle = "font-size: 30px; font-weight: 700; padding: 15px 0 15px 10px";

fromWhere.style.cssText = cssTextStyle;
toWhere.style.cssText = cssTextStyle;
wayOption.style.cssText = cssTextStyle;

chooseCitiesLeft.onclick = function (e) {
  let target = e.target;
  if (target.tagName != "P") return;
  putInFromWhereInput(target);
};
function putInFromWhereInput(p) {
  if (selectedP) {
    fromWhere.value = "";
  }
  selectedP = p;
  fromWhere.value = p.innerText;
}

chooseCitiesRight.onclick = function (e) {
  let target = e.target;

  if (target.tagName != "P") return;

  putInTOWhereInput(target);
};
function putInTOWhereInput(p) {
  if (selectedP) {
    toWhere.value = "";
  }
  selectedP = p;
  toWhere.value = p.innerText;
  wayOption.value = p.innerText;
}

// ----------------------------------------------

//
var popularWaysBlockItems = document.getElementById(
  "popular-ways__block-items"
);

// Put value from popular way block

popularWaysBlockItems.onclick = function (e) {
  let itemChildren = e.target.children;
  for (item of itemChildren) {
    if (item.className == "first-part") {
      let firstChild = item.innerText;
      fromWhere.value = firstChild;
    }
    if (item.className == "second-part") {
      let secondChild = item.innerText;
      toWhere.value = secondChild;
      wayOption.value = secondChild;
    }
  }
};

// ----------------------------------------------

// Section Choose Seats and Make Total Price

let sectionChooseSeats = document.querySelector(".page__choose-seats"),
  form = document.getElementById("form"),
  totalPrice = document.getElementById("totalPrice"),
  checkboxInputs = trainMap.querySelectorAll('input[type="checkbox"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

search.onclick = function () {
  sectionChooseSeats.style.display = "block";

  let myTimeout = setTimeout(pleaseChooseSeats, 3000);

  function myStopFunction() {
    clearTimeout(myTimeout);
  }
  function pleaseChooseSeats() {
    alert("Оберіть, будь-ласка, місця");
  }
};

var ticketCost = 0,
  bookBlock = document.querySelector(".book-block");

for (item of checkboxInputs) {
  item.addEventListener("click", function (e) {
    pSeatName = e.target.closest("p").innerText;
    if (item.checked == false || e.target.checked) {
      e.target.checked = true;
      ticketCost += 40;

      var checkboxInputsChecked = trainMap.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      checkboxInputsCheckedLength = checkboxInputsChecked.length;

      totalPrice.innerText = ticketCost;
      bookBlock.style.display = "block";
      quantity.innerText = checkboxInputsCheckedLength;
    }
  });
}

// ----------------------------------------------

// Show Booked Tickets Section

book.addEventListener("click", function () {
  let bookedTicketSection = document.querySelector(".booked-ticket"),
    bookedItems = document.getElementById("bookItemsBlock"),
    bookedTicketItem = document.createElement("div"),
    pDirection = document.createElement("p"),
    pDate = document.createElement("p"),
    pSeat = document.createElement("p");
  
  bookedTicketSection.style.display = 'flex'

  bookedTicketItem.classList.add("booked-ticket__item");

  pDirection.setAttribute("class", "pHeader");
  pDirection.innerText = wayOption.value;

  pDate.setAttribute("class", "pHeader");
  pDate.innerText = dateControl.value;

  pSeat.setAttribute("class", "pHeader");
  pSeat.innerText = pSeatName;

  bookedItems.append(bookedTicketItem);
  bookedTicketItem.append(pDirection, pDate, pSeat);
});
