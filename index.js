const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {today: tempOfToday , tomorrow: tempOfTomorrow } = avgTemperatures; // change this line
  // change code above this line
  return tempOfToday;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

  