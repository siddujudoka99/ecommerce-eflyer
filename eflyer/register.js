document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById("signupForm");
    const newemail= document.getElementById("signup-email");
    const newpass = document.getElementById("signup-password" );
    const newusername = document.getElementById("username");
    const newpasswordconfirm = document.getElementById("signup-confirmpassword");
    newemail.addEventListener('input', function() {

        clearErrorMessage('signup-email');
    });

    newusername.addEventListener('input', function() {

        clearErrorMessage('username');
    });

    newpasswordconfirm.addEventListener('input', function() {

        clearErrorMessage('signup-confirmpassword');
    });

   newpass.addEventListener('input', function() {
        clearErrorMessage('signup-password');
    });
    // error clearing function
    function clearErrorMessage(elementId) {
       const ele= document.getElementById(elementId);
       const cerr = ele.parentElement;
       const errele = cerr.querySelector(".error")
       errele.textContent = '';}

       signupForm.addEventListener('submit', async (event) => {
           
        event.preventDefault();
       const validateInputs = () => {
        
    
    
        const username = document.getElementById("username");
        const emailmain = document.getElementById("signup-email");
        const passwordmain = document.getElementById("signup-password" );
        const passwordconfirm = document.getElementById("signup-confirmpassword");
        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector(".error");
        
            errorDisplay.innerText = message;
            inputControl.classList.add('errorcontrol');
            inputControl.classList.remove('successcontrol');
        
        }
        
        const setSuccess = element => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector(".error");
        
            errorDisplay.innerText = '';
            inputControl.classList.add('successcontrol');
            inputControl.classList.remove('errorcontrol');
           
           
        };
        
        const isValidEmail = email => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
            console.log("valid")
            const usernameValue = username.value.trim();
            const emailValue = emailmain.value.trim();
            const passwordValue = passwordmain.value.trim();
            const password2Value = passwordconfirm.value.trim();
        
            if(usernameValue === '') {
                setError(username, "Username is required");
            } else {
                setSuccess(username);
            }
            if(emailValue === '') {
                setError(emailmain, 'Email is required');
            } else if (!isValidEmail(emailValue)) {
                setError(emailmain, 'Provide a valid email address');
            } else {
                setSuccess(emailmain);
            }
        
            if(passwordValue === '') {
                setError(passwordmain, 'Password is required');
            } else if (passwordValue.length < 8 ) {
                setError(passwordmain, 'Password must be at least 8 character.')
            } else {
                setSuccess(passwordmain);
            }
        
            if(password2Value === '') {
                setError(passwordconfirm, 'Please confirm your password');
            } else if (password2Value !== passwordValue) {
                setError(passwordconfirm, "Passwords doesn't match");
            } else {
                setSuccess(passwordconfirm);
            }
        
        };
        validateInputs();
        function helper(){
            const ele =document.getElementsByClassName('errorcontrol');
            return ele.length?ele:false;
        }
    
    
        const test=helper()
        if(test){
            console.log("error during sinup");}
        else{

            alert('Registered successfully')
        }
    })

})