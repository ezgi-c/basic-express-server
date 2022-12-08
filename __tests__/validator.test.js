const { nameValidator } = require('../src/middleware/validator');

describe('name validator', () => {
    test('with name Neo', () => {
        const req = { query: { name: 'Neo' } };
        const next = jest.fn();

        nameValidator(req, {}, next);

        expect(req.name).toBe('Neo');
        expect(next).toHaveBeenCalled();
    });

    test('with no name', () => {
        const req = { query: {} };
        const next = jest.fn();

        nameValidator(req , {}, next);

        expect(next).toHaveBeenCalledWith('Failed validation: No name in query!');
    });
});