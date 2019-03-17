import React from 'react'

class Pet extends React.Component {
  render() {
    let pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Gender: {pet.gender == 'male' ? '♂' : '♀'}</p>
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
        {pet.isAdopted ? <button className="ui disabled button">Already adopted</button>:<button className="ui primary button" onClick={() => this.props.onAdoptPet(pet.id)}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
