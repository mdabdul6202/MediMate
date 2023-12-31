import User from '../models/UserSchema.js'

//All CRUD Operations For USERS
export const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {$set: req.body}, {new: true})

        res.status(200).json({success: true, message: 'Successfully Updated', data: updatedUser})
    } catch (error) {
        res.status(500).json({success: false, message: 'Failed to Update'})
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id)

        res.status(200).json({success: true, message: 'Successfully Deleted'})
    } catch (error) {
        res.status(500).json({success: false, message: 'Failed to Delete'})
    }
}

export const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id).select("-password")

        res.status(200).json({success: true, message: 'User Found', data: user})
    } catch (error) {
        res.status(404).json({success: false, message: 'No User Found'})
    }
}

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}).select("-password")

        res.status(200).json({success: true, message: 'Users Found', data: users})
    } catch (error) {
        res.status(404).json({success: false, message: 'No Users Found'})
    }
}