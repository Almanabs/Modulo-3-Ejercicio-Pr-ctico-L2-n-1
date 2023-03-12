var diametro=prompt("ingresa un diametro de la circunferencia")
radio=diametro/2;
area=Math.PI*Math.pow(radio,2);
//mensaje por consola
console.log(area);
//mensaje por ventana de alerta
window.alert("El valor del area para la circunferencia de diametro" + diametro + "es igual a" + area);
//muestra el resultado de la pagina
resultado=document.getElementById("resultado");
resultado.innerHTML="el valor del area para la circunferencia de diametro" + diametro + "es igual a" + area;