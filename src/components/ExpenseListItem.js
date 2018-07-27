import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <li>
        <h4>{description}</h4>
        <div>{amount}</div>
        <div>{createdAt}</div>
        <Link to={`/edit/${id}`}>edit</Link>
    </li>
);

export default ExpenseListItem;