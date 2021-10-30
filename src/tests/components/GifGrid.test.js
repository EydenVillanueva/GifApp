import React from 'react';
import {shallow} from "enzyme";

import GifGrid from "../../components/GifGrid";
import {useFetchGifs} from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');


describe('GifGrid component test suite', () => {
	let category = 'category';
	let wrapper;
	
	
	test('GifGrid component should match snapshot', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});
		
		wrapper = shallow( <GifGrid category={category} /> );
		expect(wrapper).toMatchSnapshot();
	});
	
	test('GifGrid should show items when image are loaded with useFetchGifs', () => {
		
		const gifs = [
			{ id: 1, title: 'Image title', url: 'http://localhost.com/image1.jpg' },
			{ id: 2, title: 'Image title 2', url: 'http://localhost.com/image2.jpg' },
		]
		
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});
		
		wrapper = shallow( <GifGrid category={category} /> );
		
		expect( wrapper ).toMatchSnapshot();
		expect( wrapper.find('p').exists() ).toBe(false);
		expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
	});
});