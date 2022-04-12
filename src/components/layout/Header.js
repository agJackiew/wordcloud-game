import styles from './Header.module.scss';
import cloud from '../../assets/cloud.svg';

const Header = (props) => {

	return (
		<div className={styles.header}>
			<img src={cloud} alt="logo" className={styles.logo} />
			<div>Word Cloud Game</div>		
		</div>
	);
};

export default Header;