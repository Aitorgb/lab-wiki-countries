import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
	const country = props.Countries.filter((country) => country.cca3 === props.props.match.params.country)[0];
	return (
		<div className="CountryDetails">
			<h1>{country.name.common}</h1>
			<table className="table">
				<thead />
				<tbody>
					<tr>
						<td>Capital</td>
						<td>{country.capital[0]}</td>
					</tr>
					<tr>
						<td>Area</td>
						<td>
							{country.area} km
							<sup>2</sup>
						</td>
					</tr>
					<tr>
						<td>Borders</td>
						<td>
							<ul>
								{country.borders.map((country) => {
									const countryName = props.Countries.filter(
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
