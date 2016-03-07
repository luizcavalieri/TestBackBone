var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red",
  img: "images/redRoses.jpg",
  link: "redRose"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange",
  link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
  name: "Heirloom roses",
  price: 19.95,
  img: "images/heirloomRoses.jpg",
  link: "heirloomRose"
});

var tantalizingTulips = new app.singleFlower({
  name: "Tantalizing Tulips",
  price: 49.95,
  color: 'pink',
  link: "tantalizingTulips"
});

var fleurDeLis = new app.singleFlower({
  name: "Fleur-de-lis",
  price: 69.95,
  color: 'blue',
  link: "fleurDeLis"
});

var flowerGroup = new app.FlowersCollection([
    redRoses, rainbowRoses
]);

var flowerGroupEuropean = new app.EuropeanFlower([
  tantalizingTulips, fleurDeLis
]);


fleurDeLis.set('originCountry', 'Holland');

// this function adds manually an object(instance) to a collection
flowerGroup.add(heirloomRoses);

// this function removes manually an object(instance) from a collection
flowerGroup.remove(redRoses);

console.log(flowerGroup.toJSON());

console.log(flowerGroupEuropean.toJSON());

