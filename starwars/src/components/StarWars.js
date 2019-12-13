import React, { useState, useEffect} from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard.js';
import StarWarsForm from './StarWarsForm.js';
import './StarWars.css';

export default function StarWars() {

    const [characters, setCharacters] = useState([]);
    
    //Data to filter for the form
    const [allCharacters, setAllCharacters] = useState([]);

    function onSearch(searchName){
        //console.log('seach', searchName);

        if( searchName && searchName.length > 0 ){
            setCharacters(allCharacters.filter( character => {
                if( character.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1 ) return true;
            }));
        }else{
            setCharacters(allCharacters);
        }
    }

    useEffect (() => {
         axios 
         .get(`https://swapi.co/api/people`) 
         .then(res => {
             //console.log(res.data.results);

             setCharacters(res.data.results)
             setAllCharacters(res.data.results);
         })
         .catch((error) => console.log('Error:', error));
    }, [])

    return (
         <div className="container">
            <StarWarsForm onSearch={onSearch} /> 
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