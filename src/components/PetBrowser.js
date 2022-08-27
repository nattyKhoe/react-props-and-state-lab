import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const pets = this.props.pets;
    return (
      pets.map (pet=>(
        <div className="ui cards">
        <Pet gender={pet.gender} id={pet.id} name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} isAdopted={pet.isAdopted} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
        </div>
      ))
  )
  }
}

export default PetBrowser;
