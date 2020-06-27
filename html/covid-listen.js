var homeBtn = $(".home");

homeBtn.on("click", clearHome);

function clearHome(){                                  //no real need for this local Storage code for the chronic page
  localStorage.clear();
  window.location.replace("quiz.html");
}