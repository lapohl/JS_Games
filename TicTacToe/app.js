function valueToBinary(value){
  
  if (value == "X") {
    return 1;
  }
  if (value =="O"){
    return -1;
  }
  return 0;
};

function board_full(){
  full = true;
  board = ['A1','A2','A3','B1','B2','B3','C1','C2','C3'];

  for (var i=0;i<board.length;i++){
    if (document.getElementById(board[i]).innerHTML ==''){
      full = false;
    }
  }

  return full;
}

function check2() {
  
  //convert Xs and Ox to 1s and 0s
  var A1 = valueToBinary(document.getElementById("A1").innerHTML);
  var B1 = valueToBinary(document.getElementById("B1").innerHTML);
  var C1 = valueToBinary(document.getElementById("C1").innerHTML);
  
  var A2 = valueToBinary(document.getElementById("A2").innerHTML);
  var B2 = valueToBinary(document.getElementById("B2").innerHTML);
  var C2 = valueToBinary(document.getElementById("C2").innerHTML);
  
  var A3 = valueToBinary(document.getElementById("A3").innerHTML);
  var B3 = valueToBinary(document.getElementById("B3").innerHTML);
  var C3 = valueToBinary(document.getElementById("C3").innerHTML);
  
  var top_row = {'A1':A1, 'B1':B1, 'C1':C1};
  var mid_row = {'A2':A2, 'B2':B2, 'C2':C2};
  var bot_row = {'A3':A3, 'B3':B3, 'C3':C3};
  var top_diag = {'A1':A1, 'B2':B2, 'C3':C3};
  var bot_diag = {'C1':C1, 'B2':B2, 'A3':A3};
  var left_col = {'A1':A1, 'A2':A2, 'A3':A3};
  var mid_col = {'B1':B1, 'B2':B2, 'B3':B3};
  var right_col = {'C1':C1, 'C2':C2, 'C3':C3};
  
  var wins = [top_diag, top_row, mid_col, mid_row, bot_diag, bot_row, right_col, left_col];
  empties_win = [];
  
  for (var i=0;i<wins.length; i++){  
    var sum = 0;
    var empty = [];
    var tot_sum=0;
    for (var key in wins[i]){
      sum += wins[i][key];
      if (wins[i][key]==''){
        empty.push(key);
      }
      if (sum>1){
        empties_win.push(empty.flat());
      }
      if (sum==3){
        document.getElementById('GameOver').style.display = 'flex';
      }
      tot_sum += sum;
    }
  }
  if ((empties_win.length==0) && board_full()){
    document.getElementById('test').innerHTML='line71';
    document.getElementById('GameOver').style.display = 'flex';
  }
  return empties_win;
};

function computerMove(nexts){
  corners = ['A1','C1','C3','A3'];
  mids = ['A2', 'B1', 'B3', 'C2'];

  //move into empty spot if two in a row to prevent loss
  if (nexts.length > 0){
    //checking for center
    for (var i=0;i<nexts.length;i++){
      if ((nexts[i]=='B2') ){
        document.getElementById('B2').innerHTML = "O";
        return;
      }
    }
    //checking for corners
    for (var i=0;i<nexts.length;i++){
      for (var j=0;j<4;j++){
        if (corners[j]==nexts[i]){
          document.getElementById(corners[j]).innerHTML = "O";
          return;
        }
      }
    }

    //checking for middles
    for (var i=0;i<nexts.length;i++){
      for (var j=0;j<mids.length;j++){
        if (mids[j]==nexts[i]){
          document.getElementById(mids[j]).innerHTML = "O";
          return;
        }
      }
    }
  }

  //move into empty spot, check for center and corner openings
  else {
    //center
    if (valueToBinary(document.getElementById("B2").innerHTML)==0){
      document.getElementById('B2').innerHTML = "O";
      return;
    }
    
    //corner
    for (var i=0;i<corners.length;i++){
      if (valueToBinary(document.getElementById(corners[i]).innerHTML)==0){
        document.getElementById(corners[i]).innerHTML='O';
        return;
      }
    }
    
    //middles
    for (var i=0;i<mids.length;i++){
      if (valueToBinary(document.getElementById(mids[i]).innerHTML)==0){
        document.getElementById(mids[i]).innerHTML='O';
        return;
      }
    }
  }
}

function putMark(id) {
  if (document.getElementById(id).innerHTML == 0){
    //document.getElementById(id).innerHTML = "X";
    document.getElementById(id).innerHTML = <img src="Mario.png">;
  }
  computerMove(check2());
}

function reset(){
  board = ['A1','A2','A3','B1','B2','B3','C1','C2','C3'];

  for (var i =0;i<board.length;i++){
    document.getElementById(board[i]).innerHTML='';
  }

  document.getElementById('GameOver').style.display='none';
}