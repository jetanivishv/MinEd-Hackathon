if (document.getElementById("INRtoUSD")) {
  const exchRate = parseFloat(document.getElementById("INRtoUSD").value);
  document.getElementById("usdtoinr").addEventListener("click", (e) => {
    let value = parseFloat(document.getElementById("USDtoINR").value);
    if (isNaN(value)) {
      document.getElementById("USDtoINR").value = 1;
      document.getElementById("INRtoUSD").value = exchRate;
      alert("Please Enter some valid value.");
      return;
    }
    if (value < 0) {
      document.getElementById("USDtoINR").value = 1;
      document.getElementById("INRtoUSD").value = exchRate;
      alert("USD's value must be greater than or equal to 0.");
      return;
    }
    document.getElementById("INRtoUSD").value = value * exchRate;
  });
  document.getElementById("inrtousd").addEventListener("click", (e) => {
    let value = parseFloat(document.getElementById("INRtoUSD").value);
    if (isNaN(value)) {
      document.getElementById("USDtoINR").value = 1;
      document.getElementById("INRtoUSD").value = exchRate;
      alert("Please Enter some valid value.");
      return;
    }
    if (value < 0) {
      document.getElementById("USDtoINR").value = 1;
      document.getElementById("INRtoUSD").value = exchRate;
      alert("INR's value must be greater than or equal to 0.");
      return;
    }
    document.getElementById("USDtoINR").value = value / exchRate;
  });
}

$("#date").flatpickr({
  allowInput: true,
  minDate: "today",
  disable: [
    function (date) {
      return date.getDay() === 0 || date.getDay() === 6; // disable weekends
    },
  ],
  locale: {
    firstDayOfWeek: 1,
  },
});

$("#startDate").flatpickr({
  allowInput: true,
  minDate: "today",
  disable: [
    function (date) {
      return date.getDay() === 0 || date.getDay() === 6; // disable weekends
    },
  ],
  locale: {
    firstDayOfWeek: 1,
  },
});

$("#endDate").flatpickr({
  allowInput: true,
  minDate: "today",
  disable: [
    function (date) {
      return date.getDay() === 0 || date.getDay() === 6; // disable weekends
    },
  ],
  locale: {
    firstDayOfWeek: 1,
  },
});

function isValidDate(date) {
  // Date format: YYYY-MM-DD
  var datePattern = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

  // Check if the date string format is a match
  var matchArray = date.match(datePattern);
  if (matchArray == null) {
    return false;
  }

  // Remove any non digit characters
  var dateString = date.replace(/\D/g, "");

  // Parse integer values from the date string
  var year = parseInt(dateString.substr(0, 4));
  var month = parseInt(dateString.substr(4, 2));
  var day = parseInt(dateString.substr(6, 2));

  // Define the number of days per month
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    daysInMonth[1] = 29;
  }

  if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
    return false;
  }
  return true;
}

document.getElementById("dateForm").addEventListener("submit", (e) => {
  let date = $("#date")[0].value;
  if (!isValidDate(date)) {
    e.preventDefault();
    $("#date")[0].value = "";
    alert("Plese Enter valid Date in YYYY-MM-DD format.");
  }
});

document.getElementById("rangeForm").addEventListener("submit", (e) => {
  let startDate = $("#startDate")[0].value;
  let endDate = $("#endDate")[0].value;

  if (isValidDate(startDate) && isValidDate(endDate)) {
    let date1 = new Date(startDate);
    let date2 = new Date(endDate);

    if (date2 < date1) {
      e.preventDefault();
      $("#endDate")[0].value = "";
      alert("End Date must be greater than Start Date.");
    }
  } else {
    e.preventDefault();
    $("#startDate")[0].value = "";
    $("#endDate")[0].value = "";
    alert("Plese Enter valid Date in YYYY-MM-DD format.");
  }
});
