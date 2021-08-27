exports.environment = {
    server: { port: process.env.PORT || 3000 },
    mongoDB: { devConnection: process.env.DB_URL || 'mongodb+srv://USER_ADMIN:USER_PASSWORD@maincluster.ihlex.mongodb.net/HVEX_DB?retryWrites=true&w=majority' },
    TOKEN_SECRET: 'HVEX_TOKEN_SECRET_AksdkaKASdiewawisda!-0123',
    TOKEN_EXPIRATION: '1d'
}