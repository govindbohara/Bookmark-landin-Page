import classes from './featurelist.module.css';
import { motion } from 'framer-motion';
import { useId } from 'react';

const FeatureList = props => {
	const { name, image, description } = props;
	const id = useId();
	return (
		<section className={classes.featureslist}>
			<div>
				<img src={image} />
			</div>
			<div className={classes.featurehead}>
				<h2>{name}</h2>
				<p className={classes.para}>{description}</p>
				<button>More Info</button>
			</div>
		</section>
	);
};
export default FeatureList;
