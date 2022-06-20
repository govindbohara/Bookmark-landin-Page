import classes from './footer.module.css';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.detail}>
				<div className={classes.logo}>
					<img
						onClick={() => {
							scroll.scrollToTop();
						}}
						className={classes.mainlogo}
						src="/photos/logo-bookmark.svg"
					/>
				</div>
				<div className={classes.footitems}>
					<Link className={classes.foot} to="features" smooth={true}>
						FEATURES
					</Link>
					<Link className={classes.foot} to="extension" smooth={true}>
						PRICING
					</Link>
					<Link className={classes.foot} to="contact" smooth={true}>
						CONTACT
					</Link>
				</div>
			</div>
			<div className={classes.company}>
				<a>
					<img src="/photos/icon-facebook.svg" />
				</a>
				<a>
					<img src="/photos/icon-twitter.svg" />
				</a>
			</div>
		</footer>
	);
};
export default Footer;
