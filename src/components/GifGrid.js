import React from 'react';
import PropTypes from 'prop-types';

import GifGridItem from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

const GifGrid = ({category}) => {
	
	const { loading, data: images } = useFetchGifs(category);
	
	const renderImages = (images) => {
		return <ol>
			{ images.map( ({id, title, url}) => <GifGridItem key={id} title={title} url={url} /> )}
		</ol>;
	}
	
	return (
		<div className="card-grid" >
			<h3> {category} </h3>
			{ loading && <p>'Loading...'</p> }
			{renderImages(images)}
		</div>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired
};

export default GifGrid;


