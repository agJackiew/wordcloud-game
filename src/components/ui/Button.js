import styles from './Button.module.scss';

const Button = (props) => {

	return (
		<button className={`${styles.btn} ${props.disabled ? styles.btn__disabled : ''}`} type={props.type} onClick={props.onClick} disabled={props.disabled}>
			{props.text}
		</button>
	)
}

export default Button;	