const inquirer = require('inquirer');
const {htmlGenerator} = require('./htmlCreator');

let managerData = [];
let engineerData = [];
let internData = [];

class Employee{
    constructor(name, email, id, role) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    }
    getName() { return this.name; }
    getEmail() { return this.email; }
    getId() { return this.id; }
    getRole() { return this.role; }
}

class Manager extends Employee {
    constructor(name, email, id, role, officeNumber) {
        super(name, email, id, role);
        this.officeNumber = officeNumber;
    }
    getRole() { return this.role; }
    getOfficeNumber() { return this.officeNumber; }
}

class Engineer extends Employee {
    constructor (name, email, id, role, github){
        super(name, email, id, role);
        this.github = github;
    }
    getRole() { return this.role; }
    getgithub() { return this.github; }
}

class Intern extends Employee {
    constructor (name, email, id, role, school){
        super(name, email, id, role);
        this.school = school;
    }
    getRole() { return this.role; }
    getSchool() { return this.school; }
}

function nextStep() {
    return inquirer.prompt([
        {name: 'buildRoster',
         message: 'Would you like to add an engineer, inturn or end application?',
        type: 'list',
    choices: ["add engineer", "add inturn", "end application"]},
    ])
}


function inputForEmployee () {
    return inquirer.prompt([
        {name: 'role',
         message: 'What role will this employee have?',
        type: 'list',
        choices: ['Manager', 'Engineer', 'Intern']},
        {name: 'name',
        message: "What is this employee's name?",
        type: 'input'},
        {name: 'email',
        message: "What is this employee's email?",
        type: 'input'},
        {name: 'id',
        message: "What is this employee's id number?",
        type: 'input'}
    ])
}

function managerInput () {
    return inquirer.prompt([
        {name: 'officeNumber',
        message: "what is the office number of this employee?",
        type: 'input'}
    ])
}

function engineerInput () {
    return inquirer.prompt([
        {name: 'github userName',
        message: "What is this employee's github user name?",
        type: 'input'}
    ])
}

function internInput () {
    return inquirer.prompt([
        {name: 'school',
        message: "Where school did this Intern graduate from?",
        type: 'input'}
    ])
}

async function employeeEntry() {
    let employeeInput = await inputForEmployee();
    let employee = new employee(employeeInput.name, employeeInput.email, employeeInput.id, 'Employee')
    
    if(employeeInput.role === 'Manager'){
        let managerSubmission = await managerInput();
        let manager = new manager(employeeInput.name, employeeInput.email, employeeInput.id, employeeInput.role, managerSubmission.officeNumber);
        manager.push(manager);
    }
    else if(employeeInput.role === 'Engineer'){
        let engineSubmission = await engineerInput();
        let engineer = new engineer(employeeInput.name, employeeInput.email, employeeInput.id, employeeInput.role, engineSubmission.github);
        engineer.push(engineer);
    }
    else if(employeeInput.role === 'Intern'){
        let internSubmission = await internInput();
        let intern = new intern(employeeInput.name, employeeInput.email, employeeInput.id, employeeInput.role, internSubmission.school);
        intern.push(intern);
    }

    let teamInput = await nextStep();
    if(teamInput.nextStep === 'add engineer'){
        await engineInput();
    }
    else if(teamInput.nextStep === 'add intern'){
        await internInput();
    }
    else {
        htmlCreator (managerData, engineerData, internData);
    }
}

module.exports ={
    employeeEntry,
    inputForEmployee,
    managerInput,
    engineerInput,
    internInput,
    managerData,
    engineerData,
    internData

}

