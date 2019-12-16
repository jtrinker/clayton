import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
    left: 0px;
    top: 0px;
    width: 164px;
    border: 1px solid #ddd;
    text-align: right;
    border-radius: 3px;
    padding: 0 0 1px 5px;
`;

const Label = styled.label`
    float: left;
    margin: 12px;
    font-size: 15px;
    text-transform: uppercase;
`;

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
            <Label>sort by</Label>
            <Select className="browser-default right" onChange={sortHomes}>
                <option value="1">Low to High</option>
                <option value="-1">High to Low</option>
            </Select>
        </div>
    )
}

export default SortBy;