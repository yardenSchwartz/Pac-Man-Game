
//initialize array for saving users
var allUsers;
var currentLoginUser="";

$(document).ready(function(){
    
    var allUsers = new Array();
    var defaultUser = {
        name:"p",
        password:"p"
    };
    allUsers.push(defaultUser);

    if(localStorage.getItem("allUsers")==null){
        localStorage.setItem("allUsers",JSON.stringify(allUsers));
    }


    //check if the default user exist in the array
    if(containUser(defaultUser)==false){
      allUsers = JSON.parse(localStorage.getItem("allUsers"));
      allUsers.push(defaultUser);
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }

    if(localStorage.getItem("allUsers"==null)){
        localStorage.setItem("allUsers",JSON.stringify(allUsers));
    }
})


/*************switching windows**************/
function changeWindow(id) {
    if((id.getAttribute("data-option")=="settingSection"&&currentLoginUser!="")||
    id.getAttribute("data-option")!="settingSection"){
        if(isInGame){
            clearAllIntervals();
           }
            let section = document.getElementsByTagName('section');
        
            for(i=0; i<section.length; i++){
                    section[i].style.display = 'none';
            }
            
            document.getElementById(id.getAttribute("data-option")).style.display = "block"
        
    }
    else{
        alert("Before change setting you must login first.")
    }
  
}


function changeWindowById(id) {
    if(isInGame){
        clearAllIntervals() ;
    }
    let section = document.getElementsByTagName('section');

    for(i=0; i<section.length; i++){
            section[i].style.display = 'none';
    }
    
    document.getElementById(id).style.display = "block"
}


  
