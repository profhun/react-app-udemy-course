import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <li>
        <h4>{description}</h4>
        <div>{numeral(amount/100).format('0,0.00')} Ft</div>
        <div>{moment(createdAt).format('YYYY/MMMM/DD')}</div>
        <Link to={`/edit/${id}`}>edit</Link>
    </li>
);

export default ExpenseListItem;