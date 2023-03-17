
var randno=Math.floor(Math.random()*6)+1;
var image="images/dice"+randno+".png";
var selected=document.querySelectorAll("img")[0];
selected.setAttribute("src",image);
var randno2=Math.floor(Math.random()*6)+1;
var image2="images/dice"+randno2+".png";
var selected=document.querySelectorAll("img")[1];
selected.setAttribute("src",image2);
if(randno>randno2){
    document.querySelector("h1").innerHTML="&#9971; player 1 winner";
}else if(randno2>randno){
    document.querySelector("h1").innerHTML="player 2 winner &#9971;";
}
else{
    document.querySelector("h1").innerHTML="draw";
}

