// scripts/migrate.js
const sequelize = require('../config/database');
const Category = require('../models/Category'); // Import other models too if needed

const migrate = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync models
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
    
    process.exit(); // Exit after syncing
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

migrate();
