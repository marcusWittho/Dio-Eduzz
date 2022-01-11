const assert = require('assert');
const Math = require('../src/math.js');

let value = 2

describe('Math class', function() {

  // Hooks
  // beforeEach é executado antes de cada 'it'
  beforeEach(function() {
    value = 2
  });

  it('Sum two numbers', function() {
    const math = new Math();

    // Alteração da variável value para exemplificar o funcionamento do beforeEach
    value = 5

    assert.equal(math.sum(5, 5), 10);
  });

  // Teste para funções assíncronas
  it('Multiply two numbers', function(done) {
    const math = new Math();

    // Não é possível acessar o this corretamente com arrow functions
    this.timeout(3000);

    math.multiply(value, 3, (value) => {
      assert.equal(value, 6);
      done();
    });
  });
});
