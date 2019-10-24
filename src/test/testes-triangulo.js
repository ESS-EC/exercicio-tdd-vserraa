const chai = require('chai');
const Triangulo = require('../triangulo');

const assert = chai.assert;


describe('Verificando se é escaleno', () => {
  it('Teste: Os três lados são diferentes', () => {
    let triangulo = new Triangulo(7, 5, 10)
    assert.equal(triangulo.tipo(), "Escaleno");
  });

});

describe('Verificando se é equilatero', () => {
  it('Teste: Os três lados são iguais', () => {
    let triangulo = new Triangulo(5, 5, 5)
    assert.equal(triangulo.tipo(), "Equilatero");
  });
});

describe('Verificando se é isósceles', () => {
  it('Teste: Lados a e b iguais', () => {
    let triangulo = new Triangulo(7, 7, 10)
    assert.equal(triangulo.tipo(), "Isosceles");
  });
  it('Teste: Lados b e c iguais', () => {
    let triangulo = new Triangulo(10, 7, 7)
    assert.equal(triangulo.tipo(), "Isosceles");
  });
  it('Teste: Lados a e c iguais', () => {
    let triangulo = new Triangulo(7, 10, 7)
    assert.equal(triangulo.tipo(), "Isosceles");
  });
});

describe('Verificando se é retângulo', () => {
  it('Teste: Triangulo retângulo', () => {
    let triangulo = new Triangulo(6, 8, 10)
    assert.equal(triangulo.tipo_angulo(), "Retangulo");
  });
});

describe('Verificando se é acutangulo', () => {
  it('Teste: Triangulo acutangulo', () => {
    let triangulo = new Triangulo(2, 2, 2);
    assert.equal(triangulo.tipo_angulo(), "Acutangulo");
  });
});

describe('Verificando se é obtusangulo', () => {
  it('Teste: Triangulo obtusangulo', () => {
    let triangulo = new Triangulo(10, 5, 6);
    assert.equal(triangulo.tipo_angulo(), "Obtusangulo");
  });
});

describe('Verificando se os tamanhos lados são válidos', () => {
  it('Teste: Lado com valor que viola validade do triângulo ', () => {
    let triangulo = new Triangulo(100, 10, 10)
    assert.equal(triangulo.valido(), false);
  });
});
