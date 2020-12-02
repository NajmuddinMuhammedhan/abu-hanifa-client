import { useState, useEffect } from 'react'
import useAccount from '../../Hooks/useAccount.js'
import { useHistory } from 'react-router-dom'
import { CREATE_TOKEN } from './Graphql.js'
import { useMutation } from '@apollo/client'
import './Account.css'

function Login () {

	const [dispatch] = useAccount(true)
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
			history.push('/school/courses')
		}
	})

	useEffect(() => {
		setDisabled(!(username.length && password.length))
	}, [
		username,
		password,
	])

	return (
		<>
			<div id="login">
				<div className="main">
					<div className="wrapper">
						<div className="box">
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235 234.62">
									<path d="M91.62 197.72c-12.64,3.96 -25.96,6.4 -39.73,7.12 -0.79,10.76 -3.9,20.88 -8.84,29.85 0.1,0 0.19,0 0.29,0 21.24,0 41.68,-3.47 60.76,-9.88 -3.28,-9.49 -7.47,-18.56 -12.48,-27.09zm19.14 -40.75c-17.89,-22.86 -40.87,-41.54 -67.25,-54.33 0,0 0,0 0,0 -15.31,3.93 -30.13,9.06 -44.36,15.29 39.29,9.71 72.9,33.82 94.92,66.41 4.84,-9.59 10.43,-18.74 16.69,-27.37zm79.04 -54.33c-26.37,12.79 -49.36,31.47 -67.25,54.33 6.26,8.63 11.86,17.77 16.7,27.37 22.01,-32.59 55.62,-56.7 94.91,-66.41 -14.23,-6.23 -29.05,-11.36 -44.35,-15.29 -0.01,0 -0.01,0 -0.01,0zm-48.11 95.08c-5,8.53 -9.2,17.6 -12.48,27.09 19.09,6.41 39.52,9.88 60.77,9.88 0.07,0 0.15,0 0.23,0 -4.94,-8.97 -8.05,-19.09 -8.84,-29.85 -13.75,-0.72 -27.05,-3.17 -39.68,-7.12z"/>
									<path d="M116.66 234.69c3.69,-14.54 9.36,-28.29 16.69,-40.95 -4.73,-10.12 -10.33,-19.76 -16.69,-28.82 -6.37,9.06 -11.96,18.7 -16.7,28.82 7.34,12.66 13,26.41 16.7,40.95z"/>
									<path d="M116.68 48.85c5.87,-3.15 12.38,-4.79 19.05,-4.8l1.07 0.29c5.77,3.33 10.6,8.02 14.11,13.68l0.02 0 0.01 0.01c6.65,0.22 13.11,2.05 18.89,5.38l0.79 0.79c3.33,5.78 5.16,12.24 5.38,18.89l0.02 0.01 0 0.02c4.36,2.71 8.14,6.2 11.18,10.31 0.93,-0.43 1.85,-0.86 2.78,-1.29l0 -18.76c0,-43.99 -48.88,-48.88 -73.32,-73.32 -24.44,24.44 -73.32,29.33 -73.32,73.32l0 18.77c0.93,0.42 1.85,0.85 2.77,1.29 1.19,-1.61 2.5,-3.13 3.91,-4.55l0 0c2.19,-2.19 4.63,-4.12 7.28,-5.77l0 -0.02 0.02 -0.01c0.21,-6.66 2.05,-13.11 5.38,-18.89l0.79 -0.79c5.77,-3.33 12.23,-5.16 18.88,-5.38l0.01 -0.01 0.02 0c3.51,-5.66 8.34,-10.35 14.11,-13.68l1.08 -0.29c6.66,0.01 13.18,1.65 19.05,4.8l0.02 -0.02 0.02 0.02zm33.45 43.63c1.03,-2.55 1.76,-5.36 2.15,-8.08l0.3 -2.95 -4.17 0.5 -4.55 1.13 -3.13 1.16 -2.8 1.33c-1.39,-0.94 -2.85,-1.78 -4.36,-2.53 -0.13,-3.58 -0.8,-7.07 -1.96,-10.47l-0.15 -0.42 -0.24 -0.63 -0.16 -0.42 -0.21 -0.53 -0.27 -0.62 -0.23 -0.52 -0.24 -0.52 -0.25 -0.51 -0.05 -0.1 -5.68 4.65 -0.27 0.28 -0.45 0.46 -0.26 0.29 -0.18 0.19 -0.26 0.29 -0.25 0.29 -0.33 0.39 -0.25 0.29 -0.16 0.2 -0.24 0.3 -0.24 0.31 -0.23 0.3 -1.84 2.66 -5.03 0 -2.3 -3.27 -1.58 -1.86 -2.21 -2.22 -4.54 -3.55c-2.09,4.2 -3.36,8.75 -3.69,13.44l-0.07 1.3c-1.52,0.75 -2.98,1.6 -4.37,2.53l-3.62 -1.67 -6.19 -1.83 -0.66 -0.12 -0.34 -0.06 -0.33 -0.05 -0.22 -0.04 -0.67 -0.09 -0.79 -0.1 -0.57 -0.06 -0.91 -0.07 -0.34 -0.03 0.02 0.35 0.08 0.91 0.05 0.57 0.1 0.79 0.1 0.67 0.03 0.22 0.09 0.55 0.02 0.11 0.13 0.66c0.59,3.03 1.64,6.12 3.03,8.92l0.46 0.9c-0.93,1.39 -1.78,2.85 -2.52,4.37 -3.2,0.11 -6.46,0.67 -9.51,1.64l-3.17 1.16 -2.07 0.96 0.19 0.28 0.32 0.47 0.27 0.37 0.13 0.19 0.2 0.27 0.28 0.37c6.12,3.96 12.01,8.24 17.64,12.82 -0.03,-0.54 -0.04,-1.08 -0.04,-1.63 0,-16.61 13.47,-30.09 30.09,-30.09 16.62,0 30.09,13.48 30.09,30.09 0,0.55 -0.02,1.09 -0.05,1.63 5.64,-4.58 11.52,-8.86 17.64,-12.81l1.39 -1.97 -3.85 -1.65 -1.49 -0.5c-3.07,-0.94 -6.19,-1.5 -9.4,-1.6 -0.75,-1.52 -1.59,-2.98 -2.53,-4.37l1.67 -3.62zm-88.26 -3.61l1.67 7.17 1.89 4.46c4.53,-2.29 9.49,-3.75 14.56,-4.19l0.13 -0.01 -0.04 -0.15c-0.06,-0.14 -0.13,-0.28 -0.19,-0.43 -1.48,-3.29 -2.47,-6.65 -3.04,-10.22l-0.42 -4.05c-4.01,0.32 -6.99,0.85 -10.78,2.3l-4.04 1.84 0.26 3.28zm-3.96 2.51l-0.43 -3.21c-1.57,1.13 -3.04,2.39 -4.41,3.76l0 0c-1.08,1.07 -2.09,2.22 -3.03,3.43 3.74,1.87 7.41,3.86 11.01,5.96l-1.94 -5.01 -1.2 -4.93zm18.51 -14.3c0.21,-4.14 1.12,-8.41 2.61,-12.28l0.97 -2.31c-1.92,0.2 -3.82,0.55 -5.69,1.05 -2.86,0.77 -5.61,1.87 -8.18,3.3 -1.43,2.58 -2.54,5.33 -3.3,8.19 -0.51,1.87 -0.86,3.77 -1.05,5.69 3.53,-1.63 7.58,-2.8 11.45,-3.29l3.14 -0.29 0 -0.06 0.05 0zm4.31 0.06c3.08,0.17 6.12,0.69 9.08,1.55l5.62 2.11 0 -0.19 0.17 0.1c0.32,-3.84 1.31,-7.89 2.76,-11.45l1.43 -3.12c-2.69,-1.34 -5.43,-2.32 -8.36,-2.98l-6.55 -0.84c-1.67,3.13 -2.88,6.52 -3.55,10.01l-0.6 4.81zm25.97 -20.74l5.66 -4.88c-1.76,-0.79 -3.59,-1.44 -5.46,-1.94 -2.85,-0.76 -5.79,-1.18 -8.73,-1.23 -2.53,1.52 -4.87,3.35 -6.96,5.44 -1.37,1.36 -2.62,2.84 -3.75,4.4l2.38 0.3c4.22,0.66 8.23,1.96 12.04,3.9l0.03 -0.04 0.05 0.02 4.74 -5.97zm3.93 12l0.66 0.61 0.37 0.35 0.28 0.27 4.5 5.29 0.12 0.17 0.1 -0.16 0.09 0.16c2.34,-3.28 4.95,-6.05 8.12,-8.53l2.79 -1.99 -1.69 -2.36c-2.58,-3.33 -5.74,-6.18 -9.31,-8.4l-4.86 3.64 -3.15 3.17 -0.15 0.17 -0.22 0.26 -0.15 0.18 -0.29 0.35 -0.22 0.27 -0.14 0.18 -0.15 0.18 -0.14 0.19 -0.28 0.36 -0.2 0.28 -0.14 0.19 -0.2 0.28 -0.2 0.29 -0.13 0.19 -0.2 0.29 -0.19 0.29 1.85 1.28 0.94 0.71 0.2 0.16 0.21 0.17 0.7 0.57 0.3 0.25 0.2 0.17 0.58 0.52zm20.8 -6.01c3.63,-1.88 7.9,-3.26 11.94,-3.89l2.49 -0.31c-1.13,-1.56 -2.39,-3.04 -3.76,-4.4 -2.09,-2.09 -4.42,-3.92 -6.95,-5.44 -2.95,0.05 -5.88,0.47 -8.74,1.23 -1.87,0.5 -3.69,1.15 -5.46,1.94 3.08,2.21 5.83,4.77 8.18,7.75l2.23 3.1 0.04 -0.02 0.03 0.04zm2.09 3.75c2.3,4.55 3.76,9.48 4.2,14.57l0.16 -0.1 0 0.19c3.45,-1.59 6.91,-2.64 10.66,-3.23l4.04 -0.43c-0.32,-4.01 -0.85,-6.98 -2.3,-10.78l-1.84 -4.04c-4.81,0.19 -9.5,1.28 -13.87,3.32l-1.05 0.5zm34.63 13.21l3.39 1.37c-0.2,-1.92 -0.55,-3.82 -1.05,-5.69 -0.77,-2.86 -1.87,-5.61 -3.3,-8.19 -2.58,-1.43 -5.33,-2.53 -8.18,-3.3 -1.88,-0.5 -3.78,-0.85 -5.7,-1.05 2.11,4.79 3.31,9.34 3.58,14.59l0.06 0 0 0.06 7.66 1.15 3.54 1.06zm-11.26 2.1c-0.28,4.97 -1.43,9.74 -3.46,14.27 -0.07,0.15 -0.13,0.29 -0.2,0.43l0.19 0 -0.09 0.16c5.06,0.44 10.03,1.9 14.56,4.19 0.4,-0.79 0.77,-1.59 1.1,-2.4 1.19,-2.88 2,-5.85 2.42,-8.98l0.3 -3.53c-3.08,-1.64 -6.58,-2.9 -10.01,-3.54l-4.81 -0.6zm18.95 6.72l-1.22 6.72 -1.46 3.99 -0.9 2.44c3.6,-2.1 7.27,-4.09 11.01,-5.96 -2.12,-2.73 -4.63,-5.16 -7.43,-7.19z"/>
								</svg>
							</button>
						</div>
						<div className="box">
							<form
								className="form"
								onSubmit={event => {
									event.preventDefault()
									createToken({ variables: { username, password }, })
									setUsername('')
									setPassword('')
									event.target.reset()
								}}
							>
								{loading && <p className="message">loading...</p>}
								{error && <p className="message">{error.message}</p>}
								<div className="input">
									<label htmlFor="email">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.323 513.323">
											<path d="M256.661,257.323c-135.275,0-245.333,110.059-245.333,245.333c0,5.888,4.779,10.667,10.667,10.667 s10.667-4.779,10.667-10.667c0-123.52,100.48-224,224-224s224,100.48,224,224c0,5.888,4.779,10.667,10.667,10.667 c5.888,0,10.667-4.779,10.667-10.667C501.995,367.36,391.936,257.323,256.661,257.323z"/>
											<path d="M256.661,0c-64.683,0-117.333,52.629-117.333,117.333s52.651,117.333,117.333,117.333s117.333-52.629,117.333-117.333 S321.344,0,256.661,0z M256.661,213.333c-52.928,0-96-43.072-96-96s43.072-96,96-96c52.928,0,96,43.072,96,96 S309.589,213.333,256.661,213.333z"/>
										</svg>
									</label>
									<input
										type="text"
										autoComplete="off"
										placeholder="Username yoki email manzilingiz"
										spellCheck={false}
										onChange={event => setUsername(event.target.value)}
									/>
								</div>
								<div className="input">
									<label htmlFor="password">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
											<path d="M384,213.333H128c-29.419,0-53.333,23.936-53.333,53.333v192C74.667,488.064,98.581,512,128,512h256 c29.419,0,53.333-23.936,53.333-53.333v-192C437.333,237.269,413.419,213.333,384,213.333z M416,458.667c0,17.643-14.357,32-32,32 H128c-17.643,0-32-14.357-32-32v-192c0-17.643,14.357-32,32-32h256c17.643,0,32,14.357,32,32V458.667z"/>
											<path d="M256,0c-76.459,0-138.667,62.208-138.667,138.667V224c0,5.888,4.779,10.667,10.667,10.667h256 c5.888,0,10.667-4.779,10.667-10.667v-85.333C394.667,62.208,332.459,0,256,0z M373.333,213.333H138.667v-74.667 c0-64.704,52.651-117.333,117.333-117.333s117.333,52.629,117.333,117.333V213.333z"/>
											<path d="M256,362.667c-5.888,0-10.667,4.779-10.667,10.667v64c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667v-64 C266.667,367.445,261.888,362.667,256,362.667z"/>
											<path d="M256,277.333c-29.419,0-53.333,23.936-53.333,53.333S226.581,384,256,384c29.419,0,53.333-23.936,53.333-53.333 S285.419,277.333,256,277.333z M256,362.667c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32 C288,348.309,273.643,362.667,256,362.667z"/>
										</svg>
									</label>
									<input
										type="password"
										placeholder="Parol"
										autoComplete="current-password"
										onChange={event => setPassword(event.target.value)}
									/>
								</div>
								<button
									type="submit"
									disabled={disabled}
								>
									<span>Kirish</span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path d="M501.333,245.325H10.667C4.779,245.325,0,250.104,0,255.992s4.779,10.667,10.667,10.667h490.667 c5.888,0,10.667-4.779,10.667-10.667S507.221,245.325,501.333,245.325z"/>
										<path d="M508.864,248.461L338.197,77.795c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l170.667,170.667 c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115C513.024,259.384,513.024,252.621,508.864,248.461z"/>
										<path d="M508.864,248.461c-4.16-4.16-10.923-4.16-15.083,0L323.115,419.128c-4.16,4.16-4.16,10.923,0,15.083 c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115l170.667-170.667 C513.024,259.384,513.024,252.621,508.864,248.461z"/>
									</svg>
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="footer">
					<ul>
						<li>
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M256,490.667 c-129.387,0-234.667-105.28-234.667-234.667S126.613,21.333,256,21.333S490.667,126.613,490.667,256S385.387,490.667,256,490.667z"/>
									<path d="M84.843,327.488C80.981,315.2,72.64,306.859,65.28,299.499c-5.269-5.269-10.261-10.24-12.949-16.021 c-6.357-13.525-15.701-67.648-20.437-100.736c-0.832-5.867-6.315-9.877-12.075-9.067c-5.824,0.832-9.877,6.251-9.045,12.053 c1.237,8.747,12.501,86.059,22.229,106.816c4.309,9.131,11.157,15.979,17.195,22.016c6.443,6.421,12.011,11.989,14.293,19.307 c6.507,20.736,2.688,70.037,0.661,87.296c-0.683,5.867,3.499,11.157,9.344,11.84c0.427,0.064,0.832,0.085,1.259,0.085 c5.333,0,9.963-4.011,10.581-9.387C86.656,420.971,94.059,356.821,84.843,327.488z"/>
									<path d="M505.792,277.867c-5.867-4.288-12.501-14.784-18.901-24.96c-13.312-21.099-28.203-45.099-52.075-39.275 c-15.296,3.733-17.301,19.861-18.645,30.528c-0.192,1.643-0.448,3.691-0.747,5.675c-12.416-13.931-34.645-37.867-47.125-45.568 c-8.192-5.077-30.613-10.837-35.029-11.968c-3.904-0.96-8.107,0.363-10.731,3.456c-2.624,3.093-3.264,7.403-1.643,11.136 c1.536,3.499,15.04,34.368,22.464,44.651c3.179,4.395,10.731,11.797,16.405,17.109c-6.208,10.688-16.192,28.843-18.197,38.507 c-1.984,9.579-1.152,23.616-0.32,37.227c0.619,10.155,1.301,21.675,0.299,26.923c-3.947,20.288-42.901,53.419-65.152,55.403 c-8.555,0.555-26.347-10.027-31.211-33.685c0.043-1.984,2.816-7.68,4.48-11.051c3.243-6.656,6.336-12.949,6.336-19.307 c0-25.003-3.413-69.099-26.261-83.669c-10.731-6.827-26.795-4.629-42.325-2.453c-8.725,1.237-19.648,2.731-24.171,1.301 c-3.349-1.088-12.587-10.325-14.784-15.403c-3.541-8.192-4.053-27.712-0.853-32.597c19.072-29.312,26.133-35.477,36.437-38.187 c11.499-3.051,36.715-0.512,58.965,1.728c40.939,4.096,59.307,5.333,65.323-7.552c4.608-9.92,3.776-20.949-2.261-30.272 c-11.904-18.368-41.621-28.608-82.219-27.563c-13.013,0.192-24.853,7.104-35.285,13.205c-6.507,3.819-13.909,8.128-18.069,9.237 c-0.576-2.048,1.856-10.347,9.173-17.216c3.691-3.456,11.115-8.789,19.435-5.824c5.248,1.856,11.093-0.683,13.355-5.824 c3.221-7.424,7.787-16.939,9.792-19.712c6.336-8.789,25.621-35.52,36.267-38.165c4.288-0.811,21.141,3.947,36.053,10.155 c2.667,1.088,5.675,1.088,8.341-0.064c2.645-1.152,4.736-3.328,5.739-6.037c2.859-7.616,13.717-30.635,25.493-36.203 c5.312-2.517,7.595-8.875,5.077-14.208c-2.517-5.312-8.853-7.552-14.208-5.077c-15.211,7.189-26.304,26.133-32.043,38.08 c-12.416-4.565-29.824-9.728-39.552-7.36c-16.064,3.989-32.789,24.661-48.725,46.763c-2.411,3.328-5.739,10.048-8.277,15.531 c-12.096-0.981-24.107,4.48-33.92,14.997c-9.621,10.304-16.96,26.219-11.584,38.549c3.264,7.531,10.453,11.84,19.755,11.84 c9.771,0,18.944-5.376,28.672-11.051c8.555-5.013,17.408-10.176,24.811-10.283c38.293-0.811,58.197,8.853,64.021,17.813 c1.579,2.432,2.091,4.843,1.6,7.296c-7.723,1.429-29.696-0.811-44.651-2.304c-25.216-2.517-51.328-5.141-66.517-1.131 c-18.88,4.949-29.867,17.963-48.896,47.147c-8.533,13.141-6.165,40.427-0.853,52.736c3.669,8.469,16.661,23.68,27.883,27.264 c9.195,2.901,21.035,1.237,33.6-0.469c9.493-1.323,23.787-3.285,27.925-0.683c9.813,6.251,16.405,32.64,16.405,65.579 c-0.128,1.771-2.667,6.933-4.16,10.027c-3.883,7.936-7.915,16.171-6.272,24.192c6.592,32.448,31.125,51.285,51.285,51.285 c0.917,0,1.835-0.043,2.795-0.128c29.461-2.624,77.973-40.597,84.181-72.597c1.536-7.893,0.811-19.733,0.064-32.256 c-0.704-11.605-1.493-24.789-0.085-31.595c1.408-6.805,12.544-27.072,19.989-39.275c2.667-4.395,1.835-10.069-1.984-13.504 c-6.656-5.995-17.216-16.043-19.797-19.627c-2.453-3.392-6.485-11.179-10.539-19.605c3.2,1.131,5.696,2.155,6.933,2.923 c11.989,7.381,40.768,39.467,50.837,51.2c2.539,2.923,6.507,4.309,10.155,3.499c15.893-3.115,17.941-19.477,19.285-30.315 c0.469-3.904,1.387-11.115,2.517-12.459c8.768-1.792,19.947,15.659,28.971,29.952c7.829,12.373,15.189,24.064,24.32,30.763 c4.757,3.499,11.413,2.475,14.912-2.283C511.573,288.043,510.549,281.344,505.792,277.867z"/>
								</svg>
								<span>O'zbekcha</span>
							</button>
							<div>
								<ul>
									<li>
										<button>O'zbekcha</button>
									</li>
								</ul>
							</div>
						</li>
					</ul>
					<ul>
						<li>
							<button>
								<span>Yordam kerakmi</span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667">
									<path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333 S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224s100.48-224,224-224s224,100.48,224,224 S368.853,469.333,245.333,469.333z"/>
									<path d="M245.333,106.667c-41.173,0-74.667,33.493-74.667,74.667v21.333c0,5.888,4.779,10.667,10.667,10.667 S192,208.555,192,202.667v-21.333C192,151.936,215.915,128,245.333,128c29.419,0,53.333,23.936,53.333,53.333v16.149 c0,14.251-5.547,27.648-15.637,37.739l-26.496,26.496c-14.101,14.123-21.867,32.853-21.867,52.8v16.149 c0,5.888,4.779,10.667,10.667,10.667S256,336.555,256,330.667v-16.149c0-14.251,5.547-27.648,15.637-37.739l26.496-26.496 C312.235,236.16,320,217.429,320,197.483v-16.149C320,140.16,286.507,106.667,245.333,106.667z"/>
									<path d="M245.333,362.667C233.557,362.667,224,372.245,224,384c0,11.755,9.557,21.333,21.333,21.333s21.333-9.579,21.333-21.333 C266.667,372.245,257.109,362.667,245.333,362.667z"/>
								</svg>
							</button>
							<div>
								<ul>
									<li>
										<button>Parol unutdingizmi?</button>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Login
