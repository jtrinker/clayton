import React from 'react';
import formatPrice from './helpers';
import styled from 'styled-components';

const Image = styled.img`
    height: 305px;
    @media (max-width: 900px) {
        height: 240px;
    }
`;

const Content = styled.div`
    padding: 0px 0 26px 14px !important;
`;

const ListingInfo = styled.div`
    margin-left: 4px;
`;

const Price = styled.div`
    color: #696969;
`;

const Specs = styled.div`
    color: #313639;
    padding-top: 7px;
    font-weight: 600;
`;

const ListingName = styled.h3`
    margin-bottom: 7px;
    font-size: 25px;
    color: #313639;
`;

const HomeListingCard = props => {
    return (
        <div className="card">
            <div className="card-image">
                <Image src={props.imageUrl} alt={props.name} />
            </div>
            <Content className="card-content">
                <ListingName>{props.name}</ListingName>
                <ListingInfo>
                    <Price><span>Starting in the ${formatPrice(props.startingPrice)}s</span></Price>
                    <Specs><span>{props.sqft}sq. ft {props.beds} beds {props.baths} baths {props.isMultiSection ? 'Multi Section' : ''}</span></Specs>
                </ListingInfo>
            </Content>
        </div>
    )
}

export default HomeListingCard;