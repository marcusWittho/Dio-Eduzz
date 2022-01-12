const assert = require('assert');
const Math = require('../src/math');

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

    assert.equal(math.sum(value, 5), 11);
  });

  // Exemplo de teste para funções assíncronas
  it('Multiply two numbers', function(done) {
    const math = new Math();

    // Arrow functions não acessam o this corretamente
    this.timeout(3000);

    math.multiply(value, 3, (value) => {
      assert.equal(value, 6)
      done();
    });
  });
})