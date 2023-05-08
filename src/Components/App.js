import '../App.css';
import Cards from './Cards';
import { characters } from '../data';
import { useState } from 'react';


function App() {

  const [newArray, setNewArray] = useState(characters)

  const changeName = (e) => {
    const newName = characters.filter(function (item) {
      return item.Name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setNewArray(newName)
  }

  // FILTER AGE
  const changeAge = (e) => {
    var minAge = Number(e.target.value.substring(0, 2))
    var maxAge = Number(e.target.value.substring(3, 5) )
    const newAge = newArray.filter(function(item) {
      return item.Age >= minAge && item.Age <= maxAge
    })
    setNewArray(newAge)
  }

  // FILTER VILLAGE
  const changeVillage = (e) => {
    const newVillage = newArray.filter(item => item.Village === e.target.value)
    setNewArray(newVillage)
  }

  // FILTER KEKKEIGENKAI
  const changeKekkeiGenkai = (e) => {
    const newKekkeiGenkai = newArray.filter(item => item.KekkeiGenkai.toString() === e.target.value)
    setNewArray(newKekkeiGenkai)
  }

  // FILTER SPECIALITY
  const changeSpeciality = (e) => {
    const newSpeciality = newArray.filter(item => item.Speciality === e.target.value.toLowerCase())
    setNewArray(newSpeciality)
  }
  
  return (
    <div className="App">
      <form>
        <label htmlFor='site-search'>
          <input onChange={changeName} type="search" placeholder='Search by name' id="site-search"></input>
        </label>

        <label htmlFor='Age'>
          Age:
          <select onChange={changeAge} name="Age" id="Age">
            <option value="vid"></option>
            <option value="10-15">10-15</option>
            <option value="15-20">15-20</option>
            <option value="45-50">45-50</option>
          </select>
        </label>

        <label onChange={changeVillage} htmlFor='Village'>
          Village:
          <select name="Village" id="Village">
            <option value="vid"></option>
            <option value="Leaf">Leaf</option>
            <option value="Sand">Sand</option>
            <option value="Sound">Sound</option>
          </select>
        </label>

        <label htmlFor='KekkeiGenkai'>
          KekkeiGenkai:
          <select onChange={changeKekkeiGenkai} name="KekkeiGenkai" id="KekkeiGenkai">
            <option value="vid"></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>

        <label htmlFor='Speciality'>
          Speciality:
          <select onChange={changeSpeciality} name="Speciality" id="Speciality">
            <option value="vid"></option>
            <option value="Ninjutsu">Ninjutsu</option>
            <option value="Genjutsu">Genjutsu</option>
            <option value="Taijutsu">Taijutsu</option>
          </select>
        </label>
      </form>
      
      <hr/>

      <Cards newcharacters={newArray} />
    </div>
  );
}

export default App;
