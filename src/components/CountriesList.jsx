import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
	return (
		<div className="list-group">
			{props.CountriesList.map((country, index) => {
				return (
					<Link key={index} className="list-group-item list-group-item-action p-4" to={`/country/${country.cca3}`}>
						<span className="mr-3">{country.flag}</span>
						{country.name.official}
					</Link>
				);
			})}
		</div>
	);
}
