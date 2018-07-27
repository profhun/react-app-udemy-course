import moment from 'moment'

export default [
    {
        id: 'zokni',
        description: 'zokni a lábon',
        amount: 400,
        note: '',
        createdAt: moment(0).subtract(10, 'days').valueOf()
    },
    {
        id: 'pizza',
        description: 'hawaii pizza',
        amount: 300,
        note: '',
        createdAt: moment(0).subtract(9, 'days').valueOf()
    },
    {
        id: 'hamburger',
        description: 'BBQ',
        amount: 200,
        note: '',
        createdAt: moment(0).add(7, 'days').valueOf()
    },
    {
        id: 'green tea',
        description: 'from japan',
        amount: 100,
        note: '',
        createdAt: moment(0).add(8, 'days').valueOf()
    }
];