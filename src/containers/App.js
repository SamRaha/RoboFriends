import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';



//Smart components as it has state
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState ({robots: users}));
	}


	//use arrow function as this function is not part of react
	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value})
	}
	render() {
		const {robots, searchfield } = this.state; //destructuring
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			return !robots.length ? //! means false
	 		<h1>Loading</h1> :
			( 
				<div className = 'tc'>
					<h1 className='f1'> RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots ={filteredRobots}/>
					</Scroll>
				</div>
			);
	}
}
export default App;
