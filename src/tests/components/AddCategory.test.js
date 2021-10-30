import React from 'react';
import { shallow } from "enzyme";

import { AddCategory } from "../../components/AddCategory";

describe('AddCategory component test suite', () => {
	
	const setCategories = jest.fn();
	let wrapper;
	
	beforeEach( () => {
		jest.clearAllMocks();
		wrapper = shallow( <AddCategory setCategories={setCategories}/> );
	});
	
	test('Should show correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
	
	test('Should change the text field', () => {
		const input = wrapper.find('input');
		const value = 'Hola mundo';
		
		input.simulate('change', { target: { value }});
		expect(wrapper.find('p').text()).toBe(value);
	});
	
	test('Should not post the information on submit', () => {
		wrapper
			.find('form')
			.simulate('submit', {preventDefault(){}});
		
		expect( setCategories ).not.toHaveBeenCalled();
	});
	
	test('Should call the setCategories and clean the text field', () => {
		const value = 'input changed';
		
		// simulate the handleInputChange and handleSubmit
		wrapper.find('input').simulate('change', { target: {value}});
		wrapper.find('form').simulate('submit', { preventDefault(){} });
		
		// setCategories should be called
		expect( setCategories ).toBeCalled();
		expect( setCategories ).toHaveBeenLastCalledWith( expect.any(Function) );
		// input value should be rested to ''
		expect(wrapper.find('input').props().value).toBe('');
	});
});