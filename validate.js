function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  // Must be exactly 13 digits and all numeric
  if(nid.length !== 13 || isNaN(nid) || nid === ""){
	return false;
  }else{
	return true;
  }
}

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  // Must be a number between 1 and 6
  if (isNaN(num) || num === "" || parseInt(num) < 1 || parseInt(num) > 6) {
    return false;
  } else {
	return true;
  }
}

function checkRequired() {
  let fname = (document.getElementById("fname").value).trim();
  let lname = (document.getElementById("lname").value).trim();
  
  if(fname === "" || lname === ""){
    return false;
  }
  return true;
}

function checkGender() {
  let genderSelected = document.querySelector('input[name="genderRad"]:checked');
  if(genderSelected === null){
    return false;
  }
  return true;
}

function validateForm(){
	// Check all required fields (First Name, Last Name)
	if(!checkRequired()){
	  alert("Please fill in all required fields!");
	  return false;
	}
	// Check Gender
	if(!checkGender()){
	  alert("Please select a gender!");
	  return false;
	}
	// Check National ID (must be 13 digits, all numeric)
	if(!checkNID()){
	  alert("Invalid value for National ID! Must be exactly 13 digits.");
	  document.getElementById("nid").focus();
	  return false;
	}
	// Check Work Days (must be 1-6)
	if(!checkWorkDays()){
	  alert("Invalid value for days of work! Must be between 1 and 6.");
	  document.getElementById("workDays").focus();
	  return false;
	}
	// All validations passed, calculate pay rate
	total = payRateCalculate();
	alert("Your weekly pay rate is "+total+" THB");
	return false;
}