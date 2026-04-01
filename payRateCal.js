function payRateCalculate() {
  let workDays = parseInt((document.getElementById("workDays").value).trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  // Pay rate per hour based on Year of Study
  // 1st Year = 55 THB/hour
  // 2nd Year = 65 THB/hour
  // 3rd Year = 75 THB/hour
  // 4th Year or Greater = 85 THB/hour
  let payRate = 0;
  switch(yearOfStudy){
    case 1: payRate = 55; break;
    case 2: payRate = 65; break;
    case 3: payRate = 75; break;
    case 4: payRate = 85; break;
  }
  
  // Weekly pay rate = pay rate per hour * workDays
  let weeklyPay = payRate * workDays;
  
  return weeklyPay;
}
