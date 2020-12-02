import useAccount from '../../../Hooks/useAccount.js'
import './Navigation.css'

function Navigation () {

	const [user, dispatch] = useAccount()

	return (
		<>
			<nav id="school">
				<ul>
					<li>
						<button>
							<span>{user.username}</span>
						</button>
						<div>
							<ul>
								<li>
									<button
										onClick={() => dispatch({ type: 'logout', })}
									>
										<span>Chiqish</span>
									</button>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
