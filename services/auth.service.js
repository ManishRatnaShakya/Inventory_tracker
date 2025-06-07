const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

exports.register = async({name, email, password, role}) => {
    const existing  = await User.findOne({where: { email }});
    if(existing) throw new Error('Email already in use')

    const hashed = await bcrypt.hash(password, 10);
    return await User.create({name, email, password: hashed, role})

}

exports.login = async({email, password}) => {
    const user = await User.findOne({where: {email}});

    if(!user) throw new Error('User not found');

    const match = await bcrypt.compare(password, user.password);
    if(!match) throw new Error('Invalid Credentials')

    const token = jwt.sign(
        {id: user.id, email: user.email, role: user.role},
        JWT_SECRET,
        {expiresIn: '2h'}
    )
    return { token, user: {id: user.id,  name: user.name, role: user.role }}
}

