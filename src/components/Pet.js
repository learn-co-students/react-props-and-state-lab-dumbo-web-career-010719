import React from 'react'

class Pet extends React.Component {

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pets.name}

            {this.props.pets.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">{this.props.pets.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pets.age} years old</p>
            <p>Weight: {this.props.pets.weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
          <button className={ (this.props.pets.isAdopted) ? "ui primary button" : "ui disabled button"}>Already adopted</button>
          <button className={ (this.props.pets.isAdopted) ? "ui disabled button" : "ui primary button"} onClick={() => this.props.onAdoptPet(this.props.pets.id)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
