function turnon(){
    document.querySelector('.bulb-display').src="pic_bulbon.gif";
    document.querySelector('.outer-box').classList.add('shadow-effect');
}
function turnoff(){
    document.querySelector('.bulb-display').src="pic_bulboff.gif";
    document.querySelector('.outer-box').classList.remove('shadow-effect');
}