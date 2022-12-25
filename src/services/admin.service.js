const AdminRepository = require('../repositories/admin.repository')

const getAllUsers = async () => {
    try{
        const response = await AdminRepository.getAllUsers()
        return response
    }
    catch(error){
        return error
    }
}

const updateUser = async (userEmail, userData) => {
    try{
        const response = await AdminRepository.updateUser(userEmail, userData)
        return response
    }
    catch(error){
        return error
    }
}

const changeUserStatus = async (userEmail, userStatus) => {
    try{
        const response = await AdminRepository.changeUserStatus(userEmail, userStatus)
        return response
    }
    catch(error){
        throw error.toString()
    }
}

const deleteUser = async (userEmail) => {
    try{
        const response = await AdminRepository.deleteUser(userEmail)
        return response
    }
    catch(error){
        throw error.toString()
    }
}

const deleteUserPermanent = async (userEmail, userData) => {
    try{
        const response = await AdminRepository.deleteUserPermanent(userEmail, userData)
        return response
    }
    catch(error){
        return error
    }
}

module.exports = { getAllUsers, updateUser, deleteUser, deleteUserPermanent, changeUserStatus }