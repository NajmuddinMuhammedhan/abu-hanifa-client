import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, split, HttpLink, ApolloLink, concat } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

/*
	import providers (Context API)
*/

import Account from './Application/Context/Account/Provider.jsx'

const httpLink = new HttpLink({
	uri: 'https://abu-hanifa.herokuapp.com/graphql',
})

const authMiddleware = new ApolloLink((operation, forward) => {
	operation.setContext({
		headers: {
			access_token: localStorage.getItem('access_token') || null,
		}
	})
	return forward(operation);
})

const wsLink = new WebSocketLink({
	uri: `wss://abu-hanifa.herokuapp.com/graphql`,
	options: { reconnect: true },
})

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		)
	},
	wsLink,
	httpLink,
)

const client = new ApolloClient({
	link: concat(authMiddleware, splitLink),
	cache: new InMemoryCache(),
})

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ApolloProvider client={client}>
				<Account>
					<App />
				</Account>
			</ApolloProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorkerRegistration.unregister()

reportWebVitals()