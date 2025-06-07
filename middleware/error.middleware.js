const errorMiddleware = (err, req, res, next) => {
    try {
        let error = {...err};
        error.message = err.message;
        console.error(err.message);
        if (err.code === 'CastError') {
            const message = 'Resouse not found'
            error = new Error(message);
            error.statusCode = 404;
        }

        if (err.code === 'ValidationError') {
            const message = Object.values(err.errors).map(val => val.message);
            error = new Error(message.join(', '));
            error.statusCode = 400;
        }

        res.status(err.statusCode || 500).json({ success: false, message: error.message || 'Server Error' });
    } catch (error){
        next(error);
    }
};

module.exports = errorMiddleware;