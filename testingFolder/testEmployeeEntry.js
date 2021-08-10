const {Manager} = require('../helperUtilities/employeeEntry');

describe('Manager Tests', () => {
    it('has a getRole() function', () => {
        const Yimir = new Manager('Yimir', 'Yimir@email.com', '1', 'Manager', 210);
        expect(Yimir.getRole()).toBe('Manager')
    })
})