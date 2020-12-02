import React, { useRef, useState, useLayoutEffect, useEffect } from 'react'

function Slider ({
	children,
	wide = 4,
	medium = 2,
	small = 1,
}) {

	const sliderRef = useRef()
	const [index, setIndex] = useState(0)
	const [count, setCount] = useState(window.innerWidth > 1441 ? wide : window.innerWidth > 561 ? medium : small)
	const [leftDisabled, setLeftDisabled] = useState(false)
	const [rightDisabled, serRightDisabled] = useState(false)

	useLayoutEffect(() => {

		sliderRef.current.children[0].style.display = 'flex'
		sliderRef.current.children[0].style.flexDirection = 'row'
		sliderRef.current.children[0].style.willChange = 'transform'
		sliderRef.current.children[0].style.transform = 'translateX(var(--translateX))'

		Array.from(sliderRef.current.children[0].children).forEach(li => {
			li.style.width = `calc(100% / ${count})`
			li.style.flexShrink = 0
		})

	}, [
		count,
	])

	useEffect(() => {

		const resize = event => {
			setCount(event.target.innerWidth > 1025 ? wide : event.target.innerWidth > 461 ? medium : small)
		}

		window.addEventListener('resize', resize)

		return () => {
			window.removeEventListener('resize', resize)
		}

	}, [
		wide,
		medium,
		small,
	])

	useEffect(() => {

		const length = sliderRef.current.children[0].children.length
		const moveIndex = length - index * count >= count ? index * count : length - count

		setLeftDisabled(index === 0)
		serRightDisabled(moveIndex + count === length)
		sliderRef.current.style.setProperty('--translateX', '-' + ( moveIndex * (100 / count) ) + '%')

	}, [
		count,
		index,
	])

	return (
		<>
			<div className="slider" style={{ overflow: 'hidden', }}>
				<div ref={sliderRef} className="wrapper">
					{
						children
					}
				</div>
				<button className="prev" disabled={leftDisabled} onClick={() => setIndex(i => i - 1)}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823">
						<path d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z"/>
					</svg>
				</button>
				<button className="next" disabled={rightDisabled} onClick={() => setIndex(i => i + 1)}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792.033 792.033">
						<path d="M617.858,370.896L221.513,9.705c-13.006-12.94-34.099-12.94-47.105,0c-13.006,12.939-13.006,33.934,0,46.874 l372.447,339.438L174.441,735.454c-13.006,12.94-13.006,33.935,0,46.874s34.099,12.939,47.104,0l396.346-361.191 c6.932-6.898,9.904-16.043,9.441-25.087C627.763,386.972,624.792,377.828,617.858,370.896z"/>
					</svg>
				</button>
			</div>
		</>
	)
}

export default Slider
