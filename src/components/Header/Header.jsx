import './Header.css';
import NavigationItem from "../NavigationItem";

const Header = () => {
	return(
		<div className="common-header">
			<NavigationItem text='First elem' isUpperCaseText={true} />
			<NavigationItem text='Second elem' isUpperCaseText={false} />
			<NavigationItem text='Third elem' isUpperCaseText={false} />
			<NavigationItem text='Fourth elem' isUpperCaseText={true} />
		</div>
	);
}
export default Header;