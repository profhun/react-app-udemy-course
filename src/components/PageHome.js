import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const PageHome = (props) => (
    <div>
        <h1>
            Hoooome
        </h1>
        <ExpenseListFilters />
        <ExpenseList {...props} />
    </div>

);

export default PageHome;