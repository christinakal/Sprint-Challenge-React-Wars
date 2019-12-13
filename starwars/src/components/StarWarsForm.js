import React, {useState} from 'react';

const StarWarsForm = (props) => {

    function handleChange(event){
        event.preventDefault();

        props.onSearch(event.target.value);
    };

    return (
        <form>
            <label>
                Name: 
                <input onChange={handleChange} type="text" name="name" />
            </label>
            {/* <input type="submit" value="Submit"/> */}
        </form>
    );
}

export default StarWarsForm