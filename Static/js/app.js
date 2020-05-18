//alert("=");
var btn = document.getElementById("btnadd");
var ullista = document.getElementById("lista");
//console.log(btn);

function crearNodoLi(_texto){
	var li = document.createElement("li");
	var text = document.createTextNode(_texto);

	li.appendChild(text);
	return li;	
}
btn.addEventListener("click", function(){
	var lop = document.getElementById("texto").value;
	//var texto = prompt("añade tu tarea: ");
	var nli = crearNodoLi(lop);
	ullista.appendChild(nli);
	console.log(nli);
})



btn.addEventListener("mouseover", function(){
	console.log("Estas apunto de hacer click")
});