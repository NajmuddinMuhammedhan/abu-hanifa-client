import { useContext } from 'react'
import AccountContext from '../Context/Account/Context.js'

function useAccount (dispatchOnly) {

	const { account, dispatch } = useContext(AccountContext)

	return dispatchOnly ? [dispatch] : [account, dispatch]
}

export default useAccount
