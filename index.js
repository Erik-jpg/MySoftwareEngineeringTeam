const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const managerData = require('../helperUtilities/managerData');
const engineerData = require('../helperUtilities/engineerData');
const inturnData = require('../helperUtilities/inturnData');
const generateEmployees = require('../helperUtilities/generateEmployees');
const createHTML = require('../helperUtilities/createHTML');



function writingEmployees (fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log('file written');
    }))
}

async function initialize() {
    await generateEmployees();
    writingEmployees(htmlCreator(managerData, engineerData, inturnData));
}

initialize();