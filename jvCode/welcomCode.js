

//check if localStorage contain this user
function containUser(checkUser){
 
  let array = JSON.parse(localStorage.getItem("allUsers"));
  if(array!=null){
    for(i=0; i<array.length; i++ ){
       if(array[i].name==checkUser.name && array[i].password==checkUser.password){
            return true;
        }
    }
  }
  return false;
}

/****for login accses*****/
function containUserName(userName){
 
  let array = JSON.parse(localStorage.getItem("allUsers"));
  for(i=0; i<array.length; i++ ){
      if(array[i].name==userName){
          return true;
        }
  }
  return false;
}

/****for login accses*****/
function getPasswordOfUserName(userName){
 
  let array = JSON.parse(localStorage.getItem("allUsers"));
  for(i=0; i<array.length; i++ ){
      if(array[i].name==userName){
          return array[i].password;
        }
  }
  return null;
}



//add uder to localStorage array of users
function addUser(user){
  if(containUserName(user.name)==false){
    allUsers = JSON.parse(localStorage.getItem("allUsers"));
    allUsers.push(user);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    return true;
  }
  else{
    //this username contains in the system
    alert("There is username like this in the system, please choose another name")

    return false;
  }
}
