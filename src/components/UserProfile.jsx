import React from "react";




const UserProfile = (props) => {
    return (
        <div>
            <h1> {props.first} {props.last}'s email is {props.email} and their age is {props.age} years old </h1>
        </div>
    );
}


export default UserProfile;