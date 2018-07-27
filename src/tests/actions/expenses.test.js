import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('költés törlés', () => {
    const action = removeExpense({ id: "test-id" });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'test-id'
    });
});

test('költés módosítás', () => {
    const action = editExpense("test-id", {amount: 1000});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'test-id',
        updates: {
            amount: 1000
        }
    });
});

test('költés add custom', () => {
    const expenseData = {
        description: 'blaaaa',
        note: 'note note',
        amount: 30000,
        createdAt: 1000
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('költés add default', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});