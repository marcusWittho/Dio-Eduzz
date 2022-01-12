// const assert = require('assert');
const Math = require('../src/math');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 2;

describe('Math class', function() {

  // Hooks
  // beforeEach é executado antes de cada it
  beforeEach(function() {
    value = 2;
  });

  it('Sum two numbers', function() {
    const math = new Math();

    // Alteração da variável value para exemplificar o uso do beforeEach
    value = 5;

    // assert.equal(math.sum(value, 5), 10);
    expect(math.sum(value, 5)).to.equal(10);
  });

  // Exemplo de teste para funções assíncronas
  it('Multiply two numbers', function(done) {
    const math = new Math();

    // Objetos criados para exemplificar o uso do chai
    const obj = {
      name: 'Marcus'
    }

    const obj2 = {
      name: 'Marcus'
    }

    // Arrow functions não acessam o this corretamente
    this.timeout(3000);

    math.multiply(value, 3, (value) => {
      // assert.equal(value, 6)
      expect(value).to.equal(6);
      done();
    });

    expect(obj).to.have.property('name').to.equal('Marcus');

    // Ao comparar dois objetos usando o 'to.equal', será retornado um erro,
    // para fazer a comparação o 'to.equal' não verifica os valores,
    // ele compara as referências
    // expect(obj).to.equal(obj2);

    // Para que a comparação seja feita corretamente deve-se utilizar o 'to.deep.equal'.
    expect(obj).to.deep.equal(obj2);
  });

  it.only('Calls res with sum and index values', function() {
    const math = new Math();
    const req = {};
    const res = {
      load: function() {
        console.log('Called!');
      }
    };

    sinon.spy(res, 'load');

    math.printSum(req, res, 5, 5);

    expect(res.load.calledOnce).to.be.true;
    expect(res.load.args[0][0]).to.equal('index');
    expect(res.load.args[0][1]).to.equal(10);
  });
});
