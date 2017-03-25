// This is a stateless functional component
// Just a function, with props

// ES6
import React from 'react';

const GalleryImage = ({id, file, imageData}) => (
    <div id={id} className="gallery-item">
        <h2 className="gallery-item-title">{file.name}</h2>
        <img src={imageData} alt={file.name} className="gallery-image-preview" />
    </div>
);

GalleryImage.propTypes = {
    id: React.PropTypes.string.isRequired,
    file: React.PropTypes.objectOf(File).isRequired,
    imageData: React.PropTypes.string
};

// This serves no useful purpose here, just so as you remember it's possible
GalleryImage.defaultProps = {
    id: "default-id"
};

export default GalleryImage;

// ES5
/*var React = require("react");

var GalleryImage = function(props){
    return (
        <div id={props.id} className="gallery-item">
            <h2 className="gallery-item-title">{props.file.name}</h2>
            <img src={props.imageData} alt={props.file.name} className="gallery-image-preview" />
        </div>
    );
}

GalleryImage.propTypes = {
    file: React.PropTypes.objectOf(File).isRequired,
    imageData: React.PropTypes.string
}

module.exports = GalleryImage;*/