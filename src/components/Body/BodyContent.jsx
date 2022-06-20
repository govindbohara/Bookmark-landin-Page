import classes from './bodycontent.module.css';

const BodyContent = () => {
	return (
		<>
			<main className={classes.main}>
				<section className={classes.content}>
					<div className={classes.header}>
						<h2>A Simple Bookmark</h2>
						<h2>Manager</h2>
					</div>
					<div className={classes.para}>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
							sint id incidunt facilis dolor, nam velit a quae at facere ipsam
							illum harum voluptas non!
						</p>
					</div>

					<div className={classes.buttons}>
						<button className={classes.b1}>Get it on Chrome</button>
						<button className={classes.b2}>Get it on Firefox</button>
					</div>
					<div className={classes.colored}></div>
				</section>
				<section className={classes.section}>
					<div className={classes.image}>
						<img
							className={classes.img}
							src="/photos/illustration-hero.svg"
							alt="background"
						/>
					</div>
				</section>
			</main>
		</>
	);
};
export default BodyContent;
