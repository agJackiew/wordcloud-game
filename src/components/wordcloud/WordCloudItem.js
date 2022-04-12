import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './WordCloudItem.module.scss';
import useRandom from '../../hooks/useRandom';
import { gameActions } from '../../store/index';

const WordCloudItem = (props) => {

	const dispatch = useDispatch();

	const [isChos, setIsChos] = useState(false);
	const [color, setColor] = useState('');

	//create random margins on list items
	const { getRandom } = useRandom();
	const weight = useMemo(() => getRandom(1, 9), []);

	const answer = props.item.isGood ? "Good" : "Bad";

	const chooseHandler = () => {
		setIsChos(isChos => !isChos);
		dispatch(gameActions.chooseAnswer({...props.item, isChosen: !isChos}));
	};

	useEffect(() => {
		if (props.isVerified && isChos) {
			if (isChos === props.item.isGood) {
				setColor('item--green');
			}
			else if (isChos !== props.item.isGood) {
				setColor('item--red');
			}
		}
	}, [isChos, props.isVerified, props.item.isGood, setColor])

	
	return (
		<li 
			data-weight={weight} 
			className={`${styles['item']} ${styles[color]} ${styles[props.isVerified ? 'item--unclickable' : '']} `} 
		>
			<p className={`${styles['item__answer']} ${props.isVerified && styles['item__answer--vis']}`}>{answer}</p>
			<p className={isChos ? styles.item__chosen : ''} onClick={chooseHandler}>{props.item.value}</p>
		</li>
	);
};

export default WordCloudItem;