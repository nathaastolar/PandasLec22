var contenedor = document.getElementById("container")
for(var i = 1; i<=4; i++){
  var div = document.createElement("div");
  var imagen = document.createElement("img");
  var span = document.createElement("span");

  div.setAttribute("class","div-img");
  imagen.setAttribute("width","200");
  imagen.setAttribute("height","200");
  imagen.setAttribute("class", "img");
  imagen.setAttribute("src", "assets/img/Panda-" + i + ".jpg");
  span.innerHTML = "x";
  imagen.setAttribute("id", i);
  span.setAttribute("class", "close");
  div.appendChild(imagen);
  div.appendChild(span);
  contenedor.appendChild(div);
}
  
