//var usr = String("S")

var A1 = value_to_binary(document.getElementById("A1").innerHTML)
var B1 = value_to_binary(document.getElementById("B1").innerHTML)
var C1 = value_to_binary(document.getElementById("C1").innerHTML)

var A2 = value_to_binary(document.getElementById("A2").innerHTML)
var B2 = value_to_binary(document.getElementById("B2").innerHTML)
var C2 = value_to_binary(document.getElementById("C2").innerHTML)

var A3 = value_to_binary(document.getElementById("A3").innerHTML)
var B3 = value_to_binary(document.getElementById("B3").innerHTML)
var C3 = value_to_binary(document.getElementById("C3").innerHTML)

function value_to_binary(value){
  if (value == "X") {
    return 1;
  }
  if (value == "O") {
    return 0;
  }
}

function check_for_two_ina_row() {
  if ((A1+B1+C1) > 1) {
    
  }
}

function put_mark(id) {
  document.getElementById(id).innerHTML = "X";
  value_to_binary(document.getElementById(id).innerHTML)
  check_for_two_ina_row()
}


