import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './HomePage.module.scss';
import Button from '../components/ui/Button';
import ButtonLink from '../components/ui/ButtonLink';
import usePrepareData from '../hooks/usePrepareData';
import { gameActions } from '../store/index';
import { userActions } from '../store/index';
import { MOCK_DATA } from '../assets/mock-data';

const HomePage = () => {

	const data = usePrepareData();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const nickname = useSelector(state => state.user.nickname);

	const [isDisabled, setIsDisabled] = useState(true);

	const changeNicknameHandler = (event) => {
		setIsDisabled((event.target.value.length < 3) ? true : false);
		const nick = event.target.value;
		dispatch(userActions.setNickname(nick));
	}

	const submitHandler = (event) => {
		event.preventDefault();
		dispatch(userActions.login());
		dispatch(gameActions.initGame(data));
		navigate('/game');
	}

	return (
		<section className={styles.container}>
			<h1 className={styles.header}>Wordcloud Game</h1>
			<form className={styles.form}>
				<input 
					id="nickname"
					type="text" 
					className={styles.form__input}
					placeholder="Enter your nickname here (min 3 characters)..." 
					value={nickname}
					onChange={changeNicknameHandler}
				/>
			</form>
			<Button type="submit" text="Play" onClick={submitHandler} disabled={isDisabled}/>
		</section>
	)
}

export default HomePage;