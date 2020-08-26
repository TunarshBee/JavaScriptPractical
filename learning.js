//function bello(practice) {
//    let tunde=[];
  //  for (let i = 0; i < practice.length; i++) {
    //    if (practice[i]%2 ==1) {
      //      tunde.push(practice[i]);
        //}        
    //}
    //return tunde;
//}

//console.log(bello([0,15,12,13,14,15,16,17,18,19,5,67]));

let array= ['what','is','happening'];
function addFromEnd(add1) {
    array.push(add1);
    console.log(array);
}
addFromEnd("lol");

function removeFromEnd() {
    array.pop();
    console.log(array);
}
removeFromEnd();

function removeFromstart() {
    array.shift();
    console.log(array);
}
removeFromstart();

function addFromstart(add2) {
    array.unshift(add2);
    console.log(array);
}
addFromstart("lol");

// function copyWithin(copy) {
//     array.copyWithin(copy);
//     console.log(array);
// }
// copyWithin(2,1);

function cutAspecificPortion(splice) {
    array.splice(splice);
    console.log(array);
}
cutAspecificPortion(2,1);


function copy(cop,cpy) {
  let s =  array.slice(cop, cpy);
    console.log(s);
}
copy(0,1);



