const fs = require ('fs');
const path = require ('path');
const { employeeEntry, managerData, engineerData, internData } = require('./helperUtilities/employeeEntry');
const { createHTML } = require('./helperUtilities/createHTML');

function writeFile (data) {
    fs.writeFile("index.html", data,
    (err) => err ? console.error(err) : console.log('index.html is completed'))
}

async function doIt () {
    await employeeEntry();
    writeFile(createHTML(managerData, engineerData, internData));
}

doIt();
