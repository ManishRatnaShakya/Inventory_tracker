const express = require('express');
const dotenv = require('dotenv');
const errorMiddleware = require('./middleware/error.middleware')

const { 
    Category,
    Product,
    Sales,
    Purchase,
    Supplier
} = require('./models/index');

dotenv.config();

const app = express();
app.use(express.json());


const categoryRouter = require('./routes/category.routes');
const productRouter = require('./routes/product.routes');
const supplierRouter = require('./routes/supplier.routes');
const purchaseRouter = require('./routes/purchase.routes');
const salesController = require('./routes/sales.routes');

app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/supplier', supplierRouter);
app.use('/api/v1/purchase', purchaseRouter);
app.use('/api/v1/sales', salesController);

//error middle ware 
app.use( errorMiddleware );
app.get('/', (req, res) => {
    res.send('Inventory Tracker API')
});


module.exports =  app;