/********************************************************************************************************************
* @Execution : default node : cmd> cards.js
*
* @Purpose :Print cards received by 4 players
*
* @description : Program to initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades") & 
Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"). 
Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and Print the Cards the received by the 4 Players using 2D Array… 
* 
* @overview :Deck of Cards
* @author : Abhilash <aabhilash765@gmail.com>
* @version : 1.0
* @since : 29-July-2019
*
*******************************************************************************************************************/
try {
    let dec = require('./cardsUtility');
    let arr1 = ["Clubs", "Diamonds", "Hearts", "Spades"];
    let arr2 = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    let arr3 = [];
    arr1.forEach(ele => {
    arr2.forEach(e => {
    arr3.push(e + " of " + ele);
    })
    
    })
    arr3 = dec.shuffler(arr3);
    let res = dec.distributeToPlayersQ(arr3, 36);
    dec.display(res[0], "Player1");
    dec.display(res[1], "P layer2");
    dec.display(res[2], "Player3");
    dec.display(res[3], "Player4");
    
    } catch (e) {
    console.log(e);
    }