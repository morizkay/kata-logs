import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
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

  it('should foo', () => {
    const gildedRose = new GildedRose(items);

    const result = gildedRose.updateQuality();

    console.log(result)

    expect(items[0].name).toBe('fixme');
  });
});
