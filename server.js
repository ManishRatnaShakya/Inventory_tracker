const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

const { Category,
    Product,
    Sales,
    Purchase,
    Supplier
} = require('./models/index')
dotenv.config();

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Inventory Tracker API')
});

sequelize.sync({
    force: true
}).then(() => {
    console.log('Database Synced');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}).catch((err) => {
    console.log('DB connection failed', err);
})

