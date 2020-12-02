import { gql } from '@apollo/client'

const COURSES = gql `
	query courses($page: Number, $size: Number) {
		courses(page: $page, size: $size) {
			id
			name
			description
			isOpen
		}
	}
`

export {
	COURSES,
}
