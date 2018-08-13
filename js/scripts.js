$(document).ready(function() {

    var suits = ["spades", "hearts", "clubs", "diamonds"]
    var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

    var cards= [];

    cards = suits.forEach(function(suit){
      ranks.forEach(function(rank){
      console.log(rank + "of" + suit);
      });
    });

});
