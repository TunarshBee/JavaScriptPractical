    // // function fibonnacci(num){
    // //     if(num==0){
    // //         num = 1;
    // //     }
    // //     let accum
    // //     return fibonnacci()
    // // }

    // let arra = [1,3,4,5,6,7,8,9,0,2,5,8,4]
    // let container = []

    // function recurse(par, cont){
    //     //exit condition
    //     if(par.length == 0){
    //         return cont;
    //     }
    //     //action
    //     //let val = par.pop();
    //     cont.push(par.pop());

    //     //recursive call
    //     return recurse(par, cont);
    // }

    // let answer = recurse(arra, container);

    // console.log(answer)



    // // function recursiveSplit(str, result, reg){
    // //     if(str.length ==0){
    // //         return result
    // //     }
    // //     let pusher =""// = accum(str[0]);

    // //     if(regExpChecker(str[0])){
    // //         result.push(pusher)
    // //     }else{
    // //      pusher = accum(str[0]);
    // //     }

    // //     // if(regExpChecker(str.pop()== reg)){
    // //     //     result.push()
    // //     // }else if( str.pop() != reg){
    // //     //    push = accum(str.pop())
    // //     // }
        

    // // }
    // let string = "Hello.World.boy.girl;man"
    // let ans = []
    // let store =[]
    // let regExp = "."
    // // //check for spliter

    // //accumulate until spliter is reached
    // function accum(strconcat,count, reg, storer, counter,initial){

    //     if(initial==counter){
    //         return storer;
    //     }
    //     let otherPart = "";
    //     let regIndex = strconcat.indexOf(reg);
    //     if(regIndex >=0){
    //         cont =  strconcat.slice(0,regIndex);
    //         counter += cont.length +1;
    //         otherPart = strconcat.slice(regIndex+1, strconcat.length) 
    //         storer.push(cont);
    //     }else{
    //         otherPart = strconcat;
    //         counter+= otherPart.length;
    //         storer.push(otherPart);
    //     }

    // // return storer;
    //     return accum(otherPart,count, reg, storer, counter,initial)
    // }
    // let counter = 0
    // let initial = string.length
    // console.log(accum(string,ans,regExp,store, counter,initial))
var acc = []
function f(fib,acc){
    // if (fib == 0) {
    //     return f(fib-1)+ f(fib-2);
    // }
    if (fib <= 0) {
        return 1;
    }
    // else {
       // val= f(fib-1)+ f(fib-2)
       // console.log(fib)
        return f(fib-1)+ f(fib-2)
    //}
}

console.log(f(7,acc))
