var imagenes=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];
var contador=0;

function cambiarImagen(){
	imagen.src=imagenes[contador];
	contador++;
	if (contador >= imagenes.length) {
		contador=0;
	}
}

setInterval(cambiarImagen,2000);

function programa(){

	boton.addEventListener("click",cambiarImagen);
	
}

window.addEventListener("load",programa);

function dados(){
	for (i=0;i<botonitos.botonera.length;i++) {
 		if (botonitos.botonera[i].checked){
		break;
		}
 	}
	
 }

 function botones(){
 	for(i=0;i<botonitos.botonera.length;i++){
 		botonitos.botonera[i].addEventListener("change",cambiarImagen);
 	}
	
 }

 window.addEventListener("load",botones);

 function cambiarImagenAtras(){
	imagen.src=imagenes[contador];
	contador--;
	if (contador<=0) {contador=4;
		
	 }
}

 