import { useState, useEffect } from 'react'
import useAccount from '../../Hooks/useAccount.js'
import { useHistory } from 'react-router-dom'
import { CREATE_TOKEN } from './Graphql.js'
import { useMutation } from '@apollo/client'
import './Account.css'

function Login () {

	const [account, dispatch] = useAccount()
	const history = useHistory()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [disabled, setDisabled] = useState(true)

	const [createToken, { loading, error }] = useMutation(CREATE_TOKEN, {
		errorPolicy: 'all',
		update: (cache, { data: { createToken } }) => {
			cache.modify({
				fields: {
					createToken: (createToken = {}) => {
						return createToken
					}
				}
			})
			dispatch({ type: 'login', user: createToken.user, accessToken: createToken.token })
		}
	})

	useEffect(() => {
		setDisabled(!(username.length && password.length))
	}, [
		username,
		password,
	])

	useEffect(() => {
		if (account !== null) history.goBack()
	}, [
		account,
		history,
	])

	return (
		<>
			<form
				className="form"
				onSubmit={event => {
					event.preventDefault()
					createToken({ variables: { username, password }, })
					event.target.reset()
				}}
			>
				{loading && <h1>loading...</h1>}
				{error && <h1>{error.message}</h1>}
				<div className="input">
					{username}
					<input
						type="text"
						autoComplete="off"
						placeholder="Username or email address"
						spellCheck={false}
						onChange={event => setUsername(event.target.value)}
					/>
				</div>
				<div className="input">
					{password}
					<input
						type="password"
						placeholder="Password"
						autoComplete="current-password"
						onChange={event => setPassword(event.target.value)}
					/>
				</div>
				<div className="input">
					<button
						type="submit"
						disabled={disabled}
					>
						<span>Kirish</span>
					</button>
				</div>
			</form>
		</>
	)
}

export default Login
