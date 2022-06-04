const mongoose = require('mongoose')

const connectToDb = (url) => {
    return mongoose.connect(url)
        .then(() => console.log('connected to database'))
    .catch((err) => console.log(err))
}

module.exports = connectToDb