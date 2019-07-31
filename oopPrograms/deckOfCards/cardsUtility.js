
let distributeToPlayers = (array, num) => {
  try {
      let persn1 = [];
      let persn2 = [];
      let persn3 = [];
      let persn4 = [];
      let index = 0;
      while (index < num) {
          persn1.push(array[index]);
          index += 1;
          persn2.push(array[index]);
          index += 1;

          persn3.push(array[index]);
          index += 1;

          persn4.push(array[index]);
          index += 1;
      }
      return [persn1, persn2, , ];
  } catch (e) {
      console.log(e);
  }
}

let distributeToPlayersQ = (array, num, nPlayers, cardNum) => {
  try {
  let index = 0;
  let player = [];
  while (index < nPlayers) {
  player[index] = new q();
  index += 1;
  }
  index = 0;
  let j = 0;
  while (j < num) {
  player[index].enQueue(array[j]);
  index += 1;
  j += 1;
  if (index >= nPlayers)
  index = 0;
  
  }
  index = 0;
  
  while (index < nPlayers) {
  player[index].sort(cardNum);
  index += 1;
  }
  index = 0;
  while (index < nPlayers) {
  console.log("player ", index + 1);
  player[index].display();
  index += 1;
  }
  } catch (e) {
  console.log(e);
  }
}
  let display = (arr, str) => {
  try {
  console.log(str, "Having card\num");
  console.log(arr);
  } catch (e) {
  console.log(e);
  }
  }
  module.exports = {
  display,
  shuffler,
  distributeToPlayers,
  distributeToPlayersQ
  };