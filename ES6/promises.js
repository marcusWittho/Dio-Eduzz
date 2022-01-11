const firstPromise = () =>  new Promise((resolve, _reject) => {
  // throw new Error("Something wrong");
  setTimeout(() => {
    resolve("First Promise");
  }, 1500);
})

const secondPromise = () => new Promise((resolve, _reject) => {
  // throw new Error("Something wrong");
  setTimeout(() => {
    resolve("Second Promise");
  }, 1000);
})

// Promises executadas de forma sequencial
firstPromise()
  .then(data => {
    console.log("Execução sequencial", data.split(''));
    return secondPromise();
  })
  .then(data2 => console.log("Execução sequencial", data2.split('')))
  .catch(error => console.log("Deu ruim", error))

// Promises executadas em paralelo, retorna os resultados
// após todas as promises serem resolvidas
Promise.all([firstPromise(), secondPromise()])
  .then((data) => {
    console.log("Promise all", data[0].split(''))
    console.log("Promise all", data[1].split(''))
  })
  .catch(error => console.log("Deu ruim", error))

// Retorna o resultado da promise que for resolvida primeiro
Promise.race([firstPromise(), secondPromise()])
  .then((data) => console.log("Promise race", data.split('')))
  .catch(error => console.log("Deu ruim", error))