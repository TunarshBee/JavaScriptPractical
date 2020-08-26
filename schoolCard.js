var  dat = [];

function fowardAdder() {
    let addValueFront = document.getElementById("front1").value;
    dat.unshift(addValueFront);
    console.log(dat);
    childNode();

}

function childNode(){
//    let children = document.getRootNode("myList").hasChildNodes()
//     if(children){
//      for(let i = 0; i < dat.length; i++){

//      }
        
//     }
document.getElementById("me").innerHTML = dat;
}

function fowardRemover() {
    dat.shift();
    childNode();
    console.log(dat)
}
function backwardAdder() {
    let addBack = document.getElementById('back1').value;
    dat.push(addBack);
    childNode();
}
function backwardRemover () {
    dat.pop();
    childNode();
    console.log(dat)
}