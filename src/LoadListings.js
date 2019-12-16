import React from 'react';
import styled from 'styled-components';

const LoadMore = styled.div`
    text-align: center;
    margin-bottom: 39px;
`;

const Button = styled.button`
    font-family: 'Source Sans Pro', sans-serif;
    text-align: center;
    width: 350px;
    border-radius: 5px;
    box-shadow: none;
    border: 0;
    padding: 15px;
    background-color: #0075c9;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    
    &:hover {
        background-color: dodgerBlue;
    }
`;
  

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
        <LoadMore>
            <Button onClick={updateListings}>Load More</Button>
        </LoadMore>
    )
}

export default LoadListings