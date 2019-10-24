function Triangulo(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  
  Triangulo.prototype.toString = function () {
    return `Lado A ${this.a}, Lado B ${this.b}, Lado C ${this.c}`
  };
  
  Triangulo.prototype.tipo = function () {
  	if(this.a == this.b && this.b == this.c) {
  	  return "Equilatero";
  	}
  	else if(this.a != this.b && this.b != this.c && this.a != this.c) {
  	  return "Escaleno";
  	}
  	else {
  	  return "Isosceles";
  	}
  };

  Triangulo.prototype.valido = function() {
  	if(this.a + this.b <= this.c) {
  	  return false;
  	}
  	else if(this.a + this.c <= this.b) {
  	  return false;
  	}
  	else if(this.b + this.c <= this.a) {
  	  return false;
  	}
  	return true;
  }

  Triangulo.prototype.tipo_angulo = function() {
  	var menor = Math.min(this.a, Math.min(this.b, this.c));
  	var maior = Math.max(this.a, Math.max(this.b, this.c));
  	var meio = this.a + this.b + this.c - menor - maior;
  	if(menor*menor + meio*meio == maior*maior) {
  	  return "Retangulo";
  	}
  	else if(menor*menor + meio*meio < maior*maior) {
  	  return "Obtusangulo"; 
  	}
  	else if(menor*menor + meio*meio > maior*maior) {
  		return "Acutangulo";
  	}
  }
  
  module.exports = Triangulo;