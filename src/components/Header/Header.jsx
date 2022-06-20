import classes from './header.module.css';
import { Link } from 'react-scroll';

const Header = () => {
	return (
		<>
			<nav className={classes.navbar} id="header">
				<div className={classes.logo}>
					<Link to="header" smooth={true}>
						<img src="/photos/logo-bookmark.svg" />
					</Link>
				</div>
				<div className={classes.navitems}>
					<Link className={classes.a} to="features" smooth={true}>
						FEATURES
					</Link>
					<Link className={classes.a} to="extension" smooth={true}>
						PRICING
					</Link>
					<Link className={classes.a} to="contact" smooth={true}>
						CONTACT
					</Link>
					<button>LOGIN</button>
				</div>
			</nav>
		</>
	);
};
export default Header;
