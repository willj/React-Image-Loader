// ES6
import './Gallery.css';
import React from 'react';
import GalleryImage from './GalleryImageContainer';

class Gallery extends React.Component{
    constructor (props){
        super(props);
        this.state = { files: [] };
    }

    handleDragEnd(e){
        e.preventDefault();
        e.dataTransfer.clearData();
    }

    handleDragOver(e){
        e.preventDefault();
        e.currentTarget.classList.add("dragging");
    }

    handleDragLeave(e){
        e.preventDefault();
        e.currentTarget.classList.remove("dragging");
    }

    handleDrop(e){
        e.preventDefault();
        this.handleDragLeave(e);
        let fileList = e.dataTransfer.files;

        for (var i = 0; i < fileList.length; i++){
            this.loadFile(fileList[i]);
        }
    }

    loadFile(file){
        if (!/^image\//.exec(file.type)) return;

        this.setState( (state) => {
            state.files = state.files.concat(file);
            return state;
        })
    }

    render(){
        var images = this.state.files.map((file, index) => {
            return (
                <GalleryImage key={index} fileIndex={index} file={file} />
            );
        });

        return (
            <div className="gallery" 
                onDragOver={this.handleDragOver} 
                onDrop={this.handleDrop.bind(this)} 
                onDragEnd={this.handleDragEnd} 
                onDragLeave={this.handleDragLeave}>    
                {images}
            </div>
        );
    }

}

export default Gallery;


// ES5
/*require('./Gallery.css');
var React = require("react");
var GalleryImage = require("./GalleryImageContainer");

var Gallery = React.createClass({
    getInitialState: function(){
        return {
            files: []
        };
    },

    handleDragEnd: function(e){
        e.preventDefault();
        e.dataTransfer.clearData();
    },

    handleDragOver: function(e){
        e.preventDefault();
        e.currentTarget.classList.add("dragging");
    },

    handleDragLeave: function(e){
        e.preventDefault();
        e.currentTarget.classList.remove("dragging");
    },

    handleDrop: function(e){
        e.preventDefault();
        this.handleDragLeave(e);
        var fileList = e.dataTransfer.files;

        for (var i = 0; i < fileList.length; i++){
            this.loadFile(fileList[i]);
        }
    },

    loadFile: function(file){
        if (!/^image\//.exec(file.type)) return;

        this.setState( function(state){
            state.files = state.files.concat(file);
            return state;
        })
    },

    render: function(){
        var images = this.state.files.map(function(file, index){
            return (
                <GalleryImage key={index} fileIndex={index} file={file} />
            );
        });

        return (
            <div className="gallery" 
                onDragOver={this.handleDragOver} 
                onDrop={this.handleDrop} 
                onDragEnd={this.handleDragEnd} 
                onDragLeave={this.handleDragLeave}>    
                {images}
            </div>
        );
    }
});

module.exports = Gallery;*/