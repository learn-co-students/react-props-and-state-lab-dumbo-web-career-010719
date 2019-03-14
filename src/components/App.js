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

  onChangeType = (eventVal) => {
    this.setState({
      filters: {type: eventVal}
    })
  }

  onAdoptPet = (eventId) => {
    let newArr = [...this.state.pets]
    let selectedPet = newArr.find(pet=> {return pet.id === eventId})
    selectedPet.isAdopted = true
    this.setState({
      pets: newArr
    })
  }

  onFindPetsClick = () => {
    console.log("work")
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(res=> res.json())
      .then((json) => {
        this.setState({
        pets: json
      })})
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res=> res.json())
      .then((json) => {this.setState({
        pets: json
      })})
    }
  }

  render() {
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
