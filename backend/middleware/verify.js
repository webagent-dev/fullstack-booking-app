const jwt = require('jsonwebtoken')


const verify = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        jwt.sign(token, process.env.SECRET_KEY, (err, user) => {
            if (err) res.status(401).json('invalid access token')
            req.user = user
            next()
        })
    } else {
        res.status(403).json('you are not allow here')
    }
}


module.exports = verify