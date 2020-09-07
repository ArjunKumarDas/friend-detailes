
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));

    },[])
    return (
        <div className="friend-detailes">
               <h1>Friend Detailes ID :  {friendId}</h1>  
               <p> Friend Name : {friend.name}</p> 
               <p>Friend User Name : {friend.username}</p> 
               <p>Email : {friend.email}</p>  
               <p>Phone : {friend.phone}</p>  
               <p>Website Link : {friend.website}</p> 
                     
        </div>
    );
};

export default FriendDetail;












