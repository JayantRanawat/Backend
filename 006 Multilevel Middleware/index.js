const express = require('express');

const app = express();

const router1 = express.Router();
const router2 = express.Router();

const middle_ware = (req, res, next) => {
    console.log('middle_ware called');
    next();
}

const m1 = (req, res, next) => {
    console.log('m1 called');
    next();
}

const m2 = (req, res, next) => {
    console.log('m2 called');
    next();
}

app.use(middle_ware);
router1.use(m1);
router2.use(m2);

router1.get('/r1', (req, res) => {
    res.send('Hello from route 1');
})

router1.get('/r2', (req, res) => {
    res.send('Hello from route 2');
})

router2.get('/r3', (req, res) => {
    res.send('Hello from route 3');
})

router2.get('/r4', (req, res) => {
    res.send('Hello from route 4');
});

router2.get('/r5', (req, res) => {
    res.send('Hello from route 5');
});


app.use(router1);
app.use(router2);


app.listen(5200, () => {
    console.log('Server is running on Port 5200');
})