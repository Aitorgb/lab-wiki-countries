import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

export default class CountryDetails extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			countries: [],
		  };
	}
 

  componentDidMount() {
    Axios.get(`https://countries.tech-savvy.tech/countries`).then((res) => {
      this.setState({ countries: res.data });
    });
  }

  render() {
    const country = this.state.countries.filter(
      (country) => country.cca3 === this.props.match.params.country
	)[0];

    return (
      <div className="CountryDetails">
        <h1>{this.state.countries.length !== 0 && country.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{this.state.countries.length !== 0 && country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.state.countries.length !== 0 && country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.state.countries.length !== 0 && country.borders.map((country) => {
                    const countryName = this.state.countries.filter(
                      (countryName) => countryName.cca3 === country
                    )[0];
                    return (
                      <li>
                        <Link key={countryName.cca3} to={`/country/${country}`}>
                          {countryName.name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
