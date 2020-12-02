import { Route } from 'react-router-dom'

function Public ({ children, ...props }) {

	return (
		<Route
			{ ...props }
			render={
				({ location, }) => children
			}
		/>
	)
}

export default Public
