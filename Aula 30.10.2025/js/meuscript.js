function ligar(){
    document.getElementById('lamp').src='img/pic_bulbon.gif';

}

function desligar(){
        document.getElementById('lamp').src='img/pic_bulboff.gif';
    
}

function onOff(){
    if(document.getElementById('lamp2').src.includes('img/pic_bulboff.gif'))
        {
            document.getElementById('lamp2').src='img/pic_bulbon.gif';
        } else {
            document.getElementById('lamp2').src='img/pic_bulboff.gif';
        }


}
