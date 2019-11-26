function converter() {
	var valor = document.getElementById("val").value;
	var de = document.getElementById("unidade_de").value;
	var para = document.getElementById("unidade_para").value;

	var http = new XMLHttpRequest();
  	var url = "http://127.0.0.1:3000/converterTemperatura?" + "valor=" + valor + "&de=" + de + "&para=" + para;

  	http.open("GET", url);
  	http.send();
  	http.onreadystatechange = function() { 
    	if(this.readyState == 4 && this.status == 200) {
      		var ans = JSON.parse(http.responseText);
      		document.getElementById("ans").innerHTML = ans['valor'];
    	}
    	if(this.readyState == 4 && this.status == 400) {
    		document.getElementById("ans").innerHTML = "bad request";
    	}
  	}
}

