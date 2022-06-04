 const user = require('../model/user.model')
// register user
const register = async (req, res) => {
    try {
        const newUser = await user.create(req.body)
        res.status(201).json(newUser)
    } catch (err) {
        res.status(500).json(err)
    }
}
// login user
const login = async (req, res) => {
    try {
        const User = await user.findOne({ email: req.body.email })
        !User && res.status(401).json('invalid email and password')
        const passCode = await User.getPassCode(req.body.password)
        !passCode && res.status(401).json('invalid email and password')
        const { password, ...other } = User._doc
        const accessToken = User.createToken()
        res.status(200).json({...other, accessToken})
    } catch (err) {
        res.status(500).json(err.message)
    }
}

module.exports ={ register,login}