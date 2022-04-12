import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialGameState = { 
	question: '', 
	words: [], 
	goodAnswers: [],
	badAnswers: [],
	result: 0 
};

const initialUserState = { 
	nickname: '',
	isLoggedIn: false
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialUserState,
	reducers: {
		setNickname(state, action) {
			state.nickname = action.payload;
		},
		login(state) {
			state.isLoggedIn = true;
		}
	}
});

const gameSlice = createSlice({
	name: 'game',
	initialState: initialGameState,
	reducers: {
		initGame(state, action) {
			state.question = action.payload.question;
			state.words = action.payload.allwords;
			state.result = 0;
		},
		chooseAnswer(state, action) {
			const chosen = action.payload;
			const chosenIndex = state.words.findIndex(item => item.value === chosen.value);
			state.words[chosenIndex] = chosen;
		},
		checkAnswers(state) {
			const chosenGoods = state.words.filter(item => (item.isGood && item.isChosen));
			const chosenBads = state.words.filter(item => (!item.isGood && item.isChosen));
			const unchosenGoods = state.words.filter(item => (item.isGood && !item.isChosen));
			state.goodAnswers.concat(chosenGoods);
			state.badAnswers.concat(chosenBads);
			state.result = chosenGoods.length*2 - (chosenBads.length + unchosenGoods.length);
		}
	}
});

const store = configureStore({
	reducer: {
		game: gameSlice.reducer,
		user: userSlice.reducer
	}
});

export const gameActions = gameSlice.actions;
export const userActions = userSlice.actions;
export const gameReducer = gameSlice.reducer;
export const userReducer = userSlice.reducer;

export default store;