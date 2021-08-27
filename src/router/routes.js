const usersController = require('../controllers/usersController');
const express = require('express');
const route = express.Router();


// Rotas Referentes ao Usuário //
route.post('/user/verify-login', usersController.verifyLoginAndUpdateAccessDate);
route.post('/user/create', usersController.verifyExistsUserAndCreate);
route.get('/user/read-all', usersController.readAllUsers);
route.get('/user/read/:id', usersController.readUserById);
route.patch('/user/update/:id', usersController.updateUserById);
route.delete('/user/delete/:id', usersController.deleteUserById);
route.delete('/user/delete-all', usersController.deleteAllUsers);
// Fim das Rotas Referentes ao Usuário //



//Exports Routes
module.exports = route;
//Exports Routes Fim