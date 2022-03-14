import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//styles 
import { Image } from './Thumb.styles';


const Thumb = ({image, movieId, clickable }) =>  (
    <div>
        {
            clickable ? (
                <Link to={`/${movieId}`}>
                    <Image src = {image} alt= "movie-thumb"/>
                </Link>
            ) :(
                <Image src = {image} alt= "movie-thumb"/>)
        }
    </div>
)
Thumb.prototype = {
    image:   PropTypes.string,
    movieId:  PropTypes.number,
    callback: PropTypes.bool,
}
export default Thumb;