import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { Link } from 'react-scroll';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';

function App() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	console.log(scrollPosition);

	useEffect(() => {
		if (scrollPosition > 400) {
			setIsScrolling(true);
		} else {
			setIsScrolling(false);
		}
	}, [scrollPosition]);

	return (
		<>
			<Header />
			<Body />
			<div className="uparrowcont">
				{isScrolling && (
					<Link to="header" className="arrow" smooth={true}>
						<BsArrowUpCircleFill />
					</Link>
				)}
			</div>
		</>
	);
}

export default App;
