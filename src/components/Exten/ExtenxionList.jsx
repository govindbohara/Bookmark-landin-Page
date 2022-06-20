import classes from './extensionlist.module.css';
const ExtensionList = () => {
	return (
		<article className={classes.article}>
			<div className={classes.chrome}>
				<div className={classes.logodetail}>
					<img src="/public/photos/logo-chrome.svg" />
					<h3>Add to chrome</h3>
					<p>Mininmum version 62</p>
				</div>
				<div className={classes.imgdetail}>
					<img src="/public/photos/bg-dots.svg" />
					<div className={classes.btn}>
						<button>Add & Install Extension</button>
					</div>
				</div>
			</div>
			<div className={classes.firefox}>
				<div className={classes.logodetail}>
					<img src="/public/photos/logo-firefox.svg" />
					<h3>Add to firefox</h3>
					<p>Mininmum version 55</p>
				</div>
				<div className={classes.imgdetail}>
					<img src="/public/photos/bg-dots.svg" />
					<div className={classes.btn}>
						<button>Add & Install Extension</button>
					</div>
				</div>
			</div>
			<div className={classes.opera}>
				<div className={classes.logodetail}>
					<img src="/public/photos/logo-opera.svg" />
					<h3>Add to opera</h3>
					<p>Mininmum version 46</p>
				</div>
				<div className={classes.imgdetail}>
					<img src="/public/photos/bg-dots.svg" />
					<div className={classes.btn}>
						<button>Add & Install Extension</button>
					</div>
				</div>
			</div>
		</article>
	);
};
export default ExtensionList;
