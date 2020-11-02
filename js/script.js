let years, months, days, hours, minutes, seconds, midday, season;
yeras = document.getElementById("years");
months = document.getElementById("months");
days = document.getElementById("days");
hours = document.getElementById("hours");
minutes = document.getElementById("minutes");
seconds = document.getElementById("seconds");
midday = document.getElementById("midday");
season = document.getElementById("season");
var value = document.getElementById("input_zone").value;

const getDate = () => {
  let dateTime = new Date();
  return dateTime;
};

let getInput = () => {
  value = document.getElementById("input_zone").value;
};

const getTimezone = () => {
  let zone = value;
  let dateTime = getDate();
  let toZoneTime = dateTime.toLocaleString("en-US", { timeZone: zone });
  return toZoneTime;
};

const date = () => {
  let dateTimeString = getTimezone();
  let yearIndexStart, monthIndexStart, dayIndexStart;
  dayIndexStart = dateTimeString.indexOf("/");
  monthIndexStart = dateTimeString.indexOf("/", dayIndexStart + 1);
  yearIndexStart = dateTimeString.indexOf("/", monthIndexStart + 1);
  days.innerHTML = dateTimeString.slice(dayIndexStart + 1, monthIndexStart);
  months.innerHTML = dateTimeString.slice(0, dayIndexStart);
  yeras.innerHTML = dateTimeString.substr(monthIndexStart + 1, 4);
};

const clock = () => {
  let dateTimeString = getTimezone();
  let hourIndexStart, minuteIndexStart, secondIndexStart;
  hourIndexStart = dateTimeString.indexOf(":");
  minuteIndexStart = dateTimeString.indexOf(":", hourIndexStart + 1);
  secondIndexStart = dateTimeString.indexOf(" ", minuteIndexStart + 1);
  hours.innerHTML = dateTimeString.slice(11, hourIndexStart);
  minutes.innerHTML = dateTimeString.slice(
    hourIndexStart + 1,
    minuteIndexStart
  );
  seconds.innerHTML = dateTimeString.slice(
    minuteIndexStart + 1,
    secondIndexStart
  );
  midday.innerHTML = dateTimeString.slice(-2);
};

const getSeason = () => {
  let dateTimeString = getTimezone();
  let monthEndStr, month;
  monthEndStr = dateTimeString.indexOf("/");
  month = dateTimeString.substr(0, monthEndStr);
  if (+month < 4) {
    season.innerHTML = "iWINTER";
  } else if (4 <= +month && +month < 7) {
    season.innerHTML = "iSPRING";
  } else if (7 <= +month && +month < 10) {
    season.innerHTML = "iSUMMER";
  } else if (10 <= +month) {
    season.innerHTML = "i FALL";
  }
};

date();
getSeason();
setInterval(clock, 1000);
