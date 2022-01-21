document.getElementById("enviar").onclick =()=>{
    let opcion =document.getElementById("opcion").value;
    console.log(opcion);
    let divImagenes = document.getElementById("imagenes");
    let imagenVisual =document.createElement("img");
    imagenVisual.src='./img/musica.jpg';
    divImagenes.append(imagenVisual);
    console.log(opcion);
}