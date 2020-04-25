import React from 'react';
import ReactDOM from 'react-dom';
import GalleryScroller from '../src/index';

const root = document.createElement('div');

window.document.body.appendChild(root);

ReactDOM.render(
    <GalleryScroller/>,
    root
)