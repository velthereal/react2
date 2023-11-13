import './Footer.css';
import FooterItem from "../FooterItem";

const Footer = () => {
	return(
	<div className="footer">
		<FooterItem content="First elem" isLowerCaseText={false} />
		<FooterItem content="Second elem" isLowerCaseText={false} />
		<FooterItem content="Third elem" isLowerCaseText={true} />
		<FooterItem content="Fourth elem" isLowerCaseText={true} />
	</div>
	);
}
export default Footer;