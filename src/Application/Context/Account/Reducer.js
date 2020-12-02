function Reducer (state, { type, data, }) {
	if (type === 'login') {
		window.localStorage.setItem('account', JSON.stringify(data))
		return data
	}
	else if(type === 'logout') {
		window.localStorage.removeItem('account')
		return null
	}
	else {
		throw new Error()
	}
}

export default Reducer
