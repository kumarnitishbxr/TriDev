const express = require('express')
const authRouter = express.Router()
const {Register, Logout, Login, RegisterAdmin, DeleteUser, UpdateUserInfo, Check} = require('../Controller/AuthFunctions')
const authenticateUser = require('../Middleware/authenticateUser')
const authenticateAdmin = require('../Middleware/authenticateAdmin')



authRouter.post('/register', Register)
authRouter.post('/login', Login)
authRouter.post('/logout', authenticateUser, Logout)
authRouter.post('/admin/register', authenticateAdmin, RegisterAdmin)
authRouter.delete('/delete', authenticateUser, DeleteUser)
authRouter.patch('/update', authenticateUser, UpdateUserInfo)
authRouter.post('/check', authenticateUser, Check)


module.exports = authRouter