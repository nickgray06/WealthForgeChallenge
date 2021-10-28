const faker = require("faker");
const fs = require("fs");

// Define Constants
const MAX_NUM_PARENT_RECORDS = 10;
const MAX_NUM_CHILD_RECORDS = 10;
const data = [];

// Generate Data
for (let orderIdx = 0; orderIdx <= MAX_NUM_PARENT_RECORDS; orderIdx++) {
  const order = {
    order_id: faker.datatype.uuid(),
    customer_id: faker.datatype.uuid(),
    customer_first_name: faker.name.firstName(),
    customer_last_name: faker.name.lastName(),
    customer_address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
    },
    // TODO: make values and quantities of items match the correct total value of the order, currently all numbers are random
    order_amount: faker.finance.amount(),
    order_date: faker.datatype.datetime(),
    order_items: [],
  };

  // Generate a random number of items in the order
  const randomNumberChildRecords = Math.floor(
    Math.random() * Math.floor(MAX_NUM_CHILD_RECORDS)
  );

  for (let itemIdx = 0; itemIdx <= randomNumberChildRecords; itemIdx++) {
    const orderItem = {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      quantity: faker.datatype.number(),
    };
    order.order_items.push(orderItem);
  }

  data.push(order);
}

fs.writeFile("data.json", JSON.stringify(data), () => {
  console.log("Data generation complete");
});
