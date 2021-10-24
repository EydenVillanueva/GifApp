export const getGifs = async (category) => {
	const giphyApiKey = 'ZNA0puKDxXLE6cvlFLQPYU39sxzpxXDe';
	const gifUri = 'https://api.giphy.com/v1/gifs/search';
	const request = `${gifUri}?q=${encodeURI(category)}&limit=10&api_key=${giphyApiKey}`;
	
	const response = await fetch(request);
	const {data} = await response.json();

	return data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}
	});
};