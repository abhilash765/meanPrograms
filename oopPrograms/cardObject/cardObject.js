/********************************************************************************************************************
* @Execution : default node : cmd> cardObject.js
*
* @Purpose :Print the Player and the Cards received by each Player.
*
* @description : program to create a Player Object having Deck of Cards, and having ability to Sort by Rank and maintain the cards in a
    Queue implemented using Linked List. 
    *Further the Player are also arranged in Queue.  
* @overview :Deck of Cards
* @author : Abhilash <aabhilash765@gmail.com>
* @version : 1.0
* @since : 30-July-2019
*
*******************************************************************************************************************/
try {
    let deck = require('./objectUtility');
    let suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
    let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    let store = [];
    suit.forEach(ele => {
    rank.forEach(e => {
    store.push(e + " of " + ele);
    })
    
    })
    store = deck.shuffler(store);
    let res = deck.distributeQ(store, 36);
    deck.display(res[0], "Player1");
    deck.display(res[1], "Player2");
    deck.display(res[2], "Player3");
    deck.display(res[3], "Player4");
    
    } catch (e) {
    console.log(e);
    }