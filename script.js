var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate() {
  var genders = document.getElementsByName("gender");
  if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
     alert( "Please provide a valid year" );
     document.myForm.year.focus() ;
     return false;
  }
  else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) || 
  document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
     alert( "Please provide a valid month!" );
     document.myForm.month.focus() ;
     return false;
  }
  else if( document.myForm.date.value == "" || isNaN( document.myForm.month.value ) || 
  document.myForm.month.value.length != 2|| document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
     alert( "Please provide a valid date!" );
     document.myForm.day.focus() ;
     return false;
  }
  else if(genders[0].checked==false && genders[1].checked==false ) {
      alert("Please select your gender!");
      return false;
  }   
  else{
    return true ;
  }
  
}

function calculateDayValue(){
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  console.log(d);
  return (Math.floor(d));
}

function getGender(){
  var genders = document.getElementsByName("gender");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
  }
  else{
    return false;
  }
  switch(gender){
    case "male":
      if (dayValue == 1){
        alert("Hey " +dayNames[0] + " baby, your Akan name is " +maleNames[0]);
      }
      else if(dayValue == 2){
        alert("Hey "+dayNames[1] + " baby, your Akan name is " +maleNames[1]);
      }
      else if(dayValue == 3){
        alert("Hey " +dayNames[2]+ " baby, your Akan name is " +maleNames[2]);
      }
      else if(dayValue == 4){
        alert("Hey "+dayNames[3] +  " baby, your Akan name is " +maleNames[3]);
      }
      else if(dayValue == 5){
        alert("Hey "+dayNames[4] +  " baby, your Akan name is " +maleNames[4]);
      }
      else if(dayValue == 6){
        alert("Hey "+dayNames[5] +  " baby, your Akan name is " +maleNames[5]);
      }
      else if(dayValue == -0){
        alert("Hey "+dayNames[6] + " baby, your Akan name is " +maleNames[6]);
      }
    break;
    case "female":
      if (dayValue == 1){
        alert("Hey "+dayNames[0] + " baby, your Akan name is  " +femaleNames[0]);
      }
      else if(dayValue == 2){
        alert("Hey " +dayNames[1] + " baby, your Akan name is " +femaleNames[1]);
      }
      else if(dayValue == 3){
        alert("Hey " +dayNames[2] + " baby, your Akan name is " +femaleNames[2]);
      }
      else if(dayValue == 4){
        alert("Hey " +dayNames[3] + " baby, your Akan name is " +femaleNames[3]);
      }
      else if(dayValue == 5){
        alert("Hey " +dayNames[4] + " baby, your Akan name is " +femaleNames[4]);
      }
      else if(dayValue == 6){
        alert("Hey " +dayNames[5] + " baby, your Akan name is " + femaleNames[5]);
      }else if(dayValue == -0){
        alert("Hey " +dayNames[6] + " baby, your Akan name is " +femaleNames[6]);
      }
    break
    default:
          
  }
}
function findName(){
  dayValue = calculateDayValue();
  getGender();
}