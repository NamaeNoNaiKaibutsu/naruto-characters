import React from 'react'
import {characters} from '../data.js'
import '../App.css';
import { Card } from './Card.js';




function Cards(props) {
  return (
    <div className='Container'>
      {props.newcharacters.map((item, key) => {
      return (
      <div key={key} className='Card'>
        <Card name={item.Name} age={item.Age} village={item.Village} kekkeigenkai={item.KekkeiGenkai} speciality={item.Speciality} info={item.Info}/>
      </div>
    )
  })}
    </div>
  )
}

export default Cards