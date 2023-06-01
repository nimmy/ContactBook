import React from 'react';
import icons from './icons.svg';
import './user.scss';

const User = (props) => {
    const {name, picture} = props.user;
    // console.log(props);
  return (
    <li className='contact-list__item'>
        <figure className="contact-list__item__preview">
            <img src={`${picture.thumbnail}`} alt={`${name.first} ${name.last}`} />
        </figure>
        <div className="contact-list__item_preview__data">
            <h4 className="preview__title">{`${name.first} ${name.last}`}</h4>
            <h4 className="contact-list__item_preview__user-generated" onClick={(e) => props.userDetails(e)}>
                <button className='contact-list__item_preview__user-generated-btn'>
                    <svg>
                        <use href={`${icons}#icon-arrow-right`}></use>
                    </svg>
                </button>
            </h4>
            
        </div>
        
    </li>
  )
}

export default User;