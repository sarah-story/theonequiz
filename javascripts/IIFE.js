var FruitMaker = (function() {
  var privateArray = ["apples", "bananas", "cherries", "huckleberries"];

  return {
    getFruits: function() {
      return privateArray;
    },
    addFruit: function(fruit) {
      privateArray.push(fruit);
    }
  }
})();