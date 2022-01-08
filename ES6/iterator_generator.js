// ======== Iterators ========

const uniqueId = Symbol("Hello");
const uniqueId2 = Symbol("Hello");

// console.log(uniqueId === uniqueId2);  // false

// =============================

const obj1 = {
  [uniqueId]: "Hello"
}

// console.log(Object.keys(obj1));  // []
// console.log(Object.getOwnPropertySymbols(obj1));  // [ Symbol(Hello)

// =============================

// Well known symbols
Symbol.iterator;

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

while (true) {
  let { value, done } = it.next();

  if (done) {
    break;
  }

  // console.log('While:', value);  // 1 2 3 4
}

// =============================

// Mesmo conmportamento do laço while acima
for (let value of arr) {
  // console.log('For of:', value);
}

// =============================

// Tornar um objeto iterável
const obj2 = {
  values: [5, 6, 7, 8],
  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        index += 1;

        return {
          value: this.values[index - 1],
          done: index > this.values.length
        };
      }
    };
  }
};

const it2 = obj2[Symbol.iterator]();
// console.log('Object iteration:', it2.next());
// console.log('Object iteration:', it2.next());
// console.log('Object iteration:', it2.next());
// console.log('Object iteration:', it2.next());
// console.log('Object iteration:', it2.next());

// =============================

// ========= Generators =========

function* hello() {
  console.log('Hello');
  yield 1;

  console.log('from');
  const value = yield 2;

  console.log(value);
}

const itGenerator = hello();

// console.log(itGenerator.next());
// console.log(itGenerator.next());
// console.log(itGenerator.next('function'));

// =============================

// Tornando objetos iteráveis com Symbol, Iterator e generator
const obj3 = {
  values: [5, 6, 7, 8],

  // O asterisco transforma em generator
  *[Symbol.iterator]() {
    for (let i = 0; i < this.values.length; i += 1) {
      yield this.values[i];
    }
  }
};

for (let value of obj3) {
  console.log(value);
}
