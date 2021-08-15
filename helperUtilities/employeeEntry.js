const inquirer = require('inquirer');
const node = require('node');
const fs = require('fs');
const path = require('path');

const managerData = [];
const engineerData = [];
const internData = [];

class Team {
    constructor(){
        manager = [];
        engineers = [];
        interns = [];
    };
    promptForManager(){

    }
}
class Employee {
    constructor(name, id, email, role) {
        this.name= name;
        this.id= id;
        this.email= email;
        this.role= role;
    }
getName() { return `${this.name}`}
getId() { return `${this.id}`}
getEmail() { return `${this.email}`}
getRole() { return `${this.role}`}
}

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() { return `${this.officeNumber}`}
}

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role)
        this.github= github;
    }
    getGithub() { return `${this.github}`}
}

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role)
        this.school= school;
    }
    getSchool() { return `${this.school}`}
}

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is this employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is this employee's id number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email address?",
    },
    {
        type: "list",
        name: "role",
        message: "What is this employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

const generateEmployees = () => {
    inquirer.prompt(questions).then((role) => {
        inquirer.prompt([
            {
                when: () => role === "Manager",
                type: "input",
                name: "officeNumber",
                message: "What is this employee's office number?",
            },
            {
                when: () => role === "Engineer",
                type: "input",
                name: "github",
                message: "What is this employee's Github user name?",
            },
            {
                when: () => role === "Intern",
                type: "input",
                name: "school",
                message: "Where does this Intern attend school?",
            },
            {
                type: "confirm",
                name: "addToTeam",
                message: "Would you like to add someone to the team roster?",
            }, 
        ])
    })
};
        inquirer.then((answers) => {
            if (answers.role === "Manager") {
                const Manager = new Manger(`${this.name} ${this.id} ${this.email} ${this.role} ${this.officeNumber}`);
                managerData.push(Manager);
            }
            if (answers.role === "Engineer") {
                const Engineer = new Engineer(`${this.name} ${this.id} ${this.email} ${this.role} ${this.github}`);
                engineerData.push(Engineer);
            }
            if (answers.role === "Intern") {
                const Intern = new Intern(`${this.name} ${this.id} ${this.email} ${this.role} ${this.school}`);
                internData.push(Intern);
            }
            {
                if (answers === "addToTeam") {
                    generateEmployees();
                }
                else {
                    team.forEach((team) => {
                        console.log(team);
                    });
                }
                
        }
    })



        generateEmployees();
        console.log('working so far');

        module.exports = {
            managerData,
            engineerData,
            internData,
            Employee,
            Manager,
            Engineer,
            Intern,
            Team,
            generateEmployees
        }