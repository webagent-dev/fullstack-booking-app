// get all user
const getUser = async (req, res) => {
    try {
        res.status(200).json('we are getting users')
    } catch (err) {
        res.status(500).json(err)
    }
}
// get single user
const getSingleUser = async (req, res) => {
    try {
        res.status(200).json('we are single users')
    } catch (err) {
        res.status(500).json(err)
    }
}
// update user
const updateUser = async (req, res) => {
    try {
        res.status(200).json('we are update users')
    } catch (err) {
        res.status(500).json(err)
    }
}
// delete user

const deleteUser = async (req, res) => {
    try {
        res.status(200).json('we are delete users')
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = { getUser, getSingleUser, updateUser, deleteUser }