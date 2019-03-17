import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let arrayPets = this.props.pets.map(petObj => <Pet pet={petObj} onAdoptPet={this.props.onAdoptPet}/>)
    return <div className="ui cards">{arrayPets}</div>
  }
}

export default PetBrowser
