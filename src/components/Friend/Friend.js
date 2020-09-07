import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';
const Friend = (props) => {
    const { name, email, id } = props.friend;
    return (
        <div className="friend">
            <h2>Person Id : {id}</h2>
            <h3>Name : {name}</h3>
            <h4>Email : {email}</h4>
            <Link className="button" to={`/about/${id}`}>More Info</Link>
        </div>
    );
};

export default Friend;