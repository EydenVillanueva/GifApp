import React from "react";
import {shallow} from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Test that component GifGridItem is showing correctly', () => {
	
	const title = "Test title";
	const url = "https://localhost/image.jpg"
	
	const wrapper = shallow(<GifGridItem url={url} title={title} />);
	
	test('It should correctly display the component ', () => {
			expect(wrapper).toMatchSnapshot();
	});
	
	test('It should have a paragraph with the title', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});
	
	test('It should be the image equals than url props', () => {
		const img = wrapper.find('img');
		expect(img.props().src).toBe(url);
		expect(img.props().alt).toBe(title);
	});
});