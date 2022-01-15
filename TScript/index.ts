function sum(a: number, b: number) {
  return a + b;
};

sum(2, 3 );  // Caso o tipo do parâmetro seja diferente de number o TS mostrará um erro
//=======================

// Interfaces e Types
interface IAnimal {
  nome: string,
  tipo: 'terrestre' | 'aquiático',
  executarRugido(alturaEmDecibeis: number): void,
};

interface IFelino extends IAnimal {
  visaoNoturna: boolean,
};

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande',
};

type IDomestico = ICanino | IFelino;

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  executarRugido: (alturaEmDecibeis) => { `${alturaEmDecibeis}dB` },
};

const felino: IFelino = {
  nome: 'Leão',
  tipo: 'terrestre',
  visaoNoturna: true,
  executarRugido: (alturaEmDecibeis) => { `${alturaEmDecibeis}dB` },
};

// animal2 utilizou o Type
const animal2: IDomestico = {
  nome: 'cachorro',
  tipo: 'terrestre',
  executarRugido: (alturaEmDecibeis) => { `${alturaEmDecibeis}dB` },
  porte: "pequeno",
};
//=======================

// Interação com a tag html input
const input = document.querySelector('#input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement;

  console.log(i.value);
});
//=======================

// Generic Types
// <T> - indica que não sabemos os tipos que serão recebidos nos parâmetros
// array: T[] - informa que o primeiro parâmetro receberá uma array contendo qualquer tipo
// item: T - informa que o segundo parâmetro também não tem um tipo definido
function appendList<T>(array: T[], item: T) {
  return array.map(() => item);
};

appendList([1, 2, 3], 4);
//=======================

// Condicionais a partir de parâmetros
interface IUser {
  name: string,
  email: string,
}

interface IAdmin extends IUser {
  role: 'genrente' | 'supervisor' | 'coordernador',
}

function redirect(user: IUser | IAdmin) {
  if('role' in user) {
    console.log('Área do admin');
  } else {
    console.log('Área do usuário comum');
  }
};

const user1: IUser = {
  name: 'Marcus',
  email: 'marcus@email.com',
}

const user2: IAdmin = {
  name: 'Marcus2',
  email: 'marcus2@email.com',
  role: 'coordernador',
}

// redirect(user1);  // Área do usuário comum
// redirect(user2);  // área do admin
//=======================

// Condicionais a partir de parâmetros
interface IUser {
  name: string,
  email: string,
  // adicionar o símbolo '?' torna o item
  role?: 'genrente' | 'supervisor' | 'coordernador' | 'funcionario',
}

function redirect2(user: IUser) {
  if(user.role) {
    console.log('Área do admin');
  } else {
    console.log('Área comum');
  }
}

const user3: IUser = {
  name: 'Marcus3',
  email: 'marcus3@email.com',
}

const user4: IUser = {
  name: 'Marcus4',
  email: 'marcus4@email.com',
  role: 'coordernador',
}

// redirect2(user3);  // Área comum
// redirect2(user4);  // Área do admin
//=======================

// Variáveis com propriedade readonly
interface ICachorro {
  nome: string,
  idade: number,
  parqueFavorito?: string,
}

type readOnlyICachorro = {
  // Itera sobre os itens da interface ICachorro tornando cada um em somente leitura,
  // o sinal '-?' torna o item que antes era opcional em obrigatório
  +readonly [k in keyof ICachorro]-?: ICachorro[k];
}

class NovoCachorro implements readOnlyICachorro {
  nome: string;
  idade: number;
  parqueFavorito: string;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}
