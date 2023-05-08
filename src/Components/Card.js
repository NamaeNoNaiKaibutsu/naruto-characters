
import '../App.css'
import { useState } from 'react'


export const Card = (props) => {

  const [isOn, setIsOn] = useState(false)
  const handleChange = (e) => {
    setIsOn(!isOn)
    console.log(e.target)
  }

  return (
    <div onClick={handleChange}>
      {isOn ? (
        <div className='back'>
          <p>{props.info}</p>
        </div>
      ) : (
        <div className='front'>
            <div className='single-box'>
              <span></span>
              <img className='CardPic' alt="" src={require('../assets/' + props.name + '.jpg')}/>
            </div>
            <h1>{props.name}</h1>
            <div className='Description'>
              <div className='leftSide'>
                <p>Age</p>
                <p>Village</p>
                <p>KekkeiGenkai</p>
                <p>Speciality</p>
              </div>
              <div className='rightSide'>
                <p>{props.age}</p>
                <p>{props.village}</p>
                <p>{props.kekkeigenkai ? 'yes' : 'no'}</p>
                <p>{props.speciality}</p>
              </div>
            </div>
          </div>
      )}
    </div>
  )
}