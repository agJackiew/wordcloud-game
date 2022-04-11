import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './WordCloud.module.scss';
import Button from '../ui/Button';
import ButtonLink from '../ui/ButtonLink';
import WordCloudItem from './WordCloudItem';
import { gameActions } from '../../store/index';

const WordCloud = (props) => {

	const dispatch = useDispatch();

	const words = useSelector(state => state.game.words);
	const question = useSelector(state => state.game.question);
	const goods = useSelector(state => state.game.goodAnswers);
	const bads = useSelector(state => state.game.badAnswers);

	const [isVerified, setIsVerified] = useState(false);

	const verifyHandler = () => {
		setIsVerified(true);
		
		dispatch(gameActions.checkAnswers());
		
	};

	return (
		<Fragment>
			<div className={styles.heading}>{question}</div>
			<div className={styles.container}>	
				<ul className={styles.cloud}>
					{words.map((item, index) => 
						(<WordCloudItem 
							key={index} 
							item={item} 
							isVerified={isVerified}
							
						/>)
					)}
				</ul>
			</div>
			{!isVerified ? <Button type="button" text="Check Answers" onClick={verifyHandler} />
				: <ButtonLink text="Finish Game" linkTo="/result" />}
		</Fragment>
	);
};

export default WordCloud;