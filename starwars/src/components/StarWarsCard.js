 import React from 'react';
 import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

 const StarWarsCard = (props) => {
     return (
        <div className='star-wars-card'>
            <Card body className="text-center" style={{backgroundColor: '#CECBC6'}}>
                <CardTitle><h1>{props.name}</h1></CardTitle>
                <CardText><h3>Height: {props.height}</h3></CardText>
                <CardText><h3>Hair color: {props.hair_color}</h3></CardText>
                <CardText><h3>Eye color: {props.eye_color}</h3></CardText>
            </Card>
        </div>

     );
 }

 export default StarWarsCard


{/* <div className="star-wars-card">
    <h1>{props.name}</h1>
    <h3>Height: {props.height}</h3>
    <h3>Hair color: {props.hair_color}</h3>
    <h3>Eye color: {props.eye_color}</h3>
</div> */}






