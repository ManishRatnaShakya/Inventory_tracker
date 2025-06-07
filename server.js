
require('dotenv').config();
const sequelize = require('./config/database');
const app = require('./app');


const PORT = process.env.PORT || 5001

sequelize.sync({
    force: false,
    alter: true
}).then(() => {
    console.log('Database Synced');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}).catch((err) => {
    console.log('DB connection failed', err);
})

