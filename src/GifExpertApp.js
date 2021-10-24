import React, { useState } from 'react';

import {AddCategory} from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
	
	const [categories, setCategories] = useState(['Samurai x']);
	
	const renderCategories = () => {
		return <ol>
			{ categories.map( category => <GifGrid key={category} category={category} /> )}
		</ol>;
	}
	
	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr/>
			{ renderCategories() }
		</>
	);
}

export default GifExpertApp;