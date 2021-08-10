const {Employee, Manager, Engineer, Intern} = require('../helperUtilities/employeeEntry');

describe('Employee Tests', () => {
    it('has a getName() function', () => {
        const Alanzo = new Employee('Alanzo', 'Alanzo@email.com', '02', 'Employee');
        expect(Alanzo.getName()).toBe('Alanzo');
    })
    it ('has a getId() function', () => {
        const Alanzo = new Employee('Alanzo', 'Alanzo@email.com', '02', 'Employee');
        expect(Alanzo.getId()).toBe('02');
    })
    it ('has a getEmail() function', () => {
        const Alanzo = new Employee('Alanzo', 'Alanzo@email.', '02', 'Employee');
        expect(Alanzo.getEmail()).toBe('Alanzo@email.com');
    })
    it ('has a getRole() function', () => {
        const Alanzo = new Employee('Alanzo', 'Alanzo@email.com', '02', 'Employee');
        expect(Alanzo.getRole()).toBe('Employee');
    })
})

describe('Manager Tests', () => {
    it('has a getRole() function', () => {
        const Yimir = new Manager('Yimir', 'Yimir@email.com', '1', 'Manager', 210);
        expect(Yimir.getRole()).toBe('Manager');
    })
    it('has a getOfficeNumber() function', () => {
        const Yimir = new Manager('Yimir', 'Yimir@email.com', '1', 'Manager', 210);
        expect(Yimir.getOfficeNumber()).toBe(210);
    })
})

describe('Engineer Tests', () => {
    it('has a getRole() function', () => {
        const Levi = new Engineer('Levi', 'Levi@email.com', '4', 'Engineer', 'github.com/Levi_Coding' );
        expect(Levi.getRole()).toBe('Engineer');
    })
    it ('has a getGithub() function', () => {
        const Levi = new Engineer('Levi', 'Levi@email.com', '3', 'Engineer', 'github.com/Levi_Coding');
        expect(Levi.getGithub()).toBe('github.com/Levi_Coding');
    })
})

describe('Intern Tests', () => {
    it('has a getRole() function', () => {
        const Rebecka = new Intern('Rebecka', 'Rebecka@email.com', '4', 'Intern', 'U of AA');
        expect(Rebecka.getRole()).toBe('Intern');
    })
    it ('has a getSchool() function', () => {
        const Rebecka = new Intern('Rebecka', 'Rebecka@email.com', '4', 'Intern', 'U of AA');
        expect(Rebecka.getSchool()).toBe('U of AA');
    })
})