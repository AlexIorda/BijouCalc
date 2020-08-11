function calcCump() {
  var cantitate = document.getElementById("cantCump").value
  var pret = cantitate * 250
  document.getElementById("rezCump").innerHTML = "<p>" + pret.toFixed(2) + " RON</p>"
}

function calcCumpSchimb() {
  var tip = document.getElementById("tipSchimb").value
  var cantSchimb = document.getElementById("cantSchimb").value
  var cantBij = document.getElementById("cantBij").value
  var pret = 250 * cantBij
  if (tip == "1")
    pret -= cantSchimb * (750 / 588) * 150
  else
    pret -= cantSchimb * 150
  document.getElementById("rezCumpSchimb").innerHTML = "<p>" + pret.toFixed(2) + " RON</p>"
}

function ableSchimb() {
  var answer = document.getElementById("isSchimb").value
  if (answer == "1") {
    document.getElementById("cantSchimb").disabled = true
    document.getElementById("tipSchimb").disabled = true
  }
  else {
    document.getElementById("cantSchimb").disabled = false
    document.getElementById("tipSchimb").disabled = false
  }
}
