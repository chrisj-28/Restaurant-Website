function toggleNavigationBar() {
    var x = document.getElementById("homeTopNav");
    if (x.className == "topNav") 
        x.className += " responsive";
    else   
        x.className = "topNav";
}