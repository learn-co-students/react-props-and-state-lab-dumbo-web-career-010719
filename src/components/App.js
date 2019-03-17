import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onAdoptPet = (id) => {
    console.log(id)
    let copyPets = [...this.state.pets]
    console.log(copyPets)
    let findPet = copyPets.find(pet => pet.id == id)
    console.log(findPet.isAdopted)
    if(findPet.isAdopted == false){
      findPet.isAdopted = true
    }
    console.log(findPet.isAdopted)

    this.setState({pets: copyPets})
  }

  isAdopted = () => {
    
  }

  onFindPetsClick = () => {
    if(this.state.filters.type == 'all' ){
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(json => this.setState({pets: json}))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(json => this.setState({pets: json}))
    }
  }



  render() {
    console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
