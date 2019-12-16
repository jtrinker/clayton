import React from 'react';
import { useState } from 'react';
import listings from './seed.js';
import SortBy from './SortBy';
import HomeListingCard from './HomeListingCard';
import LoadListings from './LoadListings';
import styled from 'styled-components';

const SubheaderContainer = styled.div`
  margin: 0 15px 0 6px;
`;

const Subheader = styled.h3`
  margin-bottom: 7px;
  font-size: 25px;
  color: #313639;
`;

const DropdownContainer = styled.div`
  margin-top: 20px;
`;

const Listings = () => {
  const [ sortedBy, setSort ] = useState([1,-1]);
  const [ listingsData, setListings] = useState(listings);
  const [ homesDisplayed , setDisplayNumber ] = useState(9);

  const homeArray = listingsData.sort((a, b) => (a.startingPrice > b.startingPrice) ? sortedBy[0] : sortedBy[1]).slice(0, homesDisplayed);
  const homes = homeArray.map((home, index) => (
      <div className="col xl4 l6 m6 s12" key={index}>
        <HomeListingCard 
          name={home.homeName}
          imageUrl={home.imageURL}
          beds={home.beds}
          baths={home.baths}
          isMultiSection={home.isMultiSection}
          sqft={home.sqft}
          startingPrice={home.startingPrice}
        />
      </div>
  ));

  return (
    <div>
      <div className="row hide-on-med-and-down">
        <SubheaderContainer>
          <Subheader className="left">{`${listingsData.length} `}homes available</Subheader>
          <DropdownContainer className="right">
            <SortBy homesList={homeArray} setSort={setSort} />
          </DropdownContainer>
        </SubheaderContainer>
      </div>
      <div className="row">
        {homes}
      </div>
      <div className="row">
        <LoadListings
          listings={listingsData}
          homesList={homeArray}
          setDisplayNumber={setDisplayNumber}
          numberOfHomesDisplayed={homesDisplayed}
        />
      </div>
    </div>
  )
}

export default Listings;