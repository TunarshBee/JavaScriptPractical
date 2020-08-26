//let stor = document.getElementById('card').innerHTML;

function doSome() {  
    var myRandom =Math.floor( 1000* Math.random());
    document.getElementById("card").innerHTML=myRandom;
  if (myRandom % 2 ==0) {
      document.getElementById('card').style.color = 'blue';
  }
  else if (myRandom % 2 !=0) {
      document.getElementById("card").style.color = "crimson";
  }
}