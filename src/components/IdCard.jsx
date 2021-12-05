import React from 'react'

export default function IdCard(props) {

    const person = props;

 return (
        <div>
            <p>Last Name: {person.lastName}</p>
            <p>First Name: {person.firstName}</p>
            <p>Gender: {person.gender}</p>
            <p>Height: {(person.height / 1)}cm</p>
            <p>Birthday: {person.birth}</p>
            <img src={person.picture} alt="Id Picture"/>
        </div>
    )
}
