import './Courses.css'
import Navigation from '../../../Components/Private/Navigation/Navigation.jsx'
import Slider from '../../../Components/Public/Slider/Slider.jsx'
import { COURSES } from './Graphql.js'
import { useQuery } from '@apollo/client'

function Courses () {

	const { loading, error, data: courses } = useQuery(COURSES)

	return (
		<>
			<Navigation />
			<div className="courses">
				{loading && <p>loading</p>}
				{error && <p>{error.message}</p>}
				{courses && (
					<>
						<Slider
							offset="4vmin"
							space="4vmin"
						>
							<ul>
							{
								courses.courses.slice(1).map((course, i) => (
									<li key={i}>
										<button disabled={!course.isOpen}>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235 234.62">
												<path d="M91.62 197.72c-12.64,3.96 -25.96,6.4 -39.73,7.12 -0.79,10.76 -3.9,20.88 -8.84,29.85 0.1,0 0.19,0 0.29,0 21.24,0 41.68,-3.47 60.76,-9.88 -3.28,-9.49 -7.47,-18.56 -12.48,-27.09zm19.14 -40.75c-17.89,-22.86 -40.87,-41.54 -67.25,-54.33 0,0 0,0 0,0 -15.31,3.93 -30.13,9.06 -44.36,15.29 39.29,9.71 72.9,33.82 94.92,66.41 4.84,-9.59 10.43,-18.74 16.69,-27.37zm79.04 -54.33c-26.37,12.79 -49.36,31.47 -67.25,54.33 6.26,8.63 11.86,17.77 16.7,27.37 22.01,-32.59 55.62,-56.7 94.91,-66.41 -14.23,-6.23 -29.05,-11.36 -44.35,-15.29 -0.01,0 -0.01,0 -0.01,0zm-48.11 95.08c-5,8.53 -9.2,17.6 -12.48,27.09 19.09,6.41 39.52,9.88 60.77,9.88 0.07,0 0.15,0 0.23,0 -4.94,-8.97 -8.05,-19.09 -8.84,-29.85 -13.75,-0.72 -27.05,-3.17 -39.68,-7.12z"/>
												<path d="M116.66 234.69c3.69,-14.54 9.36,-28.29 16.69,-40.95 -4.73,-10.12 -10.33,-19.76 -16.69,-28.82 -6.37,9.06 -11.96,18.7 -16.7,28.82 7.34,12.66 13,26.41 16.7,40.95z"/>
												<path d="M116.68 48.85c5.87,-3.15 12.38,-4.79 19.05,-4.8l1.07 0.29c5.77,3.33 10.6,8.02 14.11,13.68l0.02 0 0.01 0.01c6.65,0.22 13.11,2.05 18.89,5.38l0.79 0.79c3.33,5.78 5.16,12.24 5.38,18.89l0.02 0.01 0 0.02c4.36,2.71 8.14,6.2 11.18,10.31 0.93,-0.43 1.85,-0.86 2.78,-1.29l0 -18.76c0,-43.99 -48.88,-48.88 -73.32,-73.32 -24.44,24.44 -73.32,29.33 -73.32,73.32l0 18.77c0.93,0.42 1.85,0.85 2.77,1.29 1.19,-1.61 2.5,-3.13 3.91,-4.55l0 0c2.19,-2.19 4.63,-4.12 7.28,-5.77l0 -0.02 0.02 -0.01c0.21,-6.66 2.05,-13.11 5.38,-18.89l0.79 -0.79c5.77,-3.33 12.23,-5.16 18.88,-5.38l0.01 -0.01 0.02 0c3.51,-5.66 8.34,-10.35 14.11,-13.68l1.08 -0.29c6.66,0.01 13.18,1.65 19.05,4.8l0.02 -0.02 0.02 0.02zm33.45 43.63c1.03,-2.55 1.76,-5.36 2.15,-8.08l0.3 -2.95 -4.17 0.5 -4.55 1.13 -3.13 1.16 -2.8 1.33c-1.39,-0.94 -2.85,-1.78 -4.36,-2.53 -0.13,-3.58 -0.8,-7.07 -1.96,-10.47l-0.15 -0.42 -0.24 -0.63 -0.16 -0.42 -0.21 -0.53 -0.27 -0.62 -0.23 -0.52 -0.24 -0.52 -0.25 -0.51 -0.05 -0.1 -5.68 4.65 -0.27 0.28 -0.45 0.46 -0.26 0.29 -0.18 0.19 -0.26 0.29 -0.25 0.29 -0.33 0.39 -0.25 0.29 -0.16 0.2 -0.24 0.3 -0.24 0.31 -0.23 0.3 -1.84 2.66 -5.03 0 -2.3 -3.27 -1.58 -1.86 -2.21 -2.22 -4.54 -3.55c-2.09,4.2 -3.36,8.75 -3.69,13.44l-0.07 1.3c-1.52,0.75 -2.98,1.6 -4.37,2.53l-3.62 -1.67 -6.19 -1.83 -0.66 -0.12 -0.34 -0.06 -0.33 -0.05 -0.22 -0.04 -0.67 -0.09 -0.79 -0.1 -0.57 -0.06 -0.91 -0.07 -0.34 -0.03 0.02 0.35 0.08 0.91 0.05 0.57 0.1 0.79 0.1 0.67 0.03 0.22 0.09 0.55 0.02 0.11 0.13 0.66c0.59,3.03 1.64,6.12 3.03,8.92l0.46 0.9c-0.93,1.39 -1.78,2.85 -2.52,4.37 -3.2,0.11 -6.46,0.67 -9.51,1.64l-3.17 1.16 -2.07 0.96 0.19 0.28 0.32 0.47 0.27 0.37 0.13 0.19 0.2 0.27 0.28 0.37c6.12,3.96 12.01,8.24 17.64,12.82 -0.03,-0.54 -0.04,-1.08 -0.04,-1.63 0,-16.61 13.47,-30.09 30.09,-30.09 16.62,0 30.09,13.48 30.09,30.09 0,0.55 -0.02,1.09 -0.05,1.63 5.64,-4.58 11.52,-8.86 17.64,-12.81l1.39 -1.97 -3.85 -1.65 -1.49 -0.5c-3.07,-0.94 -6.19,-1.5 -9.4,-1.6 -0.75,-1.52 -1.59,-2.98 -2.53,-4.37l1.67 -3.62zm-88.26 -3.61l1.67 7.17 1.89 4.46c4.53,-2.29 9.49,-3.75 14.56,-4.19l0.13 -0.01 -0.04 -0.15c-0.06,-0.14 -0.13,-0.28 -0.19,-0.43 -1.48,-3.29 -2.47,-6.65 -3.04,-10.22l-0.42 -4.05c-4.01,0.32 -6.99,0.85 -10.78,2.3l-4.04 1.84 0.26 3.28zm-3.96 2.51l-0.43 -3.21c-1.57,1.13 -3.04,2.39 -4.41,3.76l0 0c-1.08,1.07 -2.09,2.22 -3.03,3.43 3.74,1.87 7.41,3.86 11.01,5.96l-1.94 -5.01 -1.2 -4.93zm18.51 -14.3c0.21,-4.14 1.12,-8.41 2.61,-12.28l0.97 -2.31c-1.92,0.2 -3.82,0.55 -5.69,1.05 -2.86,0.77 -5.61,1.87 -8.18,3.3 -1.43,2.58 -2.54,5.33 -3.3,8.19 -0.51,1.87 -0.86,3.77 -1.05,5.69 3.53,-1.63 7.58,-2.8 11.45,-3.29l3.14 -0.29 0 -0.06 0.05 0zm4.31 0.06c3.08,0.17 6.12,0.69 9.08,1.55l5.62 2.11 0 -0.19 0.17 0.1c0.32,-3.84 1.31,-7.89 2.76,-11.45l1.43 -3.12c-2.69,-1.34 -5.43,-2.32 -8.36,-2.98l-6.55 -0.84c-1.67,3.13 -2.88,6.52 -3.55,10.01l-0.6 4.81zm25.97 -20.74l5.66 -4.88c-1.76,-0.79 -3.59,-1.44 -5.46,-1.94 -2.85,-0.76 -5.79,-1.18 -8.73,-1.23 -2.53,1.52 -4.87,3.35 -6.96,5.44 -1.37,1.36 -2.62,2.84 -3.75,4.4l2.38 0.3c4.22,0.66 8.23,1.96 12.04,3.9l0.03 -0.04 0.05 0.02 4.74 -5.97zm3.93 12l0.66 0.61 0.37 0.35 0.28 0.27 4.5 5.29 0.12 0.17 0.1 -0.16 0.09 0.16c2.34,-3.28 4.95,-6.05 8.12,-8.53l2.79 -1.99 -1.69 -2.36c-2.58,-3.33 -5.74,-6.18 -9.31,-8.4l-4.86 3.64 -3.15 3.17 -0.15 0.17 -0.22 0.26 -0.15 0.18 -0.29 0.35 -0.22 0.27 -0.14 0.18 -0.15 0.18 -0.14 0.19 -0.28 0.36 -0.2 0.28 -0.14 0.19 -0.2 0.28 -0.2 0.29 -0.13 0.19 -0.2 0.29 -0.19 0.29 1.85 1.28 0.94 0.71 0.2 0.16 0.21 0.17 0.7 0.57 0.3 0.25 0.2 0.17 0.58 0.52zm20.8 -6.01c3.63,-1.88 7.9,-3.26 11.94,-3.89l2.49 -0.31c-1.13,-1.56 -2.39,-3.04 -3.76,-4.4 -2.09,-2.09 -4.42,-3.92 -6.95,-5.44 -2.95,0.05 -5.88,0.47 -8.74,1.23 -1.87,0.5 -3.69,1.15 -5.46,1.94 3.08,2.21 5.83,4.77 8.18,7.75l2.23 3.1 0.04 -0.02 0.03 0.04zm2.09 3.75c2.3,4.55 3.76,9.48 4.2,14.57l0.16 -0.1 0 0.19c3.45,-1.59 6.91,-2.64 10.66,-3.23l4.04 -0.43c-0.32,-4.01 -0.85,-6.98 -2.3,-10.78l-1.84 -4.04c-4.81,0.19 -9.5,1.28 -13.87,3.32l-1.05 0.5zm34.63 13.21l3.39 1.37c-0.2,-1.92 -0.55,-3.82 -1.05,-5.69 -0.77,-2.86 -1.87,-5.61 -3.3,-8.19 -2.58,-1.43 -5.33,-2.53 -8.18,-3.3 -1.88,-0.5 -3.78,-0.85 -5.7,-1.05 2.11,4.79 3.31,9.34 3.58,14.59l0.06 0 0 0.06 7.66 1.15 3.54 1.06zm-11.26 2.1c-0.28,4.97 -1.43,9.74 -3.46,14.27 -0.07,0.15 -0.13,0.29 -0.2,0.43l0.19 0 -0.09 0.16c5.06,0.44 10.03,1.9 14.56,4.19 0.4,-0.79 0.77,-1.59 1.1,-2.4 1.19,-2.88 2,-5.85 2.42,-8.98l0.3 -3.53c-3.08,-1.64 -6.58,-2.9 -10.01,-3.54l-4.81 -0.6zm18.95 6.72l-1.22 6.72 -1.46 3.99 -0.9 2.44c3.6,-2.1 7.27,-4.09 11.01,-5.96 -2.12,-2.73 -4.63,-5.16 -7.43,-7.19z"/>
											</svg>
											<h1>{course.name}</h1>
											<p>{!course.isOpen ? course.description : 'Tez kunda'}</p>
										</button>
									</li>
								))
							}
							</ul>
						</Slider>
					</>
				)}
			</div>
		</>
	)
}

export default Courses
