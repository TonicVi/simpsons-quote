import React from 'react';

const Avatar = ({ image, firstName, lastName, star }) => (
    <div>
        <img className={star ? "star-img" : ""} src={image ? image : "https://www.drupal.org/files/issues/default-avatar.png"} alt="" />
        <h3 className={star ? "star-firstName" : ""}>{firstName}</h3>
        <h3 className={star ? "star-lastName" : ""}>{lastName.toUpperCase()}</h3>
    </div>
)



export default Avatar;