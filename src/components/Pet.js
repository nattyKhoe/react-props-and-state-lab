import React from 'react'

class Pet extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender === "male" ? '♂' : '♀' }
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        
          {this.props.isAdopted ? (
          <div className="extra content">
          <button className="ui primary button">Already adopted</button>
          <button className="ui disabled button">Adopt pet</button>
          </div>
          ): (
          <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" id={this.props.id} onClick={event=>this.props.onAdoptPet(event.target.id)}>Adopt pet</button>
          </div>
          )

          }
          
        
      </div>
    )
  }
}

export default Pet
