let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function orderReceipt(orderItems) {
  const totalList = [];
  for (const item of orderItems) {
    const { itemName, quantity, unitPricePence } = item;

    const total = ((quantity * unitPricePence) / 100).toFixed(2);
    totalList.push(total);
    const itemInfo = console.log(`   ${quantity}    ${itemName}     ${total} `);
  }

  const grandTotal = totalList.reduce((accumulator, current) => {
    const totalCost = Number(accumulator) + Number(current);
    return totalCost;
  }, 0);
  const finalBill = grandTotal.toFixed(2);
  console.log(`Total:${finalBill}`);
}

orderReceipt(order);
