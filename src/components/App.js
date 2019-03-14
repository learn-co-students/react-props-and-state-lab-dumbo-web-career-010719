import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

  onChangeType = (value) => {
    this.setState({
      filters: {...this.state.filters,
      type: value}
    })
  }

  fetchPets = () => {
    let api;

    if (this.state.filters.type === 'all') {
      api = '/api/pets'
    } else {
      api = `/api/pets?type=${this.state.filters.type}`
    }
    console.log("The api is: "+ api);
    fetch(api)
    .then(resp => resp.json() )
    .then(json => this.setState({...this.state, pets: json }) )
  }

  onAdoptPet = (petId) => {
    let adoptedPets = this.state.pets.map(pet => (pet.id === petId) ? {...pet, isAdopted: true} : pet )
    console.log("The pet's ID is: " + petId);
    this.setState({...this.state, pets: adoptedPets})
  }

  render() {
    console.log("The state's type is: " + this.state.filters.type)

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
