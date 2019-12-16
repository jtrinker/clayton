import React from 'react';
import { useState } from 'react';
import './App.css';

const SortBy = props => {
    const sortHomes = e => {
        if (e.target.value === "1") {
            props.setSort([1,-1]);
        } else if (e.target.value === "-1") {
            props.setSort([-1,1]);
        }
    }
    
    return (
        <div>
            <label>sort by</label>
            <select className="browser-default right sort-by" onChange={sortHomes}>
                <option value="1">Low to High</option>
                <option value="-1">High to Low</option>
            </select>
        </div>
    )
}

export default SortBy;