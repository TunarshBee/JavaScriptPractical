let arr =  [1,2,3,4,5,6,7,8,9,0];
function reverser(par) {
   
    container = [];
    for (let i = par.length-1; i >= 0; i--) {
        // console.log((arr[i]));
        container.push(arr[i])
    }
    return container;
}
console.log(reverser(arr))

arr.reverse();
console.log(arr)