let arr = [1,2,2,34,4,5,6,2,3,7,4,6,8,3,3,25,5,7,7,54,34,2,45,1];
// function filter(par) {
//   storage = []  ;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == par) {
//         storage.push(arr[i])
//     }      
//   }
//   return storage;
// }
// console.log(filter(556))


function finding(par) {
    // let finder = arr[3]\
    let Storage= []
    for (let i = 0; i < arr.length; i++){
        if (arr[i]== par ){
            Storage.push(arr[i])
        }
    }
    if (Storage.length != 0) {
        return true;
    }
    else{
        return false;
    }
}
console.log(finding())

console.log(arr.some(x=> x==1))
//console.log(arr.sort((f,g)=> g-f))
//console.log(arr.filter((j)=> j == 3))
function mapping(par) {
    Storage2 = []
    for (let i = 0; i < arr.length; i++) {
        Storage2.push(arr[i] * par)
    }
    console.log(Storage2)
}
mapping(3)

let ans = arr.map(x=> x *2);
let ans2 = arr.map(function(x){
    return Math.floor(x/2) * 3
})

console.log(ans2);
console.log(ans);