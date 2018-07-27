import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        <p>Tételek száma: {props.expenses.length}</p>
        {
            props.expenses.length === 0 ? (
                <h4>Nincs semmi kiadásod. Örüljél!</h4>
            ) : (
                <ol>
                    {props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense}/>
                    })}
                </ol>
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);
