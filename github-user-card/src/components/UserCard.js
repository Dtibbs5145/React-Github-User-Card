import React from 'react';

const UserCard = (props) => {
    return (
        <div>
            <p>Followers: {props.user.followers}</p>
            <p>Bio: {props.user.bio}</p>
        </div>
    )
}

export default UserCard;