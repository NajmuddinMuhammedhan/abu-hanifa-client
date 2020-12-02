import { gql } from '@apollo/client'

const CREATE_TOKEN = gql `
	mutation createToken($username: String!, $password: String!) {
		createToken(username: $username, password: $password) {
			token
			user {
				id username role joined
			}
		}
	}
`

export {
	CREATE_TOKEN,
}
