// // Exemplo de função construtora FN_1
// 'use strict';

// function Animal(qtdeDePatas) {
//   this.qtdeDePatas = qtdeDePatas;
// }

// const cachorro = new Animal(4);

// console.log(cachorro);
// ==========================

// // Outro exemplo de função contrutora, mas dessa vez com escrita no prototype FN_2
// function Animal(){}

// Animal.prototype.qtdeDePatas = 0;
// Animal.prototype.movimentar = function() {}

// function Cachorro(morde) {
//   this.qtdeDePatas = 4;
//   this.morde = morde;
// }

// // Aqui o prototype de Cachorro é derivado de Animal, que já recebe como
// // 'herança' a quantidade de patas e a função latir.
// Cachorro.prototype = Object.create(Animal);

// // Além da quantidade de patas e movimentar é criada também a função latir
// Cachorro.prototype.latir = (late) => {
//   console.log(late);
// }

// const pug = new Cachorro(false);
// const pitbull = new Cachorro(true);

// console.log(pug);
// console.log(pitbull);
// =================================

// Mesma implementação da FN_1, mas agora utilizando classe
// 'use strict';

// class Animal {
//   constructor(qtdePatas) {
//     this.qtdePatas = qtdePatas;
//   }
// }

// class Cachorro extends Animal {
//   constructor(morde) {
//     super(4);
//     this.morde = morde;
//   }
// }

// const pug = new Cachorro(false);

// console.log(pug);
// ======================================

// Mesma implementação da FN_2, mas agora utilizando classe
'use strict';

class Animal {
  constructor(qtdPatas) {
    this.qtdPatas = qtdPatas;
  }

  movimentar() {}
}

class Cachorro extends Animal {
  constructor(morde) {
    super();
    this.qtdPatas = 4;
    this.morde = morde;
  }

  latir() {
    console.log("Au!! au!!");
  }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);