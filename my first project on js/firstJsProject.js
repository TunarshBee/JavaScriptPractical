 var cardGen=Math.floor( 1000000000000* Math.random());
//     function gen1(mtn) {
//         if (mtn ==2) {
//             document.getElementById('div2').innerHTML=cardGen; 
//         }
//         return mtn;
//     }
    

//     function gen2(glo) {
//         if (glo ==3) {
//             document.getElementById('div3').innerHTML=cardGen; 
//         }
//         return glo;
//     }
    

//     function gen3(airtel) {
//         if (airtel ==4) {
//             document.getElementById('div4').innerHTML=cardGen; 
//         }
//         return airtel;
//     }
    arr = [];
function all(params) {
    let mtn = [0,1,2,3,4,5,6,7,8,9,10,]
    for (let i = 0; i < mtn.length; i++) {
        arr.push(i);
        if (mtn%2 ==0) {
            document.getElementById('div2').innerHTML=cardGen; 
        }
    }
}