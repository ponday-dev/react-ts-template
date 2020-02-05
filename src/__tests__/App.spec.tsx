import React from 'react';
import { render } from '@testing-library/react';

import { App } from '~/App';

describe('test demo', () => {
    it('test component structure', () => {
        const { getByText } = render(<App />);

        expect(getByText('Hello, World')).toBeTruthy();
    });
});
