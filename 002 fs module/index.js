const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public');

console.log(filePath);


// Create File
fs.writeFileSync(`${filePath}/index.html` , 'Hello');


// Read File
fs.readFile(`${filePath}/index.html`, 'utf-8' , (error,content) =>{
    if(error)return console.log(error);

    console.log(content)
});


// Update file 
fs.appendFile(`${filePath}/index.html`, '<p> Lorem ipsum</p>', (error, sucess) =>{
    if(error)return console.log(error);

    console.log('file updated')
})


// Delete file
// fs.unlinkSync(`${filePath}/index.html`)

