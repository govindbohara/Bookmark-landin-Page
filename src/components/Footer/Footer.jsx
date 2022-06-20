import classes from './footer.module.css';
const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.detail}>
				<div className={classes.logo}>
					<img className={classes.mainlogo} src="/photos/logo-bookmark.svg" />
				</div>
				<div className={classes.footitems}>
					<a>FEATURES</a>
					<a>PRICING</a>
					<a>CONTACT</a>
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
