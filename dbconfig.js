const config ={
    user:'API-Login',
    password:'API12345',
    server:'127.0.0.1',
    database:'PharmacyManagement',
    options:{
        trustedConnection: true,
        enableArithAbort: true,
        instanceName: 'SQLEXPRESS'
    },
    port: 51099
}

module.exports = config;