import React from 'react'
import './App.css'
import { Switch } from 'react-router-dom'

import Public from './Application/Main/Route/Public.jsx'
import Private from './Application/Main/Route/Private.jsx'

/*
	import public routes
*/

import Home from './Application/Pages/Home/Home.jsx'
import Login from './Application/Pages/Account/Login.jsx'
import Join from './Application/Pages/Account/Join.jsx'

/*
	import private routes
*/

import Courses from './Application/Pages/School/Courses/Courses.jsx'

function App() {
	return (
		<>
			<Switch>

				{
					/*
						public routes
					*/
				}

				<Public path="/" exact>
					<Home />
				</Public>

				<Public path="/login" exact>
					<Login />
				</Public>

				<Public path="/join" exact>
					<Join />
				</Public>

				{
					/*
						private	routes
					*/
				}

				<Private path="/school/courses" exact>
					<Courses />
				</Private>

			</Switch>
		</>
	)
}

export default App
