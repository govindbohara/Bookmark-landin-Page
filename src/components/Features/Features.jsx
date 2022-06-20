import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import FeatureList from './FeatureList';
import classes from './features.module.css';
const FEATURE_DATA = [
	{
		name: 'Bookmarks in one click',
		image: '/public/photos/illustration-features-tab-1.svg',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. , recusandae distinctio. Dolorum.',
	},
	{
		name: 'Intelligent Search',
		image: '/public/photos/illustration-features-tab-2.svg',
		description:
			'Lorem, ipsum dolor sit amet  dolores laboriosam totam quasi vel omnis cum ut similique sequi tempora quidem, recusandae distinctio. Dolorum.',
	},
	{
		name: 'Share your bookmarks',
		image: '/public/photos/illustration-features-tab-3.svg',
		description:
			'Lorem, ipsum dolor sit amet  tempora quidem, recusandae distinctio. Dolorum.',
	},
];

const Features = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<main className={classes.mainfeature}>
			<div className={classes.leftcolored}></div>
			<section className={classes.sectionone}>
				<h1 className={classes.head}>Features</h1>
				<p className={classes.para}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque culpa
					quisquam, rerum vero est tempore ullam praesentium optio ducimus magni
					minima, reiciendis temporibus quasi at!
				</p>
				<div className={classes.buttons}>
					<button
						data-highlight={activeIndex === 0 ? 'true' : 'false'}
						onClick={() => {
							setActiveIndex(0);
						}}
					>
						Simple Bookmarking
					</button>
					<button
						data-highlight={activeIndex === 1 ? 'true' : 'false'}
						onClick={() => {
							setActiveIndex(1);
						}}
					>
						Speedy Searching
					</button>
					<button
						data-highlight={activeIndex === 2 ? 'true' : 'false'}
						onClick={() => {
							setActiveIndex(2);
						}}
					>
						Easy Sharing
					</button>
				</div>
			</section>
			<section>
				<FeatureList
					name={FEATURE_DATA[activeIndex].name}
					description={FEATURE_DATA[activeIndex].description}
					image={FEATURE_DATA[activeIndex].image}
				/>
				;
			</section>
		</main>
	);
};
export default Features;
