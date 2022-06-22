import { useState } from 'react';
import classes from './faq.module.css';
import FaqList from './FaqList';

const FAQ_QUESTION = [
	{
		question: 'What is a bookmark?',
		answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elitLorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt.dolor sit amet consectetur adipisicing elit.',
	},
	{
		question: 'What is a landing page?',
		answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deseLorem ipsum, dolor sit amet consectetur adipisicing elitrunt.dolor sit amet consectetur adipisicing elit.',
	},
	{
		question: 'How can I request a new browser?',
		answer: 'Lorem ipsum, dolor sit ame  Lorem ipsum, dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. Sit, deserunt.dolor sit amet consectetur adipisicing elit.',
	},
	{
		question: 'Is there a mobile app?',
		answer: 'Lorem ipsum, dolor sit amLorem ipsum, dolor sit amet consectetur adipisicing elitet consectetur adipisicing elit. Sit, deserunt.dolor sit amet consectetur adipisicing elit.',
	},
	{
		question: 'What about other Chromium browsers?',
		answer: 'Lorem ipsum, dolor sit amet consecLorem ipsum, dolor sit amet consectetur adipisicing elittetur adipisicing elit. Sit, deserunt.dolor sit amet consectetur adipisicing elit.',
	},
];

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState();

	return (
		<section className={classes.faqsection}>
			<article className={classes.faqarticle}>
				<h2 className={classes.heading}>Frequently Asked Questions</h2>
				<div className={classes.paradiv}>
					<p className={classes.para}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
						reprehenderit obcaecati hic soluta voluptatem qui temporibus, corporis
						commodi ratione amet.
					</p>
				</div>
			</article>

			{FAQ_QUESTION.map((data, index) => {
				return (
					<FaqList
						onClick={() => {
							activeIndex !== undefined && activeIndex === index
								? setActiveIndex(undefined)
								: setActiveIndex(index);
						}}
						visible={activeIndex === index}
						key={index}
						answer={data.answer}
						question={data.question}
						index={index}
					/>
				);
			})}
			<div className={classes.btn}>
				<button>More Info</button>
			</div>
		</section>
	);
};
export default Faq;
