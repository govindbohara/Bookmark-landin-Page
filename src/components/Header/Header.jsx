import classes from './header.module.css';

const Header = () => {
	return (
		<>
			<nav className={classes.navbar}>
				<div className={classes.logo}>
					<img src="/public/photos/logo-bookmark.svg" />
				</div>
				<div className={classes.navitems}>
					<a>FEATURES</a>
					<a>PRICING</a>
					<a>CONTACT</a>
					<button>LOGIN</button>
				</div>
			</nav>
		</>
	);
};
export default Header;
