const { sequelize } = require('../models'); // This will now import from models/index.js

const migrate = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ DB connected.');

    await sequelize.sync({ alter: true }); // or { force: true } for full reset
    console.log('✅ All models were synced.');

    process.exit();
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
};

migrate();
