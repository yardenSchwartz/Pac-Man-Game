//left key choose
var leftChoose="";
var rightChoose="";
var downChoose="";
var upChoose="";
var isLissen=false;
function leftKeyHandling() {
    if(isLissen==false){
        isLissen=true;
        document.getElementById("keyerror").style.display='none';
        document.getElementById("left").innerHTML="<span class='after-press-span' style='font-size: 16px; color: black;font-family:cursive;'><i class='fas fa-arrow-alt-circle-left'><br>Choose Key</i></span>";
        document.getElementById("left").style.background= "#ca7c6d";
        document.getElementById("left").style.border= "yellow solid 4px";

        document.addEventListener("keydown", leftChoosen);   
    }
    else{
        document.getElementById("keyerror").style.display='none';
        document.getElementById("keyerror").innerText="you have to choose key first";
        document.getElementById("keyerror").style.display='block';
        
    }
}

function leftChoosen(e) {
    let keyChoose=e.code;
    if(keyChoose==rightChoose||keyChoose==downChoose||keyChoose==upChoose){
        document.getElementById("keyerror").innerText="Please choose different key each";
        document.getElementById("keyerror").style.display='block';
    }
    else{
        isLissen=false      
        document.getElementById("keyerror").style.display='none';
        leftChoose = keyChoose;
        document.getElementById("left").innerHTML="<span class='after-press-span' style='font-size: 16px; color: black;font-family:cursive;'><i class='fas fa-arrow-alt-circle-left'><br>"+keyChoose+"</i></span>";
        document.getElementById("left").style.background= "#eaada1";
        document.removeEventListener("keydown", leftChoosen);
        document.getElementById("left").style.border= "none";

    }
 

}


function rightKeyHandling() {
    if(isLissen==false){
        isLissen=true;
        document.getElementById("keyerror").style.display='none';
        document.getElementById("right").innerHTML="<span class='after-press-span' style='font-size: 16px; color: black;font-family:cursive;'><i class='fas fa-arrow-alt-circle-right'><br>Choose Key</i></span>";
        document.getElementById("right").style.background= "#ca7c6d";
        document.addEventListener("keydown", rightChoosen);
        document.getElementById("right").style.border= "yellow solid 4px";   
    }
    else{
        document.getElementById("keyerror").style.display='none';
        document.getElementById("keyerror").innerText="you have to choose key first";
        document.getElementById("keyerror").style.display='block';
        
    }
}

function rightChoosen(e) {
    let keyChoose=e.code;
    if(keyChoose==leftChoose||keyChoose==downChoose||keyChoose==upChoose){
        document.getElementById("keyerror").innerText="Please choose different key each";
        document.getElementById("keyerror").style.display='block';
    }
    else{
        isLissen=false      
        document.getElementById("keyerror").style.display='none';
        rightChoose = keyChoose;
        document.getElementById("right").innerHTML="<span class='after-press-span' style='font-size: 16px; color: black;font-family:cursive;'><i class='fas fa-arrow-alt-circle-right'><br>"+keyChoose+"</i></span>";
        document.getElementById("right").style.background= "#eaada1";
        document.removeEventListener("keydown", rightChoosen);
        document.getElementById("right").style.border= "none";
    }
 
}

function upKeyHandling() {
    if(isLissen==false){
        isLissen=true;
        document.getElementById("keyerror").style.display='none';
        document.getElementById("up").innerHTML="<span class='after-press-span' style='font-size: 16px; color: black;font-family:cursive;'><i class='fas fa-arrow-alt-circle-up'><br>Choose Key</i></span>";
        document.getElementById("up").style.background= "#ca7c6d";
        document.addEventListener("keydown", upChoosen);  
        document.getElementById("up").style.border= "yellow solid 3px"; 
    }
    else{
        document.getElementById("keyerror").style.display='none';
        document.getElementById("keyerror").innerText="you have to choose key first";
        document.getElementById("keyerror").style.display='block';
        
    }
}

function upChoosen(e) {
    let keyChoose=e.code;
    if(keyChoose==rightChoose||keyChoose==downChoose||keyChoose==leftChoose){
        document.getElementById("keyerror").innerText="Please choose different key each";
        document.getElementById("keyerror").style.display='block';

    }
    else{
        isLissen=false      
        document.getElementById("keyerror").style.display='none';
        upChoose = keyChoose;
        document.getElementById("up").innerText =keyChoose;
        document.getElementById("up").innerHTML="<span class='after-press-span' style='font-size: 16px; color: black;font-family:cursive;'><i class='fas fa-arrow-alt-circle-up'><br>"+keyChoose+"</i></span>";

        document.getElementById("up").style.background= "#eaada1";
        document.removeEventListener("keydown", upChoosen);
        document.getElementById("up").style.border= "none";
    }

}


