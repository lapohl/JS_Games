//var usr = String("S")

function check_for_two_ina_row() {
  function value_to_binary(value){
    if (value == "X") {
      return 1;
    }
    if (value == "O") {
      return 0;
    }
  }

  function find_zero(numbers){
    return numbers.find(element => element == '');
  }

  var A1 = value_to_binary(document.getElementById("A1").innerHTML);
  var B1 = value_to_binary(document.getElementById("B1").innerHTML);
  var C1 = value_to_binary(document.getElementById("C1").innerHTML);
  
  var A2 = value_to_binary(document.getElementById("A2").innerHTML);
  var B2 = value_to_binary(document.getElementById("B2").innerHTML);
  var C2 = value_to_binary(document.getElementById("C2").innerHTML);
  
  var A3 = value_to_binary(document.getElementById("A3").innerHTML);
  var B3 = value_to_binary(document.getElementById("B3").innerHTML);
  var C3 = value_to_binary(document.getElementById("C3").innerHTML);
  
  const THREES = [+A1+ +B1+ +C1, +A2+ +B2+ +C2, +A3+ +B3+ +C3, +A1+ +A2+ +A3, +B1+ +B2+ +B3, +C1+ +C2+ +C3, +A1+ +C2+ +B3];
  const TWO_INA_ROW = THREES.find(element => element > 1);
  const EMPTIES_2IR = TWO_INA_ROW.find(element => find_zero(element));
  document.getElementById("B1").innerHTML = 'here';
  return EMPTIES_2IR;
}

function computer_make_move(s){
  document.getElementById("B1").innerHTML = s;
}

function put_mark(id) {
  document.getElementById(id).innerHTML = "X";
  check_for_two_ina_row();
  computer_make_move("bla");
}


