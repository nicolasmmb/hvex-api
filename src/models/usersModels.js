const mongoose = require('mongoose');

// Campos no Schema: identificador, nome, nome de usuário, senha e data do último acesso

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 64
    },
    lastAccessDateISO8601: {
        type: Date,
        default: null
    },

});

const UserModel = mongoose.model('USERS_DATAS', userSchema);

module.exports = UserModel;