var FruitMaker = (function(fruitMaker) {
  fruitMaker.slices = function(name, number) {
    var fruitSlices=[];
    for (var i=0; i<number; i++) {
      fruitSlices.push(name);
    }
    return fruitSlices;
  };
})(FruitMaker);