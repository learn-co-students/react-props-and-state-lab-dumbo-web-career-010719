import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let arrOfPets = this.props.pets.map((petObj)=> {return <Pet pet={petObj} onAdoptPet={this.props.onAdoptPet}/>})
    return (<div className="ui cards">
    {arrOfPets}
    </div>)
  }
}

export default PetBrowser
