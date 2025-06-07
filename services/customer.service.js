const { Customer } = require('../models');

exports.createCustomer = async(data) => {
    return await Customer.create(data);
};
exports.getAllCustomers = async () => {
    return await Customer.findAll();
  };

exports.getCustomerById = async (id) => {
    return await Customer.findByPk(id)
}

exports.updateCusomer = async (id, data) => {
    const customer = await Customer.findByPk(id);
    if (!customer) throw new Error('Customers not found');
    return await customer.update(data);
}

exports.deleteCustomer = async (id) => {
    const customer = await Customer.findByPk(id);
    if (!customer) throw new Error('Customers not found');
    return await customer.destroy()
}