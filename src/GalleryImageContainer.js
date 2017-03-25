// ES6
import React from 'react';
import Image from './GalleryImage';

class GalleryImage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id: "gallery-image-" + props.fileIndex,
            file: props.file,
            imageData: null
        };
    }

    loadImage(){
        let reader = new FileReader();
        
        reader.onload = ((e) => {
            this.setState({imageData: e.target.result });
        });

        reader.readAsDataURL(this.state.file);
    }

    componentDidMount(){
        this.loadImage();
    }

    render(){
        return (
            <Image file={this.state.file} id={this.state.id} imageData={this.state.imageData} />
        );
    }
}

GalleryImage.propTypes = {
    file: React.PropTypes.objectOf(File).isRequired,
    fileIndex: React.PropTypes.number.isRequired
};

export default GalleryImage;


// ES5
// var React = require("react");
// var Image = require("./GalleryImage");

// var GalleryImage = React.createClass({
//     propTypes: {
//         file: React.PropTypes.objectOf(File).isRequired,
//         fileIndex: React.PropTypes.number.isRequired
//     },

//     getInitialState: function(){
//         return {
//             id: "gallery-image-" + this.props.fileIndex,
//             file: this.props.file,
//             imageData: null
//         };
//     },

//     componentDidMount: function(){
//         this.loadImage();
//     },

//     loadImage: function(){
//         var reader = new FileReader();
        
//         reader.onload = (function (e){
//             this.setState({imageData: e.target.result });
//         }).bind(this);

//         reader.readAsDataURL(this.state.file);
//     },

//     render: function(){
//         return (
//             <Image file={this.state.file} id={this.state.id} imageData={this.state.imageData} />
//         );
//     }
// });

// module.exports = GalleryImage;