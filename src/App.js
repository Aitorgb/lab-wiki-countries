import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Redirect, Route, Switch } from 'react-router-dom';
import Axios from 'axios';

class App extends React.Component {
	state = {
		countries: []
	};

	componentDidMount() {
		Axios.get(`https://countries.tech-savvy.tech/countries`).then((res) => {
			this.setState({ countries: res.data });
		});
	}

	render() {
		return (
			<div className="App">
				<div className="container-fluid  bg-primary">
					<Navbar />
				</div>
				<div className="container mt-5">
					<div className="row">
						<div className="col-5 list">
							<CountriesList CountriesList={this.state.countries} />
						</div>
						<div className="col-7">
							<Switch>
								<Route exact path="/country/:country" component={CountryDetails} />
								<Redirect to="/" />
							</Switch>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
