/* Your Code Here */
let createEmployeeRecord = (details) => {
  let employee = {};

  employee.firstName = details[0];
  employee.familyName = details[1];
  employee.title = details[2];
  employee.payPerHour = details[3];
  employee.timeInEvents = [];
  employee.timeOutEvents = [];

  return employee;
};

let createEmployeeRecords = (records) => {
  return records.map((record) => createEmployeeRecord(record));
};

function createTimeInEvent(timeIn) {
  let hour = timeIn.split(" ")[1];
  let date = timeIn.split(" ")[0];
  let timeObj = {
    type: "TimeIn",
    hour: parseInt(hour),
    date: `${date}`,
  };
  this.timeInEvents.push(timeObj);
  return this;
}

function createTimeOutEvent(timeOut) {
  let hour = timeOut.split(" ")[1];
  let date = timeOut.split(" ")[0];
  let timeObj = {
    type: "TimeOut",
    hour: parseInt(hour),
    date: `${date}`,
  };
  this.timeOutEvents.push(timeObj);
  return this;
}

function hoursWorkedOnDate(date) {
  let length = this.timeInEvents.length;
  let hours = 0;
  for (let i = 0; i < length; i++) {
    if (this.timeInEvents[i].date === date)
      hours += (this.timeOutEvents[i].hour - this.timeInEvents[i].hour) / 100;
  }
  return hours;
}

function wagesEarnedOnDate(date) {
  let hours = hoursWorkedOnDate.call(this, date);
  return hours * this.payPerHour;
}

function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find((person) => person.firstName === firstNameString);
}

function calculatePayroll(records) {
  let total = 0;
  records.forEach((record) => {
    total += allWagesFor.call(record);
  });
  return total;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
