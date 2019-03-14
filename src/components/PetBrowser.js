import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {

    const petsArr = this.props.pets.map(pet => <Pet key={pet.id} id={pet.id} pets={pet} onAdoptPet={this.props.onAdoptPet}/>)

    return <div className="ui cards">
      {petsArr}
    </div>
  }
}

export default PetBrowser
