function RegisterationData() {

    var name= document.getElementById('username').value;
    var number= document.getElementById('userphone').value;
    var email= document.getElementById('useremail').value;
    var password= document.getElementById('password').value;
    var confirmPassword= document.getElementById('confirmpassword').value;
    var phno = length==10;
      if(name=='' || number=='' || email==''){
        alert('Please fill the filed')
        return false;
      }
      else if(number.match(phno)){
        alert("Mobile Number Should Contain 10 Digits")
        return false;
      }
      else if(password != confirmPassword){
        alert('Password And Confirm Password Should Be Same')
        return false;
      }
      
      var data = {
        Name: document.getElementById('username').value,
        MobileNumber: document.getElementById('userphone').value,
        Email: document.getElementById('useremail').value,
        Password: document.getElementById('password').value,
        ConfirmPassword: document.getElementById('confirmpassword').value,
  
      }

      fetch('/sendData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        
        .then(response => response.json())
        .then(data => {
          console.log(data)
          alert("Successfully Registered! Click OK To SignIn")
          window.location.href="/login"
        })
        .catch((error) => {
          alert("Mail ID Already Exits")
        });
    }

    // Password Hide And Show Function

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    togglePassword.addEventListener('click', function (e) {
    // For Password
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');

});

