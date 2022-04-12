import { MOCK_DATA } from '../assets/mock-data';

const usePrepareData = () => {

	const data = MOCK_DATA[Math.floor(Math.random() * MOCK_DATA.length)];

	const goodWords = data.good_words
		.map(item => ({isGood: true, value: item, isChosen: false}));

	const badWords = data.all_words
		.filter(word => !data.good_words.includes(word))
		.map(item => ({isGood: false, value: item, isChosen: false}));

	const question = data.question;
	const allwords = badWords.concat(goodWords);
	const newData = {question: question, allwords: allwords}

	return newData;
}

export default usePrepareData;
