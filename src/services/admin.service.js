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

module.exports = { getAllUsers, updateUser }