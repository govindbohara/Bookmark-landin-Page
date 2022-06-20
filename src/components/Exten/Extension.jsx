import classes from './extension.module.css';
import ExtensionList from './ExtenxionList';
const Extension = () => {
	return (
		<main className={classes.extensionmain}>
			<section>
				<h2>Download Extension</h2>
				<div className={classes.paradiv}>
					<p className={classes.para}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
						eaque at minus deserunt
					</p>
				</div>

				<ExtensionList />
			</section>
		</main>
	);
};
export default Extension;
