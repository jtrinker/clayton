import React from 'react';
import { useState, useEffect } from 'react';

const LoadListings = (props) => {
    const updateListings = (props) => {
        console.log(props.homesDisplayed)
        // props.setDisplayNumber(...props.homesDisplayed, props.listings.slice(9, 12));
    }

    return (
        <button onClick={updateListings}>Load More</button>
    )
}

export default LoadListings