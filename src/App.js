import React from 'react';
//import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
//import Greetings from './components/Greetings';
//import Random from './components/Random';
//import BoxColor from './components/BoxColor';
//import CreditCard from

// const person = [
//   {
   
//     lastName:'Doe',
//     firstName: 'John',
//     gender: 'male',
//     height: '178',
//     birth: "1992-07-14",
//     picture: "https://randomuser.me/api/portraits/men/44.jpg"
// },
//   {
  
//     lastName: 'Delores',
//     firstName: 'Obrien',
//     gender: 'female',
//     height: '172',
//     birth: "1988-05-11",
//     picture:"https://randomuser.me/api/portraits/women/44.jpg"
//   }
// ];
// console.log(person)


function App() {
  return (
    <div>  
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
    </div>
  ) 
}

export default App;
