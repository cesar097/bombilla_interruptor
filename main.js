const $cambiarInterruptor = document.getElementById("cambiarInterruptor"),
$cambiarFoco = document.getElementById("cambiarFoco"),
$awith = document.querySelector(".switch");

function cambiarImagen(){
    if($cambiarFoco.src.match("./img/encendido-1.png") && $cambiarInterruptor.src.match("./img/on-or.png")){
        $cambiarFoco.src = "./img/apagado-1.png";
        $cambiarInterruptor.src ="./img/off-or.png"
    } else {
        $cambiarFoco.src = "./img/encendido-1.png";
        $cambiarInterruptor.src = "./img/on-or.png";
    }
}
$awith.addEventListener("click", cambiarImagen)