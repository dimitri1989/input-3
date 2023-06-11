var array = [];

function check() {
  var x = document.getElementById("add").value;
  array.push(x);
  var y = document.getElementById("sum").innerHTML = array;
  if (!x) {
    y = document.getElementById("sum").innerHTML =
      "შეავსე ველი ჩაწერე რიცხვი ან ტექსტი";
    array.pop(x);
  }
  document.getElementById("reset").reset();
  return false;
  
};