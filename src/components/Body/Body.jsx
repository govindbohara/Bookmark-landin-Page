import BodyContent from './BodyContent';
import Features from '../Features/Features';
import Extension from '../Exten/Extension';
import Faq from '../Faq/Faq';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Body = () => {
	return (
		<div id="body">
			<BodyContent />
			<Features />
			<Extension />
			<Faq />
			<Contact />
			<Footer />
		</div>
	);
};
export default Body;
