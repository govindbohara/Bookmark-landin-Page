import { useState } from 'react';
import classes from './faqlist.module.css';
import { AnimatePresence, motion } from 'framer-motion';

const FaqList = props => {
	const { answer, question, onClick, visible } = props;

	return (
		<div className={classes.faqlist}>
			<div className={classes.head}>
				<h3>{question}</h3>
				<div className={classes.image} onClick={onClick}>
					{!visible ? (
						<img src={'/photos/icon-arrow.svg'} />
					) : (
						<img src={'/photos/icon-arrow.svg'} className={classes.up} />
					)}
				</div>
			</div>
			<div className={classes.paradiv}>
				<AnimatePresence>
					{visible && (
						<motion.p
							initial={{ opacity: 0, translateY: '15px', visibility: 'hidden' }}
							animate={{ opacity: 1, translateY: 0, visibility: 'visible' }}
							transition={{ duration: 0.5 }}
						>
							{answer}
						</motion.p>
					)}
				</AnimatePresence>
			</div>
			<div></div>
		</div>
	);
};
export default FaqList;
