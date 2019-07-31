/*Utility class for  creating a Player Object having Deck of Cards, and having ability to Sort by Rank and maintain the cards in a 
Queue implemented using Linked List. Further the Player are also arranged in Queue.
Finally Print the Player and the Cards received by each Player */
let distribute = (array, number) => {
  try {
    let P1 = [];
    let P2 = [];
    let P3 = [];
    let P4 = [];
    let index = 0;
    while (index < number) {
      P1.push(array[index]);
      index += 1;
      P2.push(array[index]);
      index += 1;

      P3.push(array[index]);
      index += 1;

      P4.push(array[index]);
      index += 1;

    }
    return [P1, P2, P3, P4];
  } catch (e) {
    console.log(e);
  }
}
/* Function to maintain the cards in a Queue implemented using Linked List*/
let distributeQ = (array, number, nPlayers, card_number) => {
  try {
    let index = 0;
    let player = [];
    while (index < nPlayers) {
      player[index] = new q();
      index += 1;
    }
    index = 0;
    let j = 0;
    while (j < number) {
      player[index].enQueue(array[j]);
      index += 1;
      j += 1;
      if (index >= nPlayers)
        index = 0;

    }
    index = 0;

    while (index < nPlayers) {
      player[index].sort(card_number);
      index += 1;
    }
    index = 0;
    while (index < nPlayers) {
      console.log(" ", index + 1);
      player[index].showCard();
      index += 1;
    }
  } catch (e) {
    console.log(e);
  }
}
let shuffler = (array) => {
  try {
    // Sorting  by Rank
    array.sort(() => Math.random() - 0.5);
    return array;
  } catch (e) {
    console.log(e);
  }
}
// function for displaying alll
let showCard = (array, str) => {
  try {
    console.log(str, "HAVE :");
    console.log(array);
  } catch (e) {
    console.log(e);
  }
}
// Exporting modules for future use
module.exports = {
  showCard,
  shuffler,
  distribute,
  distributeQ
};