import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './ResultPage.module.scss';
import Button from '../components/ui/Button';
import usePrepareData from '../hooks/usePrepareData';
import { gameActions } from '../store/index';

const ResultPage = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const nick = useSelector(state => state.user.nickname);
	const result = useSelector(state => state.game.result);
	const data = usePrepareData();

	const newGameHandler = () => {
		dispatch(gameActions.initGame(data));
		navigate('/game');
	};

	return (
		<section className={styles.container}>
			<div>
				<p>Congratulations,</p>
				<p className={styles.result}>{nick}</p>
				<p>
					<span>Your score:&nbsp;</span>
					<span className={styles.result}>{result}</span>
					<span>&nbsp;{result === 1 ? "point" : "points"}</span>
				</p>
			</div>
			<Button text="New Game" type="button" onClick={newGameHandler}/>
		</section>
	)
}
	
export default ResultPage;