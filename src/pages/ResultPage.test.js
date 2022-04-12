import { render, screen } from '../util/test-utils';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

import ResultPage from './ResultPage';

describe("#ResultPage...", () => {
	it("is rendered ", () => {
		act(() => {
			render(
				<ResultPage />
			);
		})
	})
});