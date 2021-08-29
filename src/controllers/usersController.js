const UserModel = require('../models/usersModels');
const bcryptjs = require('bcryptjs');


// Read User By Id
exports.readUserById = async (req, res, next) => {
    UserModel.findById(req.params.id).then(data => {
        data.__v = undefined;
        res.status(200);
        data = {
            message: 'User read successfully',
            readData: data,
        }
        res.json(data);
    }).catch(err => {
        res.status(401);
        err = {
            ErrorMessage: 'User not read',
            ErrorLog: err
        }
        res.json(err);
    });
}


// Read All Users
exports.readAllUsers = async (req, res, next) => {
    UserModel.find().then(data => {
        res.status(200);
        data.forEach(element => {
            element.__v = undefined;
        });
        data = {
            message: 'Users read successfully',
            UsersList: data
        }
        res.json(data);
    }).catch(err => {
        res.status(401);
        err = {
            ErrorMessage: 'Users not read',
            ErrorLog: err
        }
        res.json(err);
    });
}


// Update User By Id
exports.updateUserById = async (req, res, next) => {
    UserModel.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
        }
    }).then(() => {
        UserModel.findById(req.params.id).then(data => {
            data.__v = undefined;
            res.status(200);
            data = {
                message: 'User updated successfully',
                readData: data
            }
            res.json(data);
        }).catch(err => {
            res.status(401);
            err = {
                ErrorMessage: 'User not read',
                ErrorLog: err
            }
            res.json(err);
        });
    }).catch(err => {
        res.status(401);
        err = {
            ErrorMessage: 'User not updated',
            ErrorLog: err
        }
        res.json(err);
    });
}


// Delete User By Id
exports.deleteUserById = async (req, res, next) => {
    UserModel.findByIdAndDelete(req.params.id).then(data => {
        data.__v = undefined;
        data = {
            message: 'User deleted successfully',
            deletedData: data
        }
        res.status(200);
        res.json(data);
    }).catch(err => {
        res.status(401);
        err = {
            ErrorMessage: 'User not deleted',
            ErrorLog: err
        }
        res.json(err);
    });
}


// Delete All Users
exports.deleteAllUsers = async (req, res, next) => {
    UserModel.deleteMany().then(data => {
        data.__v = undefined;
        data = {
            message: 'All Users deleted successfully',
            deletedData: data
        }
        res.status(200);
        res.json(data);
    }).catch(err => {
        res.status(401);
        err = {
            ErrorMessage: 'All Users not deleted',
            ErrorLog: err
        }
        res.json(err);
    });
}


// Verify if User Exists and Create if not exists
exports.verifyExistsUserAndCreate = async (req, res, next) => {
    UserModel.findOne({
        username: req.body.username
    }).then(data => {
        if (data) {
            data = {
                message: 'The user already exists',
            }
            res.json(data);
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
                    createdData: data
                }
                res.json(data);
            }).catch(err => {
                res.status(401);
                err = {
                    ErrorMessage: 'User not created',
                    ErrorLog: err
                }
                res.json(err);
            });
        }
    }).catch(err => {
        res.status(500);
        err = {
            ErrorMessage: 'User not created',
            ErrorLog: err
        }
        res.json(err);
    });

}


// Verify the Login Exists and Update Last Access Date "lastAccessDateISO8601" if exists
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
                        loginData: data,
                        observation: 'The date of the last access is now has been updated, but the return in the current JSON shows the last access and not the current access, if you make a new attempt it will show the date of the previous attempt.'

                    }
                    res.json(data);
                }).catch(err => {
                    res.status(401);
                    err = {
                        ErrorMessage: 'Login failed',
                        ErrorLog: err
                    }
                    res.json(err);
                });
            } else {
                res.status(401);
                data = {
                    message: 'Login failed, check your username and password',
                }
                res.json(data);
            }
        } else {
            res.status(401);
            data = {
                message: 'Login failed',
            }
            res.json(data);
        }
    }).catch(err => {
        res.status(500);
        err = {
            ErrorMessage: 'Login failed',
            ErrorLog: err
        }
        res.json(err);
    });
}