const UserModel = require('../models/usersModels');
const bcryptjs = require('bcryptjs');



exports.readUserById = async (req, res, next) => {
    UserModel.findById(req.params.id).then(data => {
        data.__v = undefined;
        res.status(200);
        data = {
            message: 'User read successfully',
            readData: [data]
        }
        res.send(data);
    }).catch(err => {
        res.status(401);
        err = {
            ErrorMessage: 'User not read',
            ErrorLog: err
        }
        res.send(err);
    });
}

exports.readAllUsers = async (req, res, next) => {
    UserModel.find().then(data => {
        res.status(200);
        data.forEach(element => {
            element.__v = undefined;
        });
        data = {
            message: 'Users read successfully',
            UsersList: [data]
        }
        res.send(data);
    }).catch(err => {
        res.status(401);
        err = {
            ErrorMessage: 'Users not read',
            ErrorLog: err
        }
        res.send(err);
    });
}

exports.updateUserById = async (req, res, next) => {
    UserModel.findOneAndReplace(req.params.id, {
        $set: {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
        }
    }).then(data => {
        data.__v = undefined;
        res.status(200);
        data = {
            message: 'User updated successfully',
            updatedData: [data]
        }
        res.send(data);
    }).catch(err => {
        res.status(401);
        err = {
            ErrorMessage: 'User not updated',
            ErrorLog: err
        }
        res.send(err);
    });
}

exports.deleteUser = async (req, res, next) => {
    UserModel.findByIdAndDelete(req.params.id).then(data => {
        data.__v = undefined;
        data = {
            message: 'User deleted successfully',
            deletedData: [data]
        }
        res.status(200);
        res.send(data);
    }).catch(err => {
        res.status(401);
        err = {
            ErrorMessage: 'User not deleted',
            ErrorLog: err
        }
        res.send(err);
    });
}

exports.verifyExistingUserAndCreate = async (req, res, next) => {
    UserModel.findOne({
        username: req.body.username
    }).then(data => {
        if (data) {
            data = {
                message: 'The user already exists',
            }
            res.send(data);
        } else {
            const salt = bcryptjs.genSaltSync(5);
            const passwordHashed = bcryptjs.hashSync(req.body.password, salt);
            const user = new UserModel({
                name: req.body.name,
                username: req.body.username,
                password: passwordHashed,
            });
            user.save().then(data => {
                data.__v = undefined;
                res.status(201);
                data = {
                    message: 'User created successfully',
                    createdData: [data]
                }
                res.send(data);
            }).catch(err => {
                res.status(401);
                err = {
                    ErrorMessage: 'User not created',
                    ErrorLog: err
                }
                res.send(err);
            });
        }
    }).catch(err => {
        res.status(500);
        err = {
            ErrorMessage: 'User not created',
            ErrorLog: err
        }
        res.send(err);
    });

}

exports.verifyLoginAndUpdateAccessDate = async (req, res, next) => {
    await UserModel.findOne({
        username: req.body.username
    }).then(data => {
        if (data) {
            const passwordIsValid = bcryptjs.compareSync(req.body.password, data.password);
            if (passwordIsValid) {
                const date = new Date();
                UserModel.findByIdAndUpdate(data._id, {
                    $set: {
                        lastAccessDateISO8601: date
                    }
                }).then(data => {
                    data.__v = undefined;
                    res.status(200);
                    data = {
                        message: 'Login successful',
                        loginData: [data]
                    }
                    res.send(data);
                }).catch(err => {
                    res.status(401);
                    err = {
                        ErrorMessage: 'Login failed',
                        ErrorLog: err
                    }
                    res.send(err);
                });
            } else {
                res.status(401);
                data = {
                    message: 'Login failed, check your username and password',
                }
                res.send(data);
            }
        } else {
            res.status(401);
            data = {
                message: 'Login failed',
            }
            res.send(data);
        }
    }).catch(err => {
        res.status(500);
        err = {
            ErrorMessage: 'Login failed',
            ErrorLog: err
        }
        res.send(err);
    });
}