function downKeyHandling() {
    if(isLissen==false){
        isLissen=true;
        document.getElementById("keyerror").style.display='none';
        document.getElementById("down").innerHTML="<span class='after-press-span' style='font-size: 16px; color: black;font-family:cursive;'><i class='fas fa-arrow-alt-circle-down'><br>Choose Key</i></span>";
        document.getElementById("down").style.background= "#ca7c6d";
        document.addEventListener("keydown", downChoosen);   
        document.getElementById("down").style.border= "yellow solid 3px";
    }
    else{
        document.getElementById("keyerror").style.display='none';
        document.getElementById("keyerror").innerText="you have to choose key first";
        document.getElementById("keyerror").style.display='block';
    }
}

function downChoosen(e) {
    let keyChoose=e.code;
    if(keyChoose==rightChoose||keyChoose==upChoose||keyChoose==leftChoose){
        document.getElementById("keyerror").innerText="Please choose different key each";
        document.getElementById("keyerror").style.display='block';

    }
    else{
        isLissen=false      
        document.getElementById("keyerror").style.display='none';
        downChoose = keyChoose;
        document.getElementById("down").innerHTML="<span class='after-press-span' style='font-size: 16px; color: black;font-family:cursive;'><i class='fas fa-arrow-alt-circle-down'><br>"+keyChoose+"</i></span>";
        document.getElementById("down").style.background= "#eaada1";
        document.removeEventListener("keydown", downChoosen);
        document.getElementById("down").style.border= "none";
    }

}


function start(id){  
    let numOfBalls=document.getElementById("numberOfBalls").value;
    let gameTime=document.getElementById("choosenGameTime").value;
    let numberOfMonsters=document.getElementById("numberOfMonsters").value;

    let isValid=true;
    if (gameTime>=60){
        document.getElementById("timeError").style.display='none';
    }
    else{
        document.getElementById("timeError").innerText="Time have to be bigger then 1 minute.";
        document.getElementById("timeError").style.display='block';
        isValid=false;
    }
    if(numOfBalls>=50&&numOfBalls<=90){
        document.getElementById("ballsError").style.display='none';
    }
    else{
        document.getElementById("ballsError").innerText="Must have between 50 to 90 balls.";
        document.getElementById("ballsError").style.display='block';
        isValid=false;
    }

    if(numberOfMonsters>=1&&numberOfMonsters<=4){
        document.getElementById("monsterError").style.display='none';

    }
    else{
        document.getElementById("monsterError").innerText="Must have between 1 to 4 monsters.";
        document.getElementById("monsterError").style.display='block';
        isValid=false;
    }

    if(leftChoose!=""&&rightChoose!=""&&downChoose!=""&&upChoose!=""){
        document.getElementById("keyerror").style.display='none';

    }
    else{
        document.getElementById("keyerror").innerText="Please choose keys";
        document.getElementById("keyerror").style.display='block';
        isValid=false;
    }
    if(isValid==true){
        //go to game
        changeWindowById("gameSection")
        readyToGame();

    }

}
// let firstColor="";
// let secondColor="";
// let thirdColor="";
var arrayOfColors="";
function random(id){
    leftChoose="ArrowLeft";
    rightChoose="ArrowRight";
    downChoose="ArrowDown";
    upChoose="ArrowUp";
    document.getElementById("left").innerText =leftChoose;
    document.getElementById("right").innerText=rightChoose;
    document.getElementById("up").innerText=upChoose;
    document.getElementById("down").innerText=downChoose;

  

    document.getElementById("numberOfBalls").value = Math.floor(Math.random() * (90 - 50 + 1) + 50);
    document.getElementById("numberOfMonsters").value = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    document.getElementById("choosenGameTime").value = Math.floor(Math.random() * (300 - 60 + 1) + 60);
    


    // document.getElementById("colorpadfirst").value =getRandomColor();
    // document.getElementById("colorpadsecond").value =getRandomColor();
    // document.getElementById("colorpadfirstthird").value =getRandomColor();
    // changeWindowById("gameSection")
    

    let color=getRandomColor();
    let i=0;
    arrayOfColors[0]="";
    arrayOfColors[1]="";
    arrayOfColors[2]="";

    while(i<3){
        if(isValidColor(color)){
            arrayOfColors[i]=color;
            i++;
        }
        color=getRandomColor();
    }
    /****check */
    document.getElementById("colorpadfirst").value =getRandomColor();
    document.getElementById("colorpadsecond").value =getRandomColor();
    document.getElementById("colorpadfirstthird").value =getRandomColor();
 
    
    // changeWindowById("gameSection")
    // readyToGame();

    

    
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function isValidColor(color){
    if(color!=arrayOfColors[0]&&color!=arrayOfColors[1]&&color!=arrayOfColors[2]){
        return true;
    }
    return false;
}