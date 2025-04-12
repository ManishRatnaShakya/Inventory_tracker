const {Transaction, Product} = require('../models')

exports.create = async (req, res) => {
    try {
        const {productId, type, quantity} = req.body;
        const userId = req.user.id;

        const product = await Product.findByPk(productId);

    
        if(!product) return res.status(404).json({
            message: 'Product not found'
        });


        if(type === 'sale') {
            if(product.stock < quantity) {
                return res.status(400).json({
                    message: "Not enough stocks"
                });
            }
            product.stock -= quantity;
        } else{
            product.stock += quantity;
        }

        await product.save();

        const transaction = await Transaction.create({
            type,
            quantity,
            productId,
            userId
        });

        res.status(201).json(transaction);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}