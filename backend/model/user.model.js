const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    isAdmin:{type:Boolean, default: false}
},{timestamps:true})

//  hash password
userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    return this.password = await bcrypt.hash(this.password, salt)
})
//  create access token
userSchema.methods.createToken = function () {
    return jwt.sign({ id: this._id, admin: this.isAdmin },
        process.env.SECRET_KEY,
        {expiresIn: process.env.LOST}
    )
}
//  decrypt bcrypt password
userSchema.methods.getPassCode = async function (code) {
    const isMatch = await bcrypt.compare(code, this.password)
    return isMatch
}
const user = mongoose.model('userModel', userSchema)
module.exports = user