import useAccount from '../../../Hooks/useAccount.js'

function Navigation () {

	const [user, dispatch] = useAccount()

	return (
		<>
			<code>{JSON.stringify(user)}</code>
			<nav id="school">
				<ul>
					<li>
						<button>
							<span>Hisob</span>
						</button>
						<ul>
							<li>
								<button
									onClick={() => dispatch({ type: 'logout', })}
								>
									<span>Chiqish</span>
								</button>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
