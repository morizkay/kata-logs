import { Item, GildedRose } from '../app/gilded-rose';

const items = [
  new Item("+5 Dexterity Vest", 5, 20),
  new Item("Aged Brie", 5, 20),
  new Item("Elixir of1 the Mongoose", 1, 7),
  new Item("Sulfuras, Hand of Ragnaros", 5, 80),
  new Item("Sulfuras, Hand of Ragnaros", 5, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 30),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30),
  // this conjured item does not work properly yet
  new Item("Conjured Mana Cake", 5, 10)
];


const gildedRose = new GildedRose(items);

let days: number = 10;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("Name - Sellin - Quality");
  items.forEach(element => {
    console.log(element.name + ' , ' + element.sellIn + ' , ' + element.quality);

  });
  console.log();
  gildedRose.updateQuality();
}
