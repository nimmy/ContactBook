import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './listing.scss';

const getRendom = () => {
    const arr = [1,2,3,4,5,6,7,8,8,9];
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRendom());
const Listing = () => {
    const [userArr, setUserArr] = useState([]);
    const [aa, setAa] = useState([]);
    useEffect(() => {
        let reusltCount = 10;
        fetch(`https://randomuser.me/api/?results=${reusltCount}`)
        .then(res => res.json())
        .then(data => setUserArr(data.results));
    }, []);

    const userDetails = (e) => {
        console.log(e);
    }

    const handleClick = () => {
        
        setAa([...aa,  getRendom()]);
    }
    // console.log(userArr);
    const userInfo = userArr.map((user, index) => <User user={user} key={index} userDetails={userDetails} />);
  return (
    <>
        <button onClick={handleClick}>Click</button>
        {aa}
        <ul className='contact-list results'>{userInfo}</ul>
    </>
  )
}

export default Listing;