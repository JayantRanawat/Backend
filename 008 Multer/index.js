const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();



const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        cb(null, Date.now() + Math.floor(Math.random() * 999999) + ext);
    }
});

const upload = multer({ storage: diskStorage }).single('thumbnail');

app.post('/upload-file', upload, (req, res) => {
    console.log(req.body);  //console data send of json
    console.log(req.file);
    res.send('hello');
})

app.listen(5200, () => {
    console.log('Server is running on port 5200')
})