import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({selectedCapitalId: event.target.value})
  }

  getCounty = () => {
    const {selectedCapitalId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === selectedCapitalId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {selectedCapitalId} = this.state
    const country = this.getCounty(selectedCapitalId)

    return (
      <div className="app-container">
        <div className="country-and-capital-card">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            className="selectOption"
            onChange={this.onChangeCapital}
            value={selectedCapitalId}
          >
            {countryAndCapitalsList.map(eachCapital => (
              <option
                className="capital"
                key={eachCapital.id}
                value={eachCapital.id}
              >
                {eachCapital.capitalDisplayText}
              </option>
            ))}
          </select>
          <span className="question"> is Capital of Which Country?</span>
          <br />
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
