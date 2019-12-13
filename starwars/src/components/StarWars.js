import React, { useState, useEffect} from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard.js';
import './StarWars.css';

export default function StarWars() {

    const [characters, setCharacters] = useState([]);

    useEffect (() => {
         axios 
         .get(`https://swapi.co/api/people`) 
         .then(res => {
             console.log(res.data.results);
             setCharacters(res.data.results);
         })
         .catch((error) => console.log('Error:', error));
    }, [])
    return (
         <div className="container">
            <div className="entry">
                {characters.map((item, index) => {
                     return <StarWarsCard 
                                key={index} 
                                name={item.name} 
                                height={item.height}
                                hair_color={item.hair_color}
                                skin_color={item.skin_color}
                                eye_color={item.eye_color}
                                home={item.homeworld}
                            />
                })}
            </div>
        </div>
    );
}