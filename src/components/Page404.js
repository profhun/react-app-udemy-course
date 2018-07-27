import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = (props) => (
    <div>
        <h1>404</h1>
        <Link to="/">Back to home</Link>
    </div>
);

export default Page404;