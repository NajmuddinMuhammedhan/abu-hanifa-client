import { Route, Redirect } from 'react-router-dom'
import useAccount from '../../Hooks/useAccount.js'

function Private ({ children, ...props }) {

	const [isLoggedIn] = useAccount()

	return (
		<Route
			{ ...props }
			render={
				({ location, }) => {
					return children
					// return isLoggedIn !== null ? children : <Redirect to={{ pathname: '/login', state: { from: location, }, }} />
				}
			}
		/>
	)
}

export default Private
