var videoplayer=document.getElementById(`video1`);
videoplayer.volume= 0;
videoplayer.setAttribute(`autoplay`, `True`);
videoplayer.addEventListener(`autoplay`, myhandler, `True`); 
function myhandler(){
    videoplayer.volume=3;
}

const contact= document.getElementById(`contact`);
    contact.addEventListener(`click`, conclick, `True`);
function conclick() {
  var crazymail=document.getElementById(`crazy`);
    crazymail.style.visibility=`visible`;
}
//


function submail(e) {
    var uname=document.getElementsByName(`name`);
    var umail=document.getElementsByName(`mail`);
    var uphone=document.getElementsByName(`phone`);
    var urequest=document.getElementsByName(`req`);
    alert("e Submitted" );
    window.open(`mailto:whatthefunnngames@outlook.com?subject=Site%20Request&cc= + ${umail[0]} + &body=${urequest[0]} ${uname[0]} ${umail[0]} ${uphone[0]}`);
    document.getElementById(`crazy`).style.visibility=`hidden`;
}    

function closeme() {
    document.getElementById(`crazy`).style.visibility=`hidden`;
}

var closer=document.getElementById(`closer1`).addEventListener(`click`, closeme, `True`)

//mailto:john@demosite.com?subject=Test%20email&cc=test@gmail.com&body=This is my body text