const sequelize = require('../config/database');
const Product = require('../models/Product');
const Category = require('../models/Category');
const PurchaseItems = require('../models/PurchaseItems');
const { faker } = require('@faker-js/faker');

const categories = ['Grocery', 'Bakery', 'Meat', 'Produce'];
const productNames = ['Rice', 'Bread', 'Chicken', 'Lettuce', 'Salt', 'Sugar', 'Flour', 'Oil', 'Milk', 'Eggs', 'Cheese', 'Pasta'];

async function seedDummyData() {
  try {
    await sequelize.sync({ alter: true });

    console.log('Inserting dummy categories...');
    const categoryRecords = {};
    for (let category of categories) {
      const cat = await Category.create({ name: category, description: faker.lorem.sentence() });
      categoryRecords[category] = cat.id;
    }

    const productRecords = [];
    for (let name of productNames) {
      const category = categories[Math.floor(Math.random() * categories.length)];
      const product = await Product.create({
        name,
        categoryId: categoryRecords[category],
        price: faker.number.float({ min: 1, max: 50, precision: 0.01 }),
      });
      productRecords.push(product);
    }

    for (let i = 0; i < 100; i++) {
      const product = productRecords[Math.floor(Math.random() * productRecords.length)];
      const quantity = faker.number.int({ min: 1, max: 100 });
      const totalAmount = quantity * product.price;

      await PurchaseItems.create({
        productId: product.id,
        purchaseId: 1, // Assuming a dummy purchaseId (create Purchase record if needed)
        total_amount: totalAmount,
        purchase_date: faker.date.between({ from: '2024-01-01', to: '2025-04-01' }),
      });
    }

    process.exit();
  } catch (err) {
    console.error('❌ Error inserting dummy data:', err);
    process.exit(1);
  }
}

seedDummyData();
