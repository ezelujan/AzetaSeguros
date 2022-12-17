import React from 'react'
import useSponsors from '../hooks/use-sponsors';

const Sponsors = () => {

    const sponsors = useSponsors();
    console.log('sponsors: ', sponsors);
    if (!sponsors.length) return false;

    return ( 
        <h1>holaaa</h1>
    );
}
 
export default Sponsors;