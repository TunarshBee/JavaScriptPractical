// function forLoop() {
//     let loopFor = ['my','first','loop','practice','to','print','eleven','outputs','on','new','lines'];
//     for (let n = 0; n < loopFor.length; n++) {
        
//         if (n%2 ==0) {
//         document.write(`<div style="color:red"> hello </div>`)//.style.color="green";
//         }else{
//             document.write(`<div style="color:green"> World </div>`)
//         }  
//         // document.write(loopFor[n] + "<br>" + "<hr>") ;
//     }

// }
// forLoop();

function forLoop() {
    n = 0;
    let loopFor = ['my','first','loop','practice','to','print','eleven','outputs','on','new','lines'];
    while (n < 12) {
        
        if (n%2 ==0) {
        document.write(`<div style="color:red"> hello </div>`)//.style.color="green";
        }else{
            document.write(`<div style="color:green"> World </div>`)
        }  
        // document.write(loopFor[n] + "<br>" + "<hr>") ;
        n++
    }

}