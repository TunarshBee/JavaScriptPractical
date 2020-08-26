function detailsCollector() {
    //document.getElementsByTagName("form").preventDefault();
    let details ={
     surname: document.getElementById('surname').value,
     email : document.getElementById('email').value,
     phone : document.getElementById('phone').value,
     password : document.getElementById('password').value
    }
    console.log('Your email is:- ' + details.email )
    console.log('Your password is:- ' + details.password )
    console.log(details)
      //alert('Your email is ' + details.email + 'Your password is ' + details.password) + '</br>';
}

// let arr = [9,0,4,6,7,2,91,3,2,98,23,75,89]
// ///Hard way of sorting
// function arraySort() {
//   let temp;
//   let temp1;
//   let tracker=false
//   while( !tracker){
//     tracker = true;
//     for ( let i  = 1; i < arr.length ; i++){
      
//       temp = arr[i]
//       temp1 = arr[i-1]
//       if(temp1> temp){
//         tracker = false
//         arr[i-1]= arr[i]
//         arr[i] = temp1
//       }

//     }

//   }


//   return arr;

// }
// console.log(arraySort())

// arr.sort((a,b)=> b-a)

// console.log(arr.sort((a,b)=>a-b))


let arr1 = [1,2,1,3,4,5,6,1,1,34,5,6,3,1]
// let Temp = [arr1[1]]
// let Temp1 = []
// function filter() {
//   while (!comparer) {
//     comparer= true
//     for (let i = 0; i < array.length; i++) {
//     Temp = arr1[i]      
//     Temp1 = arr1[i-1]
//       if (Temp1 != Temp) {
//         comparer= false
//         arr1 [i-1] = arr1[i]
//         arr1[i]= Temp1
//       }
//     }
    
//   }
//   return arr1;
// }
function filter(par) {
  let storage = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == par) {
      storage.push(arr1[i])
    }    
    
  }

  return storage;
  
}
console.log(filter(6));

// console.log(arr1.filter((a)=> a==1))
// function filter(parameter) {
//  let torage1 = []
//     for (let i = 0; i < arr1.length; i++) {
//       if (parameter == arr1[i]) {
//         torage1.push(arr1[i])  
//       }
//     }
//     return torage1;
// }
// console.log(filter(1))