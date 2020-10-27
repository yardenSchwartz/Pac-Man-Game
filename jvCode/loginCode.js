
$(document).ready(function () {

    $('#loginForm').validate({

        rules: {
            login_username: {
                pattern: '^[a-zA-Z0-9]*$',
                required: true,
            },
            login_password: {
                required: true,
            },
        },
        messages: {
            login_username: {
                pattern: "Your user name must be contains only letters and numbers",
                required: "Please enter a username",
            },
            login_password: {
                required: "Please provide a password",
            },
        },
    
    });

});

function login() {
       
        if ($('#loginForm').valid()) {
            //take the input 
            let userName = ($('#login_username').val());
            let userPassword = ($('#login_password').val());

            //reset them
            $("#login_username").val('');
            $("#login_password").val('');
    
            //check if username exsist
            if(containUserName(userName)){
                //check if his password correct
                if(getPasswordOfUserName(userName) == userPassword){
                    //save the user to be the cuurent user
                    currentLoginUser = userName;
                    
                    //just than change to setting
                    changeWindowById("settingSection")
                }
                else{
                    $("#errorId").text("wrong password");
                }
            }
            else{
                $("#errorId").text("user doesnt exist in the system");
            }
            
            
        }

}
