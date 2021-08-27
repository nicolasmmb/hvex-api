exports.environment = {
    server: { port: process.env.PORT || 3000 },
    mongoDB: { devConnection: process.env.DB_URL || 'mongodb://root:root@localhost:27017/HVEX?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false' },
    TOKEN_SECRET: 'HVEX_TOKEN_SECRET',
}