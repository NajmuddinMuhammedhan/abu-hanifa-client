import { useReducer } from 'react'
import AccountContext from './Context.js'
import reducer from './Reducer.js'

const initialAccount = window.localStorage.getItem('account')

function AccountProvider ({ children }) {

	const [account, dispatch] = useReducer(reducer, initialAccount)

	return (
		<AccountContext.Provider value={{ account, dispatch }}>
			{
				children
			}
		</AccountContext.Provider>
	)
}

export default AccountProvider
