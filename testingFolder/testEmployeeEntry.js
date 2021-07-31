const jest = require('jest');
const {Employee, manager, engineer, intern} = require('../helperUtilities/employeeEntry');
const {createManager, createEmployee, createEngineer, createIntern} = require('../helperUtilities/htmlCreator');

describe('Employee Class Tests', () => {
    it('Has getName() as entered name', () => {
        const Ymir = new Employee('Ymir', 'Ymir@yahoo.com', '01', 'Employee');
        expect(Ymir.getName()).toBe('Ymir');
    })
    it('Has getEmail() as entered email', () => {
        const Ymir = new Employee('Ymir', 'Ymir@yahoo.com', '01', 'Employee');
        expect(Ymir.getEmail()).toBe('Ymir@yahoo.com')
    })
    it('Has getId() as entered id', () => {
        const Ymir = new Employee('Ymir', 'Ymir@yahoo.com', '01', 'Employee');
        expect(Ymir.getId()).toBe('01')
    })
    it('Has getRole() as entered role', () => {
        const Ymir = new Employee('Ymir', 'Ymir@yahoo.com', '01', 'Employee');
        expect(Ymir.getRole()).toBe('Employee')
    })
})

describe('manager class tests', () => {
    it('Has a getRole() as manager', () => {
        const Ymir = new manager('Ymir', 'Ymir@yahoo.com', '01', 'manager', 114);
        expect(Ymir.getRole()).toBe('manager')
    })
    it('Has getOfficeNumber() as entered in office number', () => {
        const Ymir = new manager('Ymir', 'Ymir@yahoo.com', '01', 'Employee', 114);
        expect(Ymir.getOfficeNumber()).toBe(114)
    })
})

describe('engineer class tests', () => {
    it('Has a getRole() as engineer', () => {
        const Hanz = new engineer('Hanz', 'Hanz@yahoo.com', '02', 'engineer', 'Hanz456');
        expect(Hanz.getRole()).toBe('engineer')
    })
    it('Has a getGithub() as entered github', () => {
        const Hanz = new engineer('Hanz', 'Hanz@yahoo.com', '02', 'engineer', 'Hanz456');
        expect(Hanz.getGithub()).toBe('Hanz456')
    })
})

describe('intern class tests', () => {
    it('Has a getRole() as intern', () =>{
        const Franz = new intern('Franz', 'Franz@yahoo.com', '03', 'intern', 'University of Munich');
        expect(Franz.getRole()).toBe('intern')
    })
    it('Has a getSchool() as entered school', () => {
        const Franz = new intern('Franz', 'Franz@yahoo.com', '03', 'intern', 'University of Munich');
        expect(Franz.getSchool()).toBe('University of Munich')
    })
})

describe('manager HTML test', () => {
    it('Properly write properties of a manager', () => {
        const manager01 = ({name: 'Ymir', email: 'Ymir@yahoo.com', id: '01', role: 'manager', officeNumber: 114});
        expect(createManager(manager01)).toBe(`<div class="card" border-radius=".25rem;"><header class="card-header-title"><p class="card-header-title"> Manager</p></header><div class="content"><ul class="itemToCard"><li class="itemToLine">Name: Ymir</li><li class="itemToLine">Email: Ymir@yahoo.com<a href="mailto:${manager.email}"></a></li><li class="itemToLine">Employee I.D.: 01</li><li class="itemToLine">Office Number: 114</li></ul><div></div>`)
    })
})

describe('engineer HTML test', () => {
    it('Properly writes the properties of engineer', () => {
        const engineer01 = ({name: 'Hanz', email: 'Hanz@yahoo.com', id: '02', role: 'engineer', github: 'Hanz456'});
        expect(createEngineer(engineer01)).toBe(`<div class="card" border-radius=".25rem;"><header class="card-header-title"><p class="card-header-title">engineer</p></header><div class="content"><ul class="itemToCard"><li class="itemToLine">Name: Hanz</li><li class="itemToLine">Email: Hanz@Yahoo.com</a></li><li class="itemToLine">Employee I.D.: 02</li><li class="itemToLine">Github Account: Hanz456</li></ul><div></div>`)
    })
})

describe('intern HTML test', () => {
    it('Properly write properties of intern', () => {
        const intern01 = ({name: 'Franz', email: 'Franz@yahoo.com', id: '03', role: 'intern', school: 'University of Munich'});
        expect(createIntern(intern01)).toBe(`<div class="card" border-radius=".25rem;"><header class="card-header-title"><p class="card-header-title"> intern</p></header><div class="content"><ul class="itemToCard"><li class="itemToLine">Name: Franz</li><li class="itemToLine">Email: Franz@yahoo.com</a></li><li class="itemToLine">Employee I.D.: 03</li><li class="itemToLine">Graduating School: University of Munich</li></ul><div></div>`)
    })
})