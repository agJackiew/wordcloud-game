import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const ButtonLink = (props) => {
	return <Link to={props.linkTo} className={styles.btn}>{props.text}</Link>
};

export default ButtonLink;