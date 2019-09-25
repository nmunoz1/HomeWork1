
function GetStarted(){
    var T1 = document.getElementById("WelcomeTitle");
    var T2 = document.getElementById("WelcomeSubtitle");
    var Box = document.getElementById("myDiv");
    var Button = document.getElementById("B1");
    
    T1.innerText="But first... what is your name?";
    T2.innerText="";
    console.log(Box.style.display);

    if (Box.style.display === "none") {
        Box.style.display = "block";
      } else {
        Box.style.display = "none";
      }


    if (Button.style.display === "block") {
        Button.style.display = "none";
      } else {
        Box.style.display = "none";
      }
}

function ShowPics(){
    var T1 = document.getElementById("WelcomeTitle");
    var T2 = document.getElementById("WelcomeSubtitle");
    var Button2 = document.getElementById("B2");
    var Name = document.getElementById("NameBox")
    var Box = document.getElementById("myDiv");
    var pics = document.getElementById("pics")
    
    Button2.style.display = "none";
    T1.innerText="Welcome "+ Name.value;
    T2.innerText="Check out some pictures from our trip to Mount Washington";

    if (Box.style.display === "none") {
        Box.style.display = "block";
      } else {
        Box.style.display = "none";
      }

    if (pics.style.display === "none") {
        pics.style.display = "block";
      } else {
        pics.style.display = "none";
      }
}