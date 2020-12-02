function Reducer (state, { type, user, accessToken, }) {
	if (type === 'login') {
		window.localStorage.setItem('account', JSON.stringify(user))
		window.localStorage.setItem('accessToken', JSON.stringify(accessToken))
		return { user, accessToken }
	}
	else if(type === 'logout') {
		window.localStorage.removeItem('account')
		window.localStorage.removeItem('accessToken')
		return null
	}
	else {
		throw new Error()
	}
}

export default Reducer
