// get all user
const  user = require('../model/user.model')
const getUser = async (req, res) => {
    const query = req.query.new
    if (req.user.isAdmin) {
            try {
                const allUser = query ? await user.find().limit(10) : await user.find()
                res.status(200).json(allUser)
    } catch (err) {
        res.status(500).json(err)
    }
    } else {
        res.status(403).json('you are not allow to access this data')
    }
}
// get single user
const getSingleUser = async (req, res) => {
    if (req.user.id || req.user.isAdmin) {
        try {
            const user = await user.findById(req.params.id)
            const { password, ...other} = user
        res.status(200).json(other)
    } catch (err) {
        res.status(500).json(err)
    }
    } else {
        res.status(403).json('you can not access this data')
   }
}
// update user
const updateUser = async (req, res) => {
    if (req.user.id || req.user.isAdmin) {
        try {
            const updateUser = await user.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                { new: true, runValidators: true }
            )
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(500).json(err)
    }
    } else {
        res.status(403).json('you are not allow to access this data')
    }
}
// delete user

const deleteUser = async (req, res) => {
    if (req.user.id || req.user.isAdmin) {
        try {
                    await user.findByIdAndDelete(req.params.id)
        res.status(200).json('user has been deleted')
    } catch (err) {
        res.status(500).json(err)
    }
    } else {
        res.status(403).json('you are not allow to access this data')
        }
}
 
//  get user stat
const getUserStat = async (req, res) => {
    const toDay = new Date()
    const lastYear = toDay.setFullYear(toDay.setFullYear() - 1)
    const monthArray = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    if (req.user.isAdmin) {
        try {
            const userStat = await user.aggregate([
        {
            $project: {
                month:{"$month": "$createdAt"}
            },
            $group: {
                _id: '$month',
                total: {$sum: 1}
            }
        }
            ])
     res.status(200).json(userStat)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}
module.exports = { getUser, getSingleUser, updateUser, deleteUser, getUserStat }