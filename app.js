const express = require('express');
const dotenv = require('dotenv');
const errorMiddleware = require('./middleware/error.middleware')

const { 
    Category,
    Product,
    Sales,
    Purchase,
    Supplier,
    User
} = require('./models/index');

dotenv.config();

const app = express();
app.use(express.json());

//controllers
const authRouter = require('./routes/auth.routes');
const categoryRouter = require('./routes/category.routes');
const productRouter = require('./routes/product.routes');
const supplierRouter = require('./routes/supplier.routes');
const purchaseRouter = require('./routes/purchase.routes');
const salesController = require('./routes/sales.routes');
const transactionController = require('./routes/transaction.routes')


//routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/supplier', supplierRouter);
app.use('/api/v1/purchase', purchaseRouter);
app.use('/api/v1/sales', salesController);
app.use('/api/v1/transactions', transactionController);

//error middle ware 
app.use( errorMiddleware );

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerOptions');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
    res.send('Inventory Tracker API')
});


module.exports =  app;