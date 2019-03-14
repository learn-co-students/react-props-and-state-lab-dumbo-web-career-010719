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

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    }, ()=>console.log(this.state))

  }

  onFindPetsClick = e => {
    let urlType =''
    if(this.state.filters.type === "all"){
      urlType ="/api/pets"
    }else{
      urlType=`/api/pets?type=${this.state.filters.type}`
    }
      fetch(urlType)
      .then(resp => resp.json())
      .then(pets =>{
        this.setState({ pets })
      })
  }

  isAdopted = (petObjId) => {
      const newArray=[...this.state.pets]
      const adoptedPet=newArray.find(pet => pet.id === petObjId)
      adoptedPet.isAdopted=true

      this.setState({
        pets: newArray
      })
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.isAdopted}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
