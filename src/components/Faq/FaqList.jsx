import { useState } from 'react';
import classes from './faqlist.module.css';
const FaqList = props => {
	const { answer, question, onClick, visible } = props;

	return (
		<div className={classes.faqlist}>
			<div className={classes.head}>
				<h3>{question}</h3>
				<div className={classes.image} onClick={onClick}>
					{!visible ? (
						<img src={'/public/photos/icon-arrow.svg'} />
					) : (
						<img src={'/public/photos/icon-close.svg'} />
					)}
				</div>
			</div>
			<div className={classes.paradiv}>{visible && <p>{answer}</p>}</div>
			<div></div>
		</div>
	);
};
export default FaqList;
