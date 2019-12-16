import React from 'react';
import { useState, useEffect } from 'react';

const LoadListings = (props) => {
    const updateListings = () => {
        console.log(props.homesList);
        if (props.homesList.length <= props.listings.length - 3) {
            props.setDisplayNumber(props.homesList.length + 3);
        } else if (props.homesList.length > props.listings.length - 3) {
            props.setDisplayNumber((props.homesList.length) + (props.listings.length - props.homesList.length));
        }
    }
    return (
        <div className="load-more">
            <button onClick={updateListings}>Load More</button>
        </div>
    )
}

export default LoadListings