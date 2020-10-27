
function openEndModal(){
    model=document.getElementById("endModal");
    model.classList.add('active');
    overlay=document.getElementById("overlay");
    overlay.classList.add('active');
    
    document.getElementById("menu").style.position="static";
    document.getElementById("overlay").addEventListener("click", function(){
        closeEndModal();   
        });
    
        // document.getElementById("menu").addEventListener("click", function(){
        //     closeModel();   
        // });
        
    document.addEventListener("keydown", isEsc);   
}
function isEsc(e){
    let keyChoose=e.code;
    if(keyChoose=="Escape"){
        closeEndModal();
    }
}
function closeEndModal(){
    model=document.getElementById("endModal");
    model.classList.remove('active');
    overlay=document.getElementById("overlay");
    overlay.classList.remove('active');
    // document.getElementById("menu").style.position="fixed";
    document.removeEventListener("click", function(){
        closeEndModal();   
    });
 


}

