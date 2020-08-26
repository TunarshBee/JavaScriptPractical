    let spliting = 'deve.lop;er'
     biscuit= 'Yale'
function spliter(par) {
    container = []
    for (let i = 0; i < par.length; i++) {
       container.push(par[i]) 
    }
    return container;
}
console.log(spliter(spliting));

let splited = biscuit.split('');
console.log(splited)