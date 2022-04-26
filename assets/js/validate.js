// account
var user = 'admin';
var password = 'TuanDemo';

// lấy form validate
var formElement = document.getElementById('form-login');

function validate(input){
    var formMessage = input.parentElement.querySelector('.form-message');
    switch(input.name){
        case 'user':
            if(input.value == ''){
                formMessage.innerText = "Không được bỏ trống tên đăng nhập";
                input.classList.add('invalid');
            }else{
                formMessage.innerText = "";
                input.classList.remove('invalid');
            }
            break;

        case 'password':
            if(input.value == ''){
                formMessage.innerText = "Không được bỏ trống mật khẩu";
                input.classList.add('invalid');
            }else{
                formMessage.innerText = "";
                input.classList.remove('invalid');
            }
            break;
        default:
    }
    return !!(formMessage.innerText);
}

function checkuser(){
    var getUser = formElement.querySelector('input[name="user"]');
    var getPass = formElement.querySelector('input[name="password"]');
    if(getUser.value === user && getPass.value === password){
        isValid = true;
    }else{
        isValid = false;
    }
}

// list input
var inputElements = formElement.querySelectorAll('.form-group input');
// duyệt qua các input
Array.from(inputElements).forEach(function(input){
    // bắt sự kiện blur
    input.onblur = function(){
        validate(input);
    }
})

// bắt sự kiện click submit
var isValid = true;
var inputsubmit = formElement.querySelector('input[type="submit"]');
inputsubmit.onclick = function(e){
    e.preventDefault();
    Array.from(inputElements).forEach(function(input){
        var valid = validate(input);
        if(valid){
            isValid = false;
        }
    })
    checkuser();
    if(isValid){
        formElement.submit();
    }
}