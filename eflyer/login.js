document.addEventListener('DOMContentLoaded', () => {


    const loginForm = document.getElementById("loginForm");


    const logem = document.getElementById("login-email");
    const logpass = document.getElementById("login-password");


    logem.addEventListener('input', function(){

        clearErrorMessage('login-email');
    });

    logpass.addEventListener('input', function() {

        clearErrorMessage('login-password');
    });
    function clearErrorMessage(elementId) {
        const ele= document.getElementById(elementId);
        const cerr = ele.parentElement;
        const errele = cerr.querySelector(".error")
        errele.textContent = '';
     }

     loginForm.addEventListener('submit', async (event) => {
        
        event.preventDefault();
        console.log("hhhh")
     
       
   
     const validateInputslogin = () => {
        
    
        const email = document.getElementById("login-email")
        const password = document.getElementById("login-password")
        
        
      
        
        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector(".error");
        
            errorDisplay.innerText = message;
            inputControl.classList.add('errorcontrollog');
            inputControl.classList.remove('successcontrollog');
        
        }
        
        const setSuccess = element => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector(".error");
            console.log("success")
        
            errorDisplay.innerText = '';
            inputControl.classList.add('successcontrollog');
            inputControl.classList.remove('errorcontrollog');
          
           
        };
        
        const isValidEmail = email => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
           
            const emailvaltrim = document.getElementById("login-email").value.trim();
    const passwordvaltrim = document.getElementById("login-password").value.trim();
           
        console.log("bale")
           
            if(emailvaltrim === '') {
                setError(email, 'Email is required');
            } else if (!isValidEmail(emailvaltrim)) {
                setError(email, 'Provide a valid email address');
            } else {
                setSuccess(email);
            }
        
            if(passwordvaltrim === '') {
                setError(password, 'Password is required');
            } else if (passwordvaltrim.length < 8 ) {
                setError(password, 'Password must be at least 8 character.')
            } else {
                setSuccess(password);
            }
        }
    
        
            
        validateInputslogin();

        function tester(){
            const ele =document.getElementsByClassName('errorcontrollog');
            return ele.length?ele:false;
        }
        const test=tester()
        if(test){
            console.log("errors")
        }
        else{
            alert("login succesfull");
        }
       })


})