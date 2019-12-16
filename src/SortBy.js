import React from 'react';
import { useState } from 'react';
import './App.css';

const SortBy = props => {
    const sortHomes = e => {
        if (e.target.value === 1) {
            props.setSort(1)
            console.log(props.sortedBy);
        } else if (e.target.value === 2) {
            props.setSort(2)
            console.log(props.sortedBy);
        }
    }
    return (
        <div>
            <label>sort by</label>
            <select className="browser-default right sort-by" onChange={sortHomes}>
                <option value="1">Low to High</option>
                <option value="2">High to Low</option>
            </select>
        </div>
    )
}

export default SortBy;