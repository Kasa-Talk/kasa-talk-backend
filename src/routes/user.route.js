const express = require('express');
const {
  setUser,
  setActivateUser,
  getAllUser,
  setLogin,
  getUserById,
  setRefreshToken,
  updateUser,
  forgotPassword,
} = require('../controllers/user.controller');
const { autenticate } = require('../controllers/auth-Error.controller');

const userRouter = express.Router();

userRouter.post('/register', setUser);

userRouter.get('/users/activate/:id', setActivateUser);

userRouter.get('/admin/users', getAllUser); // admin only

userRouter.get('/users', autenticate, getUserById);

userRouter.post('/login', setLogin);

userRouter.get('/users/refresh', setRefreshToken);

userRouter.post('/admin/login', setLogin); // admin only

userRouter.get('/admin/refresh', setRefreshToken); // admin only

userRouter.patch('/users', autenticate, updateUser);

userRouter.post('/users/forgot-password', forgotPassword);

module.exports = userRouter;
