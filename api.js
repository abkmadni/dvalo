const dboperations = require('./dboperations');
var Db = require('./dboperations');
var Student = require('./Std');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request, response, next) => {
    console.log('middleware');
    next();
})

router.route('/Std').get((request, response) => {
    dboperations.getStd().then(result => {
        response.json(result[0]);
    })
})

router.route('/Std/:id').get((request, response) => {
    dboperations.getStud(request.params.id).then(result => {
        response.json(result[0]);
    })
})

router.route('/Std').post((request, response) => {
    let student = { ...request.body }
    dboperations.addStd(student).then(result => {
        response.status(201).json(result);
    })
})

router.route('/StdUpdate').post((request, response) => {
    let student = { ...request.body }
    dboperations.updateStd(student).then(result => {
        response.status(201).json(result);
    })
})

router.route('/delStd/:id').post((request, response) => {
    let student = { ...request.body }
    dboperations.delStd(request.params.id).then(result => {
        response.status(201).json(result);
    })
})

router.route('/MaxStdID').get((request, response) => {
    dboperations.getMaxStdID().then(result => {
        response.json(result[0]);
    })
})

router.route('/login').post((request, response) => {
    let user = { ...request.body }
    dboperations.login(user).then(result => {
        response.json(result[0][0]);
    })
})

router.route('/User').post((request, response) => {
    let user = { ...request.body }
    dboperations.addUser(user).then(result => {
        response.status(201).json(result);
    })
})

router.route('/User/:id').get((request, response) => {
    dboperations.getUser(request.params.id).then(result => {
        response.json(result[0]);
    })
})

router.route('/UserPass/:id').get((request, response) => {
    dboperations.getUserPass(request.params.id).then(result => {
        response.json(result[0][0]);
    })
})

router.route('/UpdateUser').post((request, response) => {
    let user = { ...request.body }
    dboperations.updateUser(user).then(result => {
        response.status(201).json(result);
    })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('API is runnning at ' + port);

