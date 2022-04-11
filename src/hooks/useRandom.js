const useRandom = () => {

	const getRandom = (min, max) => {
		const random = Math.floor(Math.random() * (max - min) + min);
		return random;
	}
	
	return { getRandom };
};

export default useRandom;