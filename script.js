

function modoNoturno(){
	
	let textoH1 = document.getElementById("titulo");
	let botao = document.getElementById("botao");
	let img = document.getElementById("img-b");
	console.log(img)
	
	if(textoH1.innerText == "Modo Banner"){
		document.body.style.backgroundColor = "black";
	
		textoH1.innerHTML = "Modo Hulk";	// innerHTML - Esta função permite manipular o HTML.
		textoH1.style.color = "green";
		
		botao.style.backgroundColor = "green";
		botao.style.color = "black";
		botao.innerHTML = "Ativar modo Banner";
		img.setAttribute("src", "img/hulk.png");
	}else{
		document.body.style.backgroundColor = "rgb(60, 179, 113)";
	
		textoH1.innerHTML = "Modo Banner";	// innerHTML - Esta função permite manipular o HTML.
		textoH1.style.color = "black";
		
		botao.style.backgroundColor = "black";
		botao.style.color = "green";
		botao.innerHTML = "Ativar modo Hulk";
		img.setAttribute("src", "img/banner.png")
	}

	
}