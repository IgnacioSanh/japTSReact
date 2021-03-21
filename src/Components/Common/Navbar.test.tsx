import React from "react";
import Navbar from './Navbar';
import { shallow } from 'enzyme';

describe('Navbar component test', () => {
    test('Component renders correctly', () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper.find('.navbar').length).toBe(1);
    });
    test('Has 5 menu options', () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper.find('.nav-link').length).toBe(5);
    });
})