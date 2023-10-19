const items: any[] = [];

for (let i = 1; i <= 20; i++) {
  items.push({
    image: `https://source.unsplash.com/random/400x250?sig=${i}`,
    name: `Item Name ${i}`,
    description: `Item Description ${i}`,
    price: Number((Math.random() * 100).toFixed(2)),
    currency: "$",
    id: i,
  });
}

export default items;
