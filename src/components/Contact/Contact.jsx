import classes from './contact.module.css';
import { TextInput } from '@mantine/core';
import { At } from 'tabler-icons-react';

const Contact = () => {
	return (
		<div className={classes.contact}>
			<div className={classes.detail}>
				<h3>35000+ ALREADY JOINED</h3>
				<div className={classes.divpara}>
					<p>Lorem ipsum, dtur adipisicing elit. Ut harum maxime saepe.</p>
				</div>
				<div className={classes.emailcont}>
					<TextInput placeholder="Your email" size={'lg'} icon={<At size={20} />} />
					<button>Contact Us</button>
				</div>
			</div>
		</div>
	);
};
export default Contact;
