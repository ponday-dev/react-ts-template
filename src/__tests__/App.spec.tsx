import React from 'react';
import { shallow } from 'enzyme';

import { App } from '~/App';

describe('test demo', () => {
    it('test component structure', () => {
        const app = shallow(<App />);

        expect(app.find('div').length).toBe(1);
    });
});
