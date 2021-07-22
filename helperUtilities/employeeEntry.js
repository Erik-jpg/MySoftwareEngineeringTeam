const inquirer = require('inquirer');
const {htmlGenerator} = require('./htmlGenerator');

let manager = [];
let engineer = [];
let intern = [];

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

class manager extends Employee {
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

class intern extends Employee {
    constructor (name, email, id, role, school){
        super(name, email, id, role);
        this.school = school;
    }
    getRole() { return this.role; }
    getSchool() { return this.school; }
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
        message: "Where did this Intern graduate?",
        type: 'input'}
    ])
}

async function employeeEntry() {
    let employeeInput = await inputForEmployee();
    let employee = new employee(employeeInput.name, employeeInput.email, employeeInput.id, 'employee')
    if(employeeInput.role === 'manager'){
        let 
    }
}