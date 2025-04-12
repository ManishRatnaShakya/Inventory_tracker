
require('dotenv').config();
const sequelize = require('./config/database');
const app = require('./app');
const cors = require('cors');
app.use(cors()); 


const PORT = process.env.PORT || 5001

sequelize.sync({
    force: false
}).then(() => {
    console.log('Database Synced');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}).catch((err) => {
    console.log('DB connection failed', err);
})

