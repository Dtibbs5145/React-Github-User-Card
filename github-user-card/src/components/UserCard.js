import React from 'react';

const UserCard = (props) => {
    return (
        <div className='App'>
            <p>Their username is {props.user.login}</p>
            <p>They have {props.user.followers} followers</p>
            <p>They are following {props.user.following} person</p>
            <p>Their bio says: {props.user.bio}</p>
            <p>They started using Github on {props.user.created_at}</p>
        </div>
    )
}

export default UserCard;