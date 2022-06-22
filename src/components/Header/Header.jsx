import classes from './header.module.css';
import { Link } from 'react-scroll';

const Header = () => {
	return (
		<>
			<nav className={classes.navbar} id="header">
				<div className={classes.logo}>
					<Link to="header" smooth={true} duration={1000}>
						<img src="/photos/logo-bookmark.svg" />
					</Link>
				</div>
				<div className={classes.navitems}>
					<Link className={classes.a} to="features" smooth={true} duration={1000}>
						FEATURES
					</Link>
					<Link className={classes.a} to="extension" smooth={true} duration={1000}>
						PRICING
					</Link>
					<Link className={classes.a} to="contact" smooth={true} duration={1000}>
						CONTACT
					</Link>
					<button>LOGIN</button>
				</div>
			</nav>
		</>
	);
};
export default Header;
