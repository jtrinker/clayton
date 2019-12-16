import React from 'react';
import { useState } from 'react';
import formatPrice from './helpers';
import './App.css';

const HomeListingCard = props => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.imageUrl} alt={props.name} />
            </div>
            <div className="card-content">
                <h3 className="listing-name">{props.name}</h3>
                <div className="listing-info">
                    <div className="price"><span>Starting in the ${formatPrice(props.startingPrice)}s</span></div>
                    <div className="listing-specs"><span>{props.sqft}sq. ft {props.beds} beds {props.baths} baths {props.isMultiSection ? 'Multi Section' : ''}</span></div>
                </div>
            </div>
        </div>
    )
}

export default HomeListingCard;