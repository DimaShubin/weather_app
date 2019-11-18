import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Favorites from './Favorites/'
import Home from './Home'

const Main = () => {
	return (
		<main>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/favorites' component={Favorites} />
			</Switch>
		</main>
	)
}

export default Main
