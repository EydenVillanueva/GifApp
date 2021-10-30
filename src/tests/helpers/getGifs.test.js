import {getGifs} from "../../helpers/getGifs";


describe('getGifs test', () => {
	test('It should fetch 10 elements', async () => {
		const gifs = await getGifs('One Punch');
		expect(gifs.length).toBe(10);
	});
	
	test('It should fetch 10 elements', async () => {
		const gifs = await getGifs('');
		expect(gifs.length).toBe(0);
	});
});