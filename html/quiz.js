var submitBtn = $(".submit");

// Event Listeners & Function Calls
submitBtn.on("click", scoreQuiz);


// Function Declarations
function scoreQuiz(event) {
  event.preventDefault();

  var q1 = Number($(".question1:checked").val());
  var q2 = Number($(".question2:checked").val());
  var q3 = Number($(".question3:checked").val());
  
  var total = q1 + q2 + q3;
  
  if (total ===175){ 
    window.location.replace("blm-read-sign.html");
  } 
  else if (total ===157) {
    window.location.replace("blm-read-donate.html")
  }
  else if (total ===191) {
    window.location.replace("blm-listen-sign.html")
  }
  else if (total ===173) {
    window.location.replace("blm-listen-donate.html")
  }
  else if (total ===162) {
    window.location.replace("blm-watch-sign.html")
  }
  else if (total ===144) {
    window.location.replace("blm-watch-donate.html")
  }
  else if (total ===134) {
    window.location.replace("covid-read.html")
  }
  else if (total ===150) {
    window.location.replace("covid-listen.html")
  }
  else if (total ===121) {
    window.location.replace("covid-watch.html")
  }
  else {
    window.location.replace("cals.html");
  }
}