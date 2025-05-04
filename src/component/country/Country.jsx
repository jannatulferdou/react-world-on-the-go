import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {

    const [visited, setVisited]= useState(false)


    const handleVisited=()=>{
        // if (visited===true) {
        //     setVisited(false);
        // }else{
        //     setVisited(true)
        // }

        setVisited(!visited);


        handleVisitedCountries(country);
        
    }
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <h3>name:{country?.name?.common}</h3>
            <img src={country?.flags.png} alt="" />
            <p>independent: {country.independent?'free':'not free'}</p>
            <p>population:{country?.population}</p>
            <button onClick={() => handleVisited()}>{
                visited? 'visited': "not visited"
                }</button>

                <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add visited flag</button>
        </div>
    );
};

export default Country;