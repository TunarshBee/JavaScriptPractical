function validating(params) {
    let Email = document.getElementById('email').value;
    let    Pass = document.getElementById('password').value;
     let  comfirm = document.getElementById('confirm').value;
     let reg = //
    if ((Pass != comfirm) || !reg.test(Pass)) {
        alert('Password Mismatch');
    }
    else{
        alert (Email);
    }
    
    // if () {
    //     alert('weare not allowed');
    // }

